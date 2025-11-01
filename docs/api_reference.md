# ThalAI Guardian - API Reference

Complete API endpoint documentation for the backend server.

**Base URL:** `http://localhost:5000/api`

## Authentication

All authenticated endpoints require a JWT token in an HttpOnly cookie.

### POST /auth/register
Register a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "patient"
}
```

**Response (201):**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "patient"
  }
}
```

### POST /auth/login
User login.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "user": { "id": "...", "name": "...", "email": "...", "role": "..." }
}
```

### POST /auth/logout
User logout (clears JWT cookie).

### GET /auth/me
Get current authenticated user info. Requires authentication.

## Appointments

### POST /appointments
Create new appointment. Requires authentication.

**Request Body:**
```json
{
  "patient": "userId",
  "appointmentDate": "2025-12-01",
  "startTime": "10:00",
  "endTime": "11:00",
  "appointmentType": "transfusion",
  "reason": "Regular blood transfusion",
  "hospital": "hospitalUserId"
}
```

### GET /appointments
Get appointments filtered by role. Requires authentication.

**Query Parameters:**
- `status`: Filter by status (scheduled, confirmed, completed, cancelled)
- `startDate`: Filter by date range start
- `endDate`: Filter by date range end

### GET /appointments/:id
Get single appointment by ID.

### PUT /appointments/:id
Update appointment.

### DELETE /appointments/:id
Cancel appointment (soft delete, sets status to cancelled).

## Chatbot

### POST /chatbot/message
Send message to ThalAI chatbot. Requires authentication.

**Request Body:**
```json
{
  "message": "What is Thalassemia?",
  "sessionId": "optional_session_id"
}
```

**Response:**
```json
{
  "botResponse": "Thalassemia is an inherited blood disorder...",
  "suggestions": ["Symptoms", "Treatment", "Find donors"],
  "intent": "thalassemia_info",
  "sessionId": "..."
}
```

### GET /chatbot/history
Get chat history for current user.

### GET /chatbot/session/:id
Get specific chat session.

### DELETE /chatbot/session/:id
Delete a chat session.

## AI Prediction

### POST /ai/predict-donor
Get AI-powered donor predictions. Requires authentication.

**Request Body:**
```json
{
  "bloodType": "O+",
  "location": {
    "city": "Mumbai",
    "state": "Maharashtra"
  },
  "urgency": "emergency"
}
```

**Response:**
```json
{
  "predictions": [
    {
      "donorId": "...",
      "compatibilityScore": 0.95,
      "donorInfo": { "name": "...", "bloodGroup": "O+", ... },
      "factors": {
        "bloodTypeMatch": 1.0,
        "locationProximity": 1.0,
        "availability": 0.9,
        "donationHistory": 0.85
      }
    }
  ],
  "source": "ai",
  "message": "Donors ranked by AI compatibility score"
}
```

### GET /ai/health
Check AI service status.

## Blood Requests

### POST /requests
Create blood request. Requires authentication.

### GET /requests
Get blood requests filtered by role.

### GET /requests/:id
Get single blood request.

### PUT /requests/:id
Update blood request status.

## Donors

### POST /donor
Create donor profile. Requires authentication (role: donor).

### GET /donor/:id
Get donor profile by user ID.

### PUT /donor/:id
Update donor profile.

### GET /donor/search
Search donors by blood type and location.

**Query Parameters:**
- `bloodType`: Required
- `city`: Optional
- `state`: Optional
- `availableOnly`: Boolean, default true

### POST /donor/:id/donation
Record new donation.

## Patients

### POST /patient
Create patient profile. Requires authentication (role: patient).

### GET /patient/:id
Get patient profile.

### PUT /patient/:id
Update patient profile.

### POST /patient/:id/health-log
Add health log entry.

## Hospitals

### GET /hospitals
Get all hospitals.

**Query Parameters:**
- `city`: Filter by city
- `state`: Filter by state
- `bloodBankAvailable`: Boolean filter

### GET /hospitals/:id
Get single hospital.

### GET /hospitals/search
Search hospitals by name and location.

## Health Records

### POST /health-records
Create health record. Requires authentication.

**Request Body:**
```json
{
  "patient": "patientUserId",
  "hemoglobinLevel": 8.5,
  "ferritinLevel": 2500,
  "symptoms": ["fatigue", "weakness"],
  "notes": "Regular checkup"
}
```

### GET /health-records
Get health records for a patient.

**Query Parameters:**
- `patientId`: Required (auto-filled for patient role)
- `startDate`: Optional
- `endDate`: Optional
- `limit`: Default 50

### GET /health-records/:id
Get single health record.

## Error Responses

All endpoints return standard error format:

```json
{
  "message": "Error description",
  "error": "Detailed error (development only)"
}
```

**Status Codes:**
- 200: Success
- 201: Created
- 400: Bad Request (validation errors)
- 401: Unauthorized (not authenticated)
- 403: Forbidden (not authorized)
- 404: Not Found
- 500: Server Error
