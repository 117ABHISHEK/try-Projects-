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

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user profile

### Protected Routes
- `GET /api/patient/dashboard` - Patient dashboard data
- `GET /api/donor/dashboard` - Donor dashboard data
- `GET /api/doctor/dashboard` - Doctor dashboard data
- `GET /api/admin/dashboard` - Admin dashboard data

## User Roles

1. **Patient**: Track health, view donor requests
2. **Donor**: View donation history, see blood requests
3. **Doctor**: Access patient records, manage appointments
4. **Admin**: Manage all users, view platform statistics

## Security Features

- Password hashing with bcryptjs
- JWT tokens stored in HttpOnly cookies
- CORS protection
- Helmet for security headers
- Role-based route protection
- Input validation and sanitization

## Development

### Running Individual Services

**Server only:**
```bash
npm run server
```

**Client only:**
```bash
npm run client
```

### Environment Variables

Create a `.env` file in the `server` directory with:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/thalai-guardian
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
