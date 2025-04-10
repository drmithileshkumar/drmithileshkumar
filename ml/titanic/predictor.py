# predictor.py
from fastapi import FastAPI
import joblib
import numpy as np

app = FastAPI()

# Load model and scaler once at startup
model = joblib.load("titanic_model.pkl")
scaler = joblib.load("scaler.pkl")

@app.post("/predict")
async def predict(data: dict):
    try:
        # Extract input data
        pclass = data["pclass"]
        sex = data["sex"]
        age = data["age"]
        sibsp = data["sibsp"]
        parch = data["parch"]
        fare = data["fare"]

        # Prepare and scale input
        input_data = np.array([[pclass, sex, age, sibsp, parch, fare]])
        input_scaled = scaler.transform(input_data)

        # Predict
        prediction = model.predict(input_scaled)
        result = "Survived" if prediction[0] == 1 else "Not Survived"

        return {"prediction": result}
    except Exception as e:
        return {"error": str(e)}