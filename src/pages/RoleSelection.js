import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    if (role === 'donor') {
      navigate('/donor/login');
    } else if (role === 'patient') {
      navigate('/patient/login');
    }
  };

  return (
    <div className="min-h-screen bg-body-light-grey flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-charcoal-grey mb-2">
            Choose Your Role
          </h1>
          <p className="text-gray-600">
            Select how you'd like to use ThalaAI
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleRoleSelect('donor')}
            className="w-full bg-deep-red text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-3"
          >
            <span className="text-2xl">🩸</span>
            <span>As Donor</span>
          </button>

          <button
            onClick={() => handleRoleSelect('patient')}
            className="w-full bg-serenity-blue text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-3"
          >
            <span className="text-2xl">🏥</span>
            <span>As Patient</span>
          </button>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-charcoal-grey hover:text-deep-red transition-colors duration-300"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
