import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Plot Actual vs Predicted Consumption (Line Plot)
def plot_line(data):
    plt.figure(figsize=(14, 6))
    plt.plot(data['timestamp'], data['consumption_kWh'], label='Actual Consumption', color='blue', alpha=0.7)
    plt.plot(data['timestamp'], data['predicted_consumption'], label='Predicted Consumption', color='red', alpha=0.7)
    plt.title('Actual vs Predicted Electricity Consumption')
    plt.xlabel('Timestamp')
    plt.ylabel('Electricity Consumption (kWh)')
    plt.legend()
    plt.grid(True)
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()

# Bar Plot for Actual vs Predicted Consumption
def plot_bar(data):
    # Ensure that the data is not too large for bar plot
    data_subset = data.head(24)  # Only use first 24 rows for a clearer bar chart
    x = np.arange(len(data_subset))
    
    plt.figure(figsize=(14, 6))
    plt.bar(x - 0.2, data_subset['consumption_kWh'], width=0.4, label='Actual Consumption', align='center', color='blue', alpha=0.7)
    plt.bar(x + 0.2, data_subset['predicted_consumption'], width=0.4, label='Predicted Consumption', align='center', color='red', alpha=0.7)
    plt.xticks(x, data_subset['timestamp'].dt.strftime('%Y-%m-%d %H:%M'), rotation=45)
    plt.title('Actual vs Predicted Consumption (Bar Chart)')
    plt.xlabel('Timestamp')
    plt.ylabel('Electricity Consumption (kWh)')
    plt.legend()
    plt.tight_layout()
    plt.show()

# Error Plot (Difference between Actual and Predicted Consumption)
def plot_error(data):
    data['error'] = data['consumption_kWh'] - data['predicted_consumption']
    
    plt.figure(figsize=(14, 6))
    plt.plot(data['timestamp'], data['error'], label='Error (Actual - Predicted)', color='green', alpha=0.7)
    plt.axhline(0, color='black', linestyle='--', linewidth=1)
    plt.title('Prediction Error (Actual - Predicted)')
    plt.xlabel('Timestamp')
    plt.ylabel('Error (kWh)')
    plt.legend()
    plt.grid(True)
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()

# Histogram of Prediction Errors
def plot_error_distribution(data):
    data['error'] = data['consumption_kWh'] - data['predicted_consumption']
    
    plt.figure(figsize=(14, 6))
    plt.hist(data['error'], bins=30, color='purple', alpha=0.7, edgecolor='black')
    plt.title('Distribution of Prediction Errors')
    plt.xlabel('Error (kWh)')
    plt.ylabel('Frequency')
    plt.grid(True)
    plt.tight_layout()
    plt.show()

# Scatter Plot of Actual vs Predicted Consumption
def plot_scatter(data):
    plt.figure(figsize=(8, 8))
    plt.scatter(data['consumption_kWh'], data['predicted_consumption'], color='orange', alpha=0.5)
    plt.plot([data['consumption_kWh'].min(), data['consumption_kWh'].max()], [data['consumption_kWh'].min(), data['consumption_kWh'].max()],
             color='black', linestyle='--')  # 45-degree line (perfect prediction)
    plt.title('Scatter Plot of Actual vs Predicted Consumption')
    plt.xlabel('Actual Consumption (kWh)')
    plt.ylabel('Predicted Consumption (kWh)')
    plt.grid(True)
    plt.tight_layout()
    plt.show()

# Usage example
if __name__ == "__main__":
    # Load the data (this should be the data with both actual and predicted consumption)
    actual_data = pd.read_csv('electricity_consumption_5years.csv', parse_dates=['timestamp'])  # Your actual consumption data
    predicted_data = pd.read_csv('forecast_results.csv', parse_dates=['timestamp'])
    
    # Merge actual and predicted data on timestamp
    data = pd.merge(actual_data, predicted_data, on='timestamp', how='inner')
    
    # Call the functions to plot
    plot_line(data)               # Line plot of actual vs predicted
    plot_bar(data)                # Bar plot for actual vs predicted
    plot_error(data)              # Error plot (difference between actual and predicted)
    plot_error_distribution(data) # Error distribution
    plot_scatter(data)            # Scatter plot of actual vs predicted
