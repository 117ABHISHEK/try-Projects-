import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const DonorLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate API call by using localStorage
    try {
      const { email, password } = formData;

      const users = JSON.parse(localStorage.getItem('app_users') || '[]');
      const user = users.find(u => u.email === email && u.role === 'donor');

      // WARNING: Comparing plain text passwords is insecure. This is for simulation only.
      if (user && user.password === password) {
        // Don't store the password in the session
        const { password: userPassword, ...userToStore } = user;
        localStorage.setItem('loggedInUser', JSON.stringify(userToStore));
        navigate('/home');
      } else {
        setErrors({ form: 'Invalid email or password' });
      }
    } catch (err) {
      setErrors({ form: 'Something went wrong during local login.' });
    }
  };

  return (
    <div className="min-h-screen bg-body-light-grey flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🩸</div>
          <h1 className="text-3xl font-bold text-charcoal-grey mb-2">
            Donor Login
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-red focus:border-transparent transition-all duration-300"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-red focus:border-transparent transition-all duration-300"
              placeholder="Enter your password"
            />
          </div>

          {errors.form && <p className="text-red-500 text-sm mt-1 text-center">{errors.form}</p>}

          <button
            type="submit"
            className="w-full bg-[#c0392b] text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-[#a93229] transition-all duration-300 hover:shadow-lg"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link
              to="/donor/register"
              className="text-[#c0392b] hover:text-[#a93229] font-semibold transition-colors duration-300"
            >
              Register here
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

export default DonorLogin;
