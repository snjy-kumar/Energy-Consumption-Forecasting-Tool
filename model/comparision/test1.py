import pandas as pd
import matplotlib.pyplot as plt

def plot_predictions(data):
    # Ensure the necessary columns are present
    if 'timestamp' not in data.columns or 'predicted_consumption' not in data.columns:
        print(f"Error: Required columns are missing.")
        print("Available columns:", data.columns)
        return
    
    # Plot Predicted Consumption
    plt.figure(figsize=(14, 6))
    
    plt.plot(data['timestamp'], data['predicted_consumption'], label='Predicted Consumption', color='red', alpha=0.7)
    
    plt.title('Predicted Electricity Consumption')
    plt.xlabel('Timestamp')
    plt.ylabel('Electricity Consumption (kWh)')
    plt.legend()
    plt.grid(True)
    plt.xticks(rotation=45)
    
    plt.tight_layout()
    plt.show()

# Usage example
if __name__ == "__main__":
    # Load the data (this should be the data with predicted consumption)
    data = pd.read_csv('forecast_results.csv', parse_dates=['timestamp'])

    # Call the function to plot
    plot_predictions(data)
