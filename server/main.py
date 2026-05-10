import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import get_estimate, get_weather_data

app = FastAPI()

# Configure CORS (adjust the origins as needed)
origins = [
    "http://localhost:5173",  # Vite dev server default address
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # Allow requests from these origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/hello")
def read_hello():
    return {"message": "Hello from FastAPI! Yay!"}

@app.get("/api/estimate")
def estimate(building_size: float, wwr: float, insulation: float, lat: float, lon: float):
    openweather_api_key = os.environ["OPENWEATHER_API_KEY"]

    # Retrieve weather data
    weather_data = get_weather_data(lat, lon, openweather_api_key)
    
    if weather_data is None:
        raise HTTPException(status_code=400, detail="Could not fetch weather data")

    # Get temperature and humidity
    temperature = weather_data["temperature"]
    humidity = weather_data["humidity"]

    # Predict estimates
    prediction = get_estimate(building_size, wwr, insulation, temperature, humidity)

    # Return structured response
    return {
        "energy_savings_potential": prediction[0],
        "zonal_heating_cooling_data": prediction[1],
        "carbon_emission_rate": prediction[2],
        "water_usage": prediction[3],
        "lighting_consumption": prediction[4]
    }
