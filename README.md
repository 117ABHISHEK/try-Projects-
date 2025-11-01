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

## Tech Stack

- **Frontend**: React 18, React Router v6, Context API, Axios, TailwindCSS
- **Backend**: Node.js, Express.js, JWT, bcryptjs, helmet, cors
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT tokens stored in HttpOnly cookies

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd thalai-guardian
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**
   - Copy `server/.env.example` to `server/.env`
   - Update the environment variables:
     ```
     NODE_ENV=development
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/thalai-guardian
     JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
     ```

4. **Start MongoDB**
   - Make sure MongoDB is running on your system
   - Default connection: `mongodb://localhost:27017/thalai-guardian`

5. **Run the application**
   ```bash
   npm run dev
   ```
   
   This will start both the server (port 5000) and client (port 3000) concurrently.

## Project Structure

```
thalai-guardian/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── context/        # React Context (Auth)
│   │   ├── pages/          # Page components
│   │   └── App.js
│   └── package.json
├── server/                 # Express backend
│   ├── middleware/         # Auth & role middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── server.js          # Entry point
│   └── package.json
└── package.json           # Root package.json
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
