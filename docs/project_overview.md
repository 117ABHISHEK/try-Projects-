# ThalAI Guardian - Project Overview

**An Intelligent Lifeline for Thalassemia Warriors**

## Overview

ThalAI Guardian is a comprehensive full-stack web application designed to support Thalassemia patients, blood donors, doctors, and hospitals. The platform facilitates blood donor matching, appointment scheduling, health tracking, and provides AI-powered donor predictions and a Thalassemia information chatbot.

## Key Features

### For Patients
- **Profile Management**: Complete medical history and emergency contact information
- **Blood Donor Finder**: Search for compatible blood donors by blood type and location
- **Appointment Scheduling**: Book transfusions, checkups, and counseling sessions
- **Health Tracking**: Log hemoglobin and ferritin levels with visualization
- **ThalAI Chatbot**: Get instant answers about Thalassemia care and management
- **Blood Requests**: Create urgent blood requests that notify matching donors

### For Blood Donors
- **Donor Profile**: Manage availability, donation history, and preferences
- **Blood Request Alerts**: Receive notifications for matching blood requests
- **Donation Tracking**: Record donations and view eligibility dates
- **Impact Dashboard**: View donation history and lives impacted

### For Doctors
- **Patient Management**: View and manage assigned patients
- **Health Records**: Add and review patient health records
- **Appointment Management**: Schedule and manage patient appointments
- **Notifications**: Send alerts to patients for urgent matters

### For Hospitals
- **Blood Bank Management**: Track blood inventory by type
- **Appointment Scheduling**: Manage transfusion and checkup appointments
- **Blood Request Management**: Handle incoming blood requests
- **Resource Tracking**: Monitor available beds and facilities

### For Administrators
- **System Dashboard**: View platform statistics and user metrics
- **User Management**: Activate/deactivate user accounts
- **Content Moderation**: Manage platform content and alerts
- **Analytics**: Track blood requests, appointments, and donor activity

## Technology Stack

### Frontend
- **React** 18.2.0 - Component-based UI framework
- **React Router** 6.8.1 - Client-side routing
- **Bootstrap** 5 - Responsive design and styling
- **Axios** - HTTP client for API calls
- **Recharts** - Health data visualization

### Backend
- **Node.js** & **Express.js** 4.18.2 - Server framework
- **MongoDB** & **Mongoose** 8.0.3 - Database and ODM
- **JWT** - Authentication with HttpOnly cookies
- **Bcrypt** - Password hashing (10 salt rounds)
- **Cookie-Parser** - Cookie handling
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing

### AI Module
- **Python** 3.8+ & **Flask** 2.3.0 - AI service framework
- **Flask-CORS** - Enable cross-origin requests
- **Rule-based ML** - Donor prediction algorithm

### External Integrations
- **Twilio** - SMS notifications (optional)
- **Nodemailer** - Email notifications (optional)
- **e-RaktKosh API** - Mock integration with government blood bank data

## Architecture

### System Architecture
```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   React Client  │────▶│  Express API    │────▶│    MongoDB      │
│   (Port 3000)   │     │   (Port 5000)   │     │   Database      │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                               │
                               ▼
                        ┌─────────────────┐
                        │  Flask AI Module│
                        │   (Port 5001)   │
                        └─────────────────┘
```

### Database Schema
- **Users**: Core authentication (5 roles: patient, donor, doctor, hospital, admin)
- **Profiles**: Role-specific data (PatientProfile, DonorProfile, DoctorProfile, HospitalProfile)
- **Appointments**: Scheduling for transfusions, checkups, counseling
- **BloodRequests**: Urgent blood needs with donor matching
- **HealthRecords**: Patient health tracking (hemoglobin, ferritin, symptoms)
- **ChatSessions**: Chatbot conversation history
- **Notifications**: SMS/Email notification tracking

### Authentication Flow
1. User registers with role selection
2. Password hashed with bcrypt (10 salt rounds)
3. JWT token generated (7-day expiry)
4. Token stored in HttpOnly cookie (XSS protection)
5. authMiddleware validates token on protected routes
6. roleMiddleware enforces role-based access control

## Security Features

- **HttpOnly Cookies**: Prevents XSS attacks on JWT tokens
- **Bcrypt Password Hashing**: 10 salt rounds for password security
- **JWT Token Expiry**: 7-day expiration with secure cookies
- **Role-Based Access Control**: Restricts endpoints by user role
- **Account Suspension**: isActive field for account management
- **Helmet Middleware**: Security headers for Express
- **CORS Configuration**: Restricted to client origin

## Development Workflow

1. **Backend**: Express API with MongoDB, running on port 5000
2. **Frontend**: React development server on port 3000 (proxied to backend)
3. **AI Module**: Flask service on port 5001 (optional, has fallback)
4. **Database**: MongoDB local or Atlas

## Deployment Considerations

### Production Checklist
- [ ] Set NODE_ENV=production
- [ ] Use strong JWT_SECRET (32+ characters)
- [ ] Enable HTTPS (secure cookies require it)
- [ ] Configure MongoDB Atlas for cloud database
- [ ] Set up Twilio/Email credentials for notifications
- [ ] Build React app (`npm run build` in client/)
- [ ] Serve React build with Nginx or static hosting
- [ ] Deploy AI module with Gunicorn
- [ ] Set up monitoring and logging

## Future Enhancements

- **Mobile App**: React Native version for iOS/Android
- **Advanced AI**: ML model training on historical donation data
- **Real e-RaktKosh Integration**: Connect to actual government API
- **Video Consultations**: Telemedicine for remote patients
- **Multi-language Support**: Hindi, regional languages
- **Wearable Integration**: Sync with health tracking devices
- **Community Forum**: Patient and family support groups

## License

This project is intended for educational and demonstration purposes.

## Support

For issues or questions:
- Check `setup_guide.md` for installation help
- See `api_reference.md` for API documentation
- Contact project maintainers
