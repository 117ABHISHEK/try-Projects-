import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  Welcome, 
  RoleSelection, 
  DonorLogin, 
  PatientLogin, 
  DonorRegister, 
  PatientRegister, 
  HomePage,
  ProfilePage
} from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/donor/login" element={<DonorLogin />} />
          <Route path="/patient/login" element={<PatientLogin />} />
          <Route path="/donor/register" element={<DonorRegister />} />
          <Route path="/patient/register" element={<PatientRegister />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;