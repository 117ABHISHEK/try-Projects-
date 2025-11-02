import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaUsers, FaShieldAlt, FaHospital } from 'react-icons/fa';

const WelcomePage = () => {
  return (
    <div className="hero-thali">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="fade-in">
              <h1 className="display-3 fw-bold mb-4">
                <FaHeartbeat className="me-3" />
                ThalAI Guardian
              </h1>
              <p className="lead mb-5">
                An Intelligent Lifeline for Thalassemia Warriors
              </p>
              <p className="mb-5">
                Connecting patients with blood donors, healthcare providers, and essential resources for comprehensive Thalassemia care.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <Link to="/login" className="btn btn-light btn-lg px-4">
                  Get Started
                </Link>
                <Link to="/register" className="btn btn-outline-light btn-lg px-4">
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-3 col-sm-6">
            <div className="card-thali text-center h-100">
              <div className="card-body">
                <FaHeartbeat className="text-danger mb-3" size={48} />
                <h5 className="card-title">Smart Matching</h5>
                <p className="card-text text-muted">
                  AI-powered blood donor matching based on location, blood type, and availability.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card-thali text-center h-100">
              <div className="card-body">
                <FaUsers className="text-primary mb-3" size={48} />
                <h5 className="card-title">Multi-Role Support</h5>
                <p className="card-text text-muted">
                  Dedicated dashboards for patients, donors, doctors, hospitals, and administrators.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card-thali text-center h-100">
              <div className="card-body">
                <FaShieldAlt className="text-success mb-3" size={48} />
                <h5 className="card-title">Health Tracking</h5>
                <p className="card-text text-muted">
                  Monitor hemoglobin, ferritin levels, and manage your health records efficiently.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card-thali text-center h-100">
              <div className="card-body">
                <FaHospital className="text-info mb-3" size={48} />
                <h5 className="card-title">Hospital Network</h5>
                <p className="card-text text-muted">
                  Connect with healthcare providers and blood banks across the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-3 col-6 mb-4">
            <h2 className="text-white fw-bold">10,000+</h2>
            <p className="text-white-50">Active Users</p>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <h2 className="text-white fw-bold">5,000+</h2>
            <p className="text-white-50">Blood Donors</p>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <h2 className="text-white fw-bold">500+</h2>
            <p className="text-white-50">Healthcare Partners</p>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <h2 className="text-white fw-bold">98%</h2>
            <p className="text-white-50">Success Rate</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container text-center py-5">
        <h2 className="text-white mb-4">Ready to Join Our Community?</h2>
        <p className="text-white-50 mb-4">
          Be part of a supportive network dedicated to Thalassemia care.
        </p>
        <Link to="/register" className="btn btn-light btn-lg px-5">
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;