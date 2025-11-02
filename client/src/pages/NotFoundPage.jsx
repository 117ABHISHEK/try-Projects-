import React from 'react';
import { Link } from 'react-router-dom';
import {FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container text-center">
        <div className="card-thali">
          <div className="card-body p-5">
            <FaExclamationTriangle className="text-warning mb-4" size={64} />
            <h1 className="display-4 fw-bold mb-3">404 - Page Not Found</h1>
            <p className="lead text-muted mb-4">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Link to="/" className="btn btn-thali-primary">
                Go Home
              </Link>
              <Link to="/dashboard" className="btn btn-outline-primary">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;