# ThalAI Guardian AI Module

Python/Flask service for AI-powered donor prediction.

## Setup

1. Create virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Configure environment:
```bash
cp .env.example .env
# Edit .env if needed
```

4. Run the service:
```bash
python app.py
```

The AI service will run on `http://localhost:5001`

## Endpoints

- `GET /health` - Health check
- `POST /predict-donor` - Predict compatible donors

## Integration

The Express backend automatically connects to this AI service via the `/api/ai/predict-donor` endpoint. If the AI service is unavailable, it falls back to standard donor search.
