import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor
from xgboost import XGBRegressor
import matplotlib.pyplot as plt
from datetime import datetime
import joblib

class ElectricityForecaster:
    def __init__(self):
        self.rf_model = RandomForestRegressor(
            n_estimators=100,
            max_depth=15,
            random_state=42
        )
        self.xgb_model = XGBRegressor(
            n_estimators=100,
            learning_rate=0.1,
            max_depth=7,
            random_state=42
        )
        self.scaler = StandardScaler()
        
    def prepare_features(self, df):
        df = df.copy()
        
        # Fill missing historical averages
        df['historical_avg_consumption'] = df['historical_avg_consumption'].fillna(
            df['consumption_kWh'].rolling(window=24, min_periods=1).mean()
        )
        
        # Create time features
        df['hour_sin'] = np.sin(2 * np.pi * df['hour_of_day']/24)
        df['hour_cos'] = np.cos(2 * np.pi * df['hour_of_day']/24)
        df['month_sin'] = np.sin(2 * np.pi * df['month']/12)
        df['month_cos'] = np.cos(2 * np.pi * df['month']/12)
        
        # Season encoding
        df = pd.get_dummies(df, columns=['season'], prefix='season')
        
        # Feature selection
        features = [
            'hour_of_day', 'day_of_week', 'month',
            'temperature_C', 'humidity_%', 'historical_avg_consumption',
            'hour_sin', 'hour_cos', 'month_sin', 'month_cos'
        ] + [col for col in df.columns if 'season_' in col]
        
        return df[features]

    def train(self, df):
        df = df.copy()
        X = self.prepare_features(df)
        y = df['consumption_kWh']
        
        # Scale features
        X_scaled = self.scaler.fit_transform(X)
        
        # Train both models
        self.rf_model.fit(X_scaled, y)
        self.xgb_model.fit(X_scaled, y)
        
        return self
    
    def predict(self, df):
        X = self.prepare_features(df)
        X_scaled = self.scaler.transform(X)
        
        # Ensemble prediction
        rf_pred = self.rf_model.predict(X_scaled)
        xgb_pred = self.xgb_model.predict(X_scaled)
        
        return (rf_pred + xgb_pred) / 2
    
    def evaluate(self, df):
        y_pred = self.predict(df)
        y_true = df['consumption_kWh']
        
        mse = np.mean((y_true - y_pred) ** 2)
        rmse = np.sqrt(mse)
        mae = np.mean(np.abs(y_true - y_pred))
        mape = np.mean(np.abs((y_true - y_pred) / y_true)) * 100
        
        return {
            'MSE': mse,
            'RMSE': rmse,
            'MAE': mae,
            'MAPE': mape
        }
    
    def plot_results(self, df, future_periods=168):
        # Generate predictions
        predictions = self.predict(df)
        
        plt.figure(figsize=(15, 6))
        plt.plot(df['consumption_kWh'].values[-future_periods:], 
                label='Actual', alpha=0.7)
        plt.plot(predictions[-future_periods:], 
                label='Predicted', alpha=0.7)
        plt.title('Electricity Consumption Forecast')
        plt.xlabel('Hours')
        plt.ylabel('Consumption (kWh)')
        plt.legend()
        plt.grid(True)
        plt.show()
        
    def save_model(self, path):
        joblib.dump({
            'rf_model': self.rf_model,
            'xgb_model': self.xgb_model,
            'scaler': self.scaler
        }, path)
    
    @classmethod
    def load_model(cls, path):
        models = joblib.load(path)
        forecaster = cls()
        forecaster.rf_model = models['rf_model']
        forecaster.xgb_model = models['xgb_model']
        forecaster.scaler = models['scaler']
        return forecaster

# Usage example
if __name__ == "__main__":
    # Load data
    data = pd.read_csv('electricity_consumption_5years.csv', parse_dates=['timestamp'])
    
    # Split data
    train_size = int(len(data) * 0.8)
    train_data = data[:train_size]
    test_data = data[train_size:]
    
    # Initialize and train model
    forecaster = ElectricityForecaster()
    forecaster.train(train_data)
    
    # Evaluate
    metrics = forecaster.evaluate(test_data)
    print("\nModel Performance Metrics:")
    for metric, value in metrics.items():
        print(f"{metric}: {value:.2f}")
    
    # Plot results
    forecaster.plot_results(test_data)
    
    # Save model
    forecaster.save_model('electricity_forecaster.joblib')
    
    # Generate future predictions
    future_predictions = forecaster.predict(test_data)
    forecast_df = pd.DataFrame({
        'timestamp': test_data['timestamp'],
        'predicted_consumption': future_predictions
    })
    forecast_df.to_csv('forecast_results.csv', index=False)