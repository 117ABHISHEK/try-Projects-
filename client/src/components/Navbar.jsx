import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaSignOutAlt, FaHeartbeat, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/welcome');
  };

  const getRoleBasedLinks = () => {
    if (!user) return [];

    const commonLinks = [
      { path: '/dashboard', label: 'Dashboard' },
      { path: '/profile', label: 'Profile' },
    ];

    const roleSpecificLinks = {
      patient: [
        { path: '/appointments', label: 'Appointments' },
        { path: '/health-tracking', label: 'Health Tracking' },
        { path: '/blood-requests', label: 'Blood Requests' },
      ],
      donor: [
        { path: '/blood-donor-finder', label: 'Find Requests' },
        { path: '/donation-history', label: 'Donation History' },
      ],
      doctor: [
        { path: '/patients', label: 'My Patients' },
        { path: '/health-records', label: 'Health Records' },
        { path: '/appointments', label: 'Schedule' },
      ],
      hospital: [
        { path: '/blood-inventory', label: 'Blood Bank' },
        { path: '/hospital-appointments', label: 'Appointments' },
        { path: '/blood-requests', label: 'Blood Requests' },
      ],
      admin: [
        { path: '/users', label: 'Users' },
        { path: '/analytics', label: 'Analytics' },
        { path: '/system-settings', label: 'Settings' },
      ],
    };

    return [...commonLinks, ...(roleSpecificLinks[user.role] || [])];
  };

  const isActive = (path) => location.pathname === path;

  if (!user) {
    return null; // Don't show navbar when not logged in
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-thali sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/dashboard">
          <FaHeartbeat className="me-2" />
          ThalAI Guardian
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto">
            {getRoleBasedLinks().map((link) => (
              <li className="nav-item" key={link.path}>
                <Link
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-nav">
            <div className="nav-item dropdown">
              <button
                className="btn btn-link text-white nav-link dropdown-toggle d-flex align-items-center"
                type="button"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaUser className="me-1" />
                {user.name}
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li>
                  <Link className="dropdown-item" to="/profile" onClick={() => setIsMenuOpen(false)}>
                    <FaUser className="me-2" />
                    Profile
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button className="dropdown-item text-danger" onClick={handleLogout}>
                    <FaSignOutAlt className="me-2" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;