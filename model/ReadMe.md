
# Machine Learning Model for Energy Consumption Forecasting

This project implements machine learning models for a regression task using `RandomForestRegressor` and `XGBRegressor` from the `scikit-learn` and `xgboost` libraries, respectively. It uses `pandas` for data manipulation, `matplotlib` for visualization, and `joblib` for model persistence.

## Requirements

To run this project locally, you need to have Python installed (preferably version 3.6 or above). You can install the required dependencies using the `requirements.txt` file.

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/snjy-kumar/Energy-Consumption-Forecasting-Tool.git

   cd Energy-Consumption-Forecasting-Tool
   ```

2. **Create and activate a virtual environment**:
   
   - On macOS/Linux:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```
   
   - On Windows:
     ```bash
     python -m venv venv
     venv\Scripts\activate
     ```

3. **Install the dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**:
   After installing the dependencies, you can run the application (assuming the main Python script is named `main.py` or similar):
   ```bash
   python main.py
   ```

### How to Use the Model

- Load your dataset using `pandas` and preprocess the data as required.
- Use `train_test_split` to divide your data into training and testing sets.
- Train the model using either `RandomForestRegressor` or `XGBRegressor`.
- Evaluate the model performance on the test set.
- You can save the trained model using `joblib` and load it later for predictions:
  
   ```python
   # Save model
   joblib.dump(model, 'electricity_forecaster.joblib')

   # Load model
   model = joblib.load('electricity_forecaster.joblib')
   ```

### Visualizing the Results

You can use `matplotlib` to visualize the model's predictions and performance metrics:
  
   ```python
   plt.plot(y_test, label='True Values')
   plt.plot(predictions, label='Predicted Values')
   plt.legend()
   plt.show()
   ```

## Project Structure

Here’s an example of how the project is structured:

```
/Energy-Consumption-Forecasting-Tool
├── main.py               # Main entry point for the application
├── electricity_forecaster.joblib            # Trained model file (saved after training)
├── electricity_consumption_5years.csv    # Example dataset
├── requirements.txt     # List of dependencies
├── README.md            # This file
├── .gitignore           # Git ignore file (e.g., excludes venv)
└── tests/               # Unit tests folder
    └── test1.py    # Example test script
    |__ test2.py    # Example test script
```

## Troubleshooting

- **Error: `ModuleNotFoundError` when running the script**

  This error usually happens if the required libraries aren’t installed. Make sure you have activated your virtual environment and have installed the dependencies using the command:
  ```bash
  pip install -r requirements.txt
  ```

- **Error: `FileNotFoundError` for dataset**

  If you see this error, ensure that the dataset file is in the correct location, and provide the full path to the file when running the script.

## Running Tests

If you have tests in your project, you can run them using `pytest` or another testing framework.

1. Install `pytest` if you don't have it already:
   ```bash
   pip install pytest
   ```

2. Run the tests:
   ```bash
   pytest tests/
   ```

This will run all the tests in the `tests/` directory and show the results.


## Contributing
- Github: [https://githbub.com/snjy-kumar](Sanjay Kumar Thakur)