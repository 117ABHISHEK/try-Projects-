import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import BloodRequestsPage from "./pages/BloodRequestsPage"
import HealthTrackingPage from "./pages/HealthTrackingPage"
import HospitalManagementPage from "./pages/HospitalManagementPage"
import MentalHealthPage from "./pages/MentalHealthPage"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blood-requests"
              element={
                <ProtectedRoute>
                  <BloodRequestsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/health-tracking"
              element={
                <ProtectedRoute>
                  <HealthTrackingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/hospitals"
              element={
                <ProtectedRoute>
                  <HospitalManagementPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/mental-health"
              element={
                <ProtectedRoute>
                  <MentalHealthPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
