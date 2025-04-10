# predictor.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # Add this
import joblib
import numpy as np

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001"],  # SvelteKit frontend
    allow_credentials=True,
    allow_methods=["*"],  # Allow POST, etc.
    allow_headers=["*"],  # Allow all headers
)

model = joblib.load("titanic_model.pkl")
scaler = joblib.load("scaler.pkl")

@app.post("/predict")
async def predict(data: dict):
    try:
        pclass = data["pclass"]
        sex = data["sex"]
        age = data["age"]
        sibsp = data["sibsp"]
        parch = data["parch"]
        fare = data["fare"]

        input_data = np.array([[pclass, sex, age, sibsp, parch, fare]])
        input_scaled = scaler.transform(input_data)
        prediction = model.predict(input_scaled)
        result = "Survived" if prediction[0] == 1 else "Not Survived"

        return {"prediction": result}
    except Exception as e:
        return {"error": str(e)}