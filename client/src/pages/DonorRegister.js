import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const DonorRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate API call by using localStorage
      try {
        const { name, email, password } = formData;

        // Get existing users or initialize an empty array
        const users = JSON.parse(localStorage.getItem('app_users') || '[]');

        // Check if user already exists
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
          setErrors({ ...errors, form: 'An account with this email already exists.' });
          return;
        }

        // Create new user. WARNING: In a real app, NEVER store plain text passwords.
        const newUser = {
          id: Date.now().toString(), // Simple unique ID
          name,
          email,
          password, // This is insecure and for simulation only.
          role: 'donor'
        };

        users.push(newUser);
        localStorage.setItem('app_users', JSON.stringify(users));

        setSuccessMessage('Registration successful! Redirecting to login...');
        setTimeout(() => navigate('/donor/login'), 2000);
      } catch (err) {
        setErrors({ ...errors, form: 'Something went wrong during local registration.' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-body-light-grey flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🩸</div>
          <h1 className="text-3xl font-bold text-charcoal-grey mb-2">
            Donor Registration
          </h1>
          <p className="text-gray-600">
            Create your donor account to start helping others
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-red focus:border-transparent transition-all duration-300 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

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
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-red focus:border-transparent transition-all duration-300 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-red focus:border-transparent transition-all duration-300 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Create a password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-red focus:border-transparent transition-all duration-300 ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
          {errors.form && <p className="text-red-500 text-sm mt-1 text-center">{errors.form}</p>}

          <button
            type="submit"
            className="w-full bg-[#c0392b] text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-[#a93229] transition-all duration-300 hover:shadow-lg"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link
              to="/donor/login"
              className="text-[#c0392b] hover:text-[#a93229] font-semibold transition-colors duration-300"
            >
              Sign in here
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/role-selection')}
            className="text-charcoal-grey hover:text-deep-red transition-colors duration-300"
          >
            ← Back to Role Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonorRegister;
