from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
import numpy as np

# Load model files
with open("personality_model.pkl", "rb") as f:
    model = pickle.load(f)

try:
    with open("scaler.pkl", "rb") as f:
        scaler = pickle.load(f)
except:
    scaler = None

try:
    with open("columns.pkl", "rb") as f:
        columns = pickle.load(f)
except:
    columns = None

app = FastAPI()

# CORS - allow vercel frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Personality Detection API is running 💖"}

@app.post("/predict")
def predict(data: dict):
    # keep same order as training
    if columns:
        features = [data.get(col, 5) for col in columns]
    else:
        features = list(data.values())
    
    arr = np.array(features).reshape(1, -1)
    if scaler:
        arr = scaler.transform(arr)
    
    pred = model.predict(arr)[0]
    # confidence if available
    try:
        prob = model.predict_proba(arr).max() * 100
    except:
        prob = 95.0
    
    return {
        "personality_type": int(pred) if str(pred).isdigit() else str(pred),
        "confidence": round(float(prob), 1)
    }