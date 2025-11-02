import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useAuth } from './context/AuthContext';

// Page Components
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RoleSelectionPage from './pages/RoleSelectionPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ContactPage from './pages/ContactPage';

// Dashboard Components
import PatientDashboard from './pages/dashboards/PatientDashboard';
import DonorDashboard from './pages/dashboards/DonorDashboard';
import DoctorDashboard from './pages/dashboards/DoctorDashboard';
import HospitalDashboard from './pages/dashboards/HospitalDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';

// Specialized Pages
import BloodDonorFinderPage from './pages/BloodDonorFinderPage';
import AppointmentCalendarPage from './pages/AppointmentCalendarPage';
import ChatbotPage from './pages/ChatbotPage';
import HealthTrackingPage from './pages/HealthTrackingPage';
import BloodRequestsPage from './pages/BloodRequestsPage';

// Error Pages
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          {/* Public Routes */}
          <div className="d-flex flex-column min-vh-100">
            <Routes>
              {/* Public Routes - No Navbar/Footer */}
              <Route path="/" element={<HomePage />} />
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/role-selection" element={<RoleSelectionPage />} />

              {/* Protected Routes - With Navbar/Footer */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <DashboardSwitch />
                  </DashboardLayout>
                </ProtectedRoute>
              } />

              <Route path="/profile" element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <ProfilePage />
                  </DashboardLayout>
                </ProtectedRoute>
              } />

              <Route path="/health-tracking" element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <HealthTrackingPage />
                  </DashboardLayout>
                </ProtectedRoute>
              } />

              <Route path="/appointments" element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <AppointmentCalendarPage />
                  </DashboardLayout>
                </ProtectedRoute>
              } />

              <Route path="/blood-requests" element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <BloodRequestsPage />
                  </DashboardLayout>
                </ProtectedRoute>
              } />

              <Route path="/blood-donor-finder" element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <BloodDonorFinderPage />
                  </DashboardLayout>
                </ProtectedRoute>
              } />

              <Route path="/contact" element={
                <DashboardLayout>
                  <ContactPage />
                </DashboardLayout>
              } />

              {/* 404 Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}
}

// Layout wrapper for protected pages
function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}

// Component to switch dashboard based on user role
function DashboardSwitch() {
  return <RoleBasedDashboard />;
}

function RoleBasedDashboard() {
  const { user } = useAuth();

  if (!user) return null;

  switch (user.role) {
    case 'patient':
      return <PatientDashboard />;
    case 'donor':
      return <DonorDashboard />;
    case 'doctor':
      return <DoctorDashboard />;
    case 'hospital':
      return <HospitalDashboard />;
    case 'admin':
      return <AdminDashboard />;
    default:
      return <HomePage />;
  }
}

// Chatbot Component
function Chatbot() {
  return <ChatbotPage />;
}

export default App;