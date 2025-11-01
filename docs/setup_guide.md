# ThalAI Guardian - Setup Guide

Complete installation and setup instructions for the ThalAI Guardian application.

## Prerequisites

- **Node.js** 16+ and npm
- **MongoDB** (local installation or MongoDB Atlas account)
- **Python** 3.8+ (for AI module)
- **Git**

## Step 1: Clone and Install Dependencies

### Backend
```bash
cd try-Projects-/server
npm install
```

### Frontend
```bash
cd try-Projects-/client
npm install
```

### AI Module
```bash
cd try-Projects-/ai-module
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## Step 2: Configure Environment Variables

### Backend Configuration
```bash
cd server
cp .env.example .env
```

Edit `server/.env` with your configuration:
- **MONGODB_URI**: Your MongoDB connection string
- **JWT_SECRET**: Generate a secure random string (min 32 characters)
- Optional: Twilio and Email credentials for notifications

### Frontend Configuration
```bash
cd client
cp .env.example .env
```

The default values should work for local development.

### AI Module Configuration
```bash
cd ai-module
cp .env.example .env
```

## Step 3: Start MongoDB

**Local MongoDB:**
```bash
mongod --dbpath /path/to/your/data
```

**MongoDB Atlas:**
Ensure your MONGODB_URI in server/.env points to your Atlas cluster.

## Step 4: Start All Services

**Option A: Three Separate Terminals**

Terminal 1 - Backend:
```bash
cd server
npm run dev  # or: node server.js
```

Terminal 2 - Frontend:
```bash
cd client
npm start
```

Terminal 3 - AI Module:
```bash
cd ai-module
source venv/bin/activate
python app.py
```

**Option B: Using Root Package.json (Recommended)**
```bash
npm run dev
```

## Step 5: Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **AI Module**: http://localhost:5001

## Common Issues and Solutions

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI is correct
- For Atlas: Verify IP whitelist and credentials

### Port Already in Use
- Change PORT in .env files
- Kill process using the port: `lsof -ti:5000 | xargs kill -9`

### AI Service Unavailable
- The app works without AI service (uses fallback)
- Check Python virtual environment is activated
- Verify port 5001 is not in use

### JWT Secret Error
- Ensure JWT_SECRET is set in server/.env
- Generate secure secret: `openssl rand -base64 32`

## Next Steps

After setup:
1. Register a new user account
2. Complete your profile
3. Explore the dashboard
4. Try the chatbot for Thalassemia information
5. Search for blood donors
6. Book appointments

For more information, see:
- `api_reference.md` - API documentation
- `README.md` - Project overview
