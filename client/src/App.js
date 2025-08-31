import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Welcome, RoleSelection, DonorLogin, PatientLogin, DonorRegister, PatientRegister, HomePage, ProfilePage, DonorPersonalDetails, ContactPage } from './pages';

function App() {
  return (
    <Router>
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
        <Route path="/donor/personal-details" element={<DonorPersonalDetails />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;