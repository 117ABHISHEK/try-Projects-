import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      // Redirect to role selection if no user is logged in
      navigate('/role-selection');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/role-selection');
  };

  if (!user) {
    return null; // Or a loading spinner
  }

  return (
    <div className="min-h-screen bg-body-light-grey flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-charcoal-grey mb-4">Welcome, {user.name}!</h1>
        <p className="text-gray-600 mb-8">You are logged in as a {user.role === 'donor' ? 'Donor' : 'Patient'}.</p>
        
        <div className="text-left mb-8">
          <h2 className="text-xl font-semibold text-charcoal-grey mb-4">Your Profile</h2>
          <p><span className="font-semibold">Name:</span> {user.name}</p>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-deep-red text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
