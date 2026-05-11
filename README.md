# sustainable-housing-estimator

A small full-stack web app for a department-hosted sustainability hackathon at the University of Athens (Department of Informatics & Telecommunications). The user inputs building parameters (size, wall-to-window ratio, insulation level, latitude/longitude) and the app fetches local weather data and returns an estimate for energy/water consumption and related sustainability metrics.

**The team placed 2nd in the hackathon.**

## Honest framing

I want to be upfront about what this project actually is, since the original (much more enthusiastic) README oversold it:

- **Department-internal hackathon**, not a high-profile event.
- **My contribution was the React frontend** — this was the first website I'd ever built, so the code reflects that (the components work, but they're not how I'd structure things today). I learned a lot doing it.
- **The "AI" was teammate-built and didn't really pan out.** The repo has the integration scaffolding, but I wouldn't characterize the underlying model as a strong one.
- **The OpenWeather call was the one piece that genuinely worked end-to-end** — given a coordinate, fetch weather, feed it into the estimate.

Kept the repo public for completeness and as an honest first-website artefact, not as a portfolio centerpiece.

## Stack

- **Frontend:** React (Vite), with `react-dom`, a custom map picker, a small chatbot dialog, a loading screen
- **Backend:** Python FastAPI (`server/main.py`), single `/api/estimate` endpoint
- **External:** OpenWeather API for current weather at the user-picked coordinates

## Run locally

You need an OpenWeather API key:

```bash
export OPENWEATHER_API_KEY="your-key"
```

Frontend:

```bash
cd client
npm install
npm run dev
```

Backend (in a second terminal):

```bash
cd server
python -m venv venv
source venv/bin/activate     # Windows: venv\Scripts\activate
pip install fastapi uvicorn requests
uvicorn main:app --reload --port 8000
```

Open `http://localhost:5173`.

## License

[MIT](LICENSE) — applies to my own code in this repo. The original FutureTect README phrasing (energy savings, carbon emissions claims) was hackathon-presentation framing and shouldn't be taken as warranted accuracy guarantees about the model's outputs.
