# ThalAI Guardian

**An Intelligent Lifeline for Thalassemia Warriors**

A comprehensive full-stack web application designed to support Thalassemia patients, blood donors, doctors, and hospitals. ThalAI Guardian facilitates blood donor matching, appointment scheduling, health tracking, and provides AI-powered donor predictions with an intelligent chatbot.

## ✨ Key Features

### 🩸 Blood Donor Matching
- Search compatible donors by blood type and location
- AI-powered donor predictions based on availability and compatibility
- Integration with e-RaktKosh government blood bank data (mock)
- Emergency blood request notifications via SMS/Email

### 📅 Appointment Scheduling
- Book transfusions, checkups, and counseling sessions
- Calendar view for managing appointments
- Automated reminders for upcoming appointments
- Multi-role support (patients, doctors, hospitals)

### 📊 Health Tracking
- Log hemoglobin and ferritin levels
- Visualize health trends with interactive charts
- Doctor access to patient health records
- Automated health alerts

### 🤖 ThalAI Chatbot
- Rule-based AI chatbot for Thalassemia information
- Instant answers about symptoms, treatment, diet, medication
- Contextual suggestions and follow-up questions
- 24/7 availability

### 👥 Multi-Role Support
- **Patients**: Manage health, find donors, book appointments
- **Donors**: Track donations, respond to blood requests
- **Doctors**: Manage patients, add health records
- **Hospitals**: Manage blood bank inventory, appointments
- **Admins**: System monitoring and user management

## 🛠 Tech Stack

### Frontend
- **React** 18.2.0 - Component-based UI
- **React Router** 6.8.1 - Client-side routing
- **Bootstrap** 5 - Responsive design
- **Axios** - HTTP client
- **Recharts** - Data visualization

### Backend
- **Node.js** & **Express.js** 4.18.2
- **MongoDB** & **Mongoose** 8.0.3
- **JWT** - Authentication with HttpOnly cookies
- **Bcrypt** - Password hashing (10 salt rounds)
- **Twilio** - SMS notifications (optional)
- **Nodemailer** - Email notifications (optional)

### AI Module
- **Python** 3.8+ & **Flask** 2.3.0
- Rule-based donor prediction algorithm
- Compatible with scikit-learn for future ML enhancements

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- MongoDB (local or Atlas)
- Python 3.8+ (for AI module)

### Installation

1. **Clone and install all dependencies:**
```bash
git clone <repository-url>
cd try-Projects-
npm run install:all
```

2. **Configure environment variables:**
```bash
# Backend
cd server
cp .env.example .env
# Edit .env: Set MONGODB_URI and JWT_SECRET (min 32 chars)

# Frontend
cd ../client
cp .env.example .env

# AI Module
cd ../ai-module
cp .env.example .env
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

3. **Start all services:**
```bash
# From root directory
npm run dev
```

Or run without AI module:
```bash
npm run dev:no-ai
```

4. **Access the application:**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **AI Module**: http://localhost:5001

## 📁 Project Structure

```
try-Projects-/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/         # Page components (Dashboard, Profile, etc.)
│   │   ├── components/    # Reusable UI components
│   │   ├── context/       # React Context (Auth)
│   │   └── utils/         # Utility functions (API client)
│   └── public/            # Static assets
├── server/                # Express.js backend
│   ├── routes/           # API routes (auth, appointments, chatbot, AI, etc.)
│   ├── models/           # Mongoose models (User, DonorProfile, etc.)
│   ├── services/         # Business logic (chatbot, notifications, e-RaktKosh)
│   ├── middleware/       # Auth and role-based middleware
│   └── server.js         # Server entry point
├── ai-module/            # Python Flask AI service
│   ├── routes/          # Prediction routes
│   ├── utils/           # Data preprocessing (compatibility scoring)
│   ├── model/           # ML models (placeholder)
│   └── app.py           # Flask entry point
├── public-api-integration/  # External API utilities
│   └── sample.json         # Mock e-RaktKosh blood bank data
├── docs/                    # Documentation
│   ├── setup_guide.md      # Detailed installation guide
│   ├── api_reference.md    # Complete API documentation
│   └── project_overview.md # Architecture and features
└── package.json            # Root package with concurrent scripts
```

## 📡 API Endpoints

**Base URL:** `http://localhost:5000/api`

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login (sets JWT cookie)
- `POST /auth/logout` - User logout
- `GET /auth/me` - Get current user info

### Appointments
- `POST /appointments` - Create appointment
- `GET /appointments` - Get appointments (filtered by role)
- `GET /appointments/:id` - Get single appointment
- `PUT /appointments/:id` - Update appointment
- `DELETE /appointments/:id` - Cancel appointment

### Chatbot
- `POST /chatbot/message` - Send message to ThalAI chatbot
- `GET /chatbot/history` - Get chat history
- `DELETE /chatbot/session/:id` - Delete chat session

### AI Prediction
- `POST /ai/predict-donor` - Get AI donor predictions
- `GET /ai/health` - Check AI service status

### Blood Donors & Patients
- `POST /donor` - Create donor profile
- `GET /donor/search?bloodType=O+&city=Mumbai` - Search donors
- `POST /donor/:id/donation` - Record donation
- `POST /patient` - Create patient profile
- `POST /patient/:id/health-log` - Add health log

See `docs/api_reference.md` for complete API documentation.

## 🔒 Security Features

- **JWT Authentication**: HttpOnly cookies for XSS protection
- **Password Hashing**: Bcrypt with 10 salt rounds
- **Role-Based Access Control**: 5 user roles with granular permissions
- **Account Suspension**: isActive field for account management
- **Helmet**: Security headers for Express
- **CORS**: Restricted to client origin
- **Input Validation**: Comprehensive validation on all endpoints

## 🛠 Available Scripts

```bash
npm run dev              # Start all services (backend, frontend, AI)
npm run dev:no-ai        # Start without AI module
npm run install:all      # Install all dependencies
npm run server           # Start backend only
npm run client           # Start frontend only
npm run ai               # Start AI module only
```

## 📚 Documentation

- **Setup Guide**: `docs/setup_guide.md` - Detailed installation instructions
- **API Reference**: `docs/api_reference.md` - Complete API documentation
- **Project Overview**: `docs/project_overview.md` - Architecture and features
- **AI Module**: `ai-module/README.md` - AI service documentation

## 🧪 Testing the Application

After setup, test these user flows:
1. Register as a patient with email/password
2. Complete patient profile with blood type and medical history
3. Search for blood donors by type and location
4. Create an emergency blood request
5. Book a transfusion appointment
6. Add health records (hemoglobin, ferritin levels)
7. Chat with ThalAI bot about Thalassemia
8. View dashboard with stats and upcoming appointments

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
