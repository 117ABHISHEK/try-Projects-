import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('personal-details');
  const [userName, setUserName] = useState('User Name');
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUserName(loggedInUser.name);
      setUserRole(loggedInUser.role);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/welcome');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'personal-details':
        return <div>Personal Details Content</div>;
      case 'health-tracking':
        return <div>Health Tracking Content</div>;
      case 'medical-history':
        return <div>Medical History Content</div>;
      case 'settings':
        return <div>Settings Content</div>;
      default:
        return <div>Personal Details Content</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md flex flex-col relative">
        <button
          onClick={() => navigate('/home')}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>
        <div className="p-4">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">{userName}</h2>
            <p className="text-gray-500">{userRole}</p>
          </div>
          <nav className="mt-8">
            <ul>
              <li>
                <button
                  onClick={() => setActiveSection('personal-details')}
                  className={`w-full flex items-center text-left px-4 py-2 rounded-md ${activeSection === 'personal-details' ? 'bg-gray-200' : ''}`}>
                  <lord-icon src="https://cdn.lordicon.com/vinczyvr.json" trigger="hover" style={{width:'25px', height:'25px', marginRight:'10px'}}></lord-icon>
                  Personal Detail
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection('health-tracking')}
                  className={`w-full flex items-center text-left px-4 py-2 rounded-md ${activeSection === 'health-tracking' ? 'bg-gray-200' : ''}`}>
                  <lord-icon src="https://cdn.lordicon.com/useqvoes.json" trigger="hover" style={{width:'25px', height:'25px', marginRight:'10px'}}></lord-icon>
                  Health Tracking
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection('medical-history')}
                  className={`w-full flex items-center text-left px-4 py-2 rounded-md ${activeSection === 'medical-history' ? 'bg-gray-200' : ''}`}>
                  <lord-icon src="https://cdn.lordicon.com/smwmetfi.json" trigger="hover" style={{width:'25px', height:'25px', marginRight:'10px'}}></lord-icon>
                  Medical History
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => setActiveSection('settings')}
                  className={`w-full flex items-center text-left px-4 py-2 rounded-md ${activeSection === 'settings' ? 'bg-gray-200' : ''}`}>
                  <lord-icon src="https://cdn.lordicon.com/sbiheqdr.json" trigger="hover" style={{width:'25px', height:'25px', marginRight:'10px'}}></lord-icon>
                  Settings
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center text-left px-4 py-2 mt-4 text-red-600 hover:bg-red-100 rounded-md">
                  <lord-icon src="https://cdn.lordicon.com/gwvmctbb.json" trigger="hover" style={{width:'25px', height:'25px', marginRight:'10px'}}></lord-icon>
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default ProfilePage;
