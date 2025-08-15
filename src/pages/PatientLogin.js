import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const PatientLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedPatient = JSON.parse(localStorage.getItem('patient'));
    if (storedPatient && storedPatient.email === formData.email && storedPatient.password === formData.password) {
      localStorage.setItem('loggedInUser', JSON.stringify({ ...storedPatient, role: 'patient' }));
      navigate('/profile');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-body-light-grey flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🏥</div>
          <h1 className="text-3xl font-bold text-charcoal-grey mb-2">
            Patient Login
          </h1>
          <p className="text-gray-600">
            Welcome back! Please sign in to your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serenity-blue focus:border-transparent transition-all duration-300"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serenity-blue focus:border-transparent transition-all duration-300"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-serenity-blue text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link
              to="/patient/register"
              className="text-serenity-blue hover:text-opacity-80 font-semibold transition-colors duration-300"
            >
              Register here
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/role-selection')}
            className="text-charcoal-grey hover:text-serenity-blue transition-colors duration-300"
          >
            ← Back to Role Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientLogin;