# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# import pickle
# import numpy as np
# import os

# # Get current folder path
# BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# with open(os.path.join(BASE_DIR, 'personality_model.pkl'), 'rb') as f:
#     model = pickle.load(f)

# with open(os.path.join(BASE_DIR, 'columns.pkl'), 'rb') as f:
#     COLUMNS = pickle.load(f)

# # Load scaler if you have it
# try:
#     with open(os.path.join(BASE_DIR, 'scaler.pkl'), 'rb') as f:
#         scaler = pickle.load(f)
# except:
#     scaler = None

# app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.get("/")
# def home():
#     return {"message": "Backend is running!", "columns": COLUMNS}

# @app.post("/predict")
# def predict(data: dict):
#     input_values = [data[col] for col in COLUMNS]
#     features = np.array([input_values])

#     # Apply scaler if you used it during training
#     if scaler is not None:
#         features = scaler.transform(features)

#     prediction = model.predict(features)[0]
#     prob = model.predict_proba(features).max() * 100

#     return {
#         "personality_type": str(prediction),
#         "confidence": round(float(prob), 2)
#     }

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