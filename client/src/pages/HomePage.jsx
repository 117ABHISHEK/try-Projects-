import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaUsers, FaHospital, FaCalendarAlt, FaRobot } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className="hero-thali">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="fade-in">
                <h1 className="display-4 fw-bold mb-4">
                  <FaHeartbeat className="me-3" />
                  ThalAI Guardian
                </h1>
                <p className="lead mb-4">
                  An Intelligent Lifeline for Thalassemia Warriors
                </p>
                <p className="mb-5">
                  Connecting patients with blood donors, healthcare providers, and essential resources for comprehensive Thalassemia care through AI-powered technology.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Link to="/welcome" className="btn btn-light btn-lg px-4">
                    Get Started
                  </Link>
                  <Link to="/register" className="btn btn-outline-light btn-lg px-4">
                    Join Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <FaHeartbeat className="text-white mb-3" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Our Features</h2>
            <p className="lead text-muted">
              Comprehensive tools and resources for Thalassemia care
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card-thali h-100">
                <div className="card-body text-center">
                  <FaUsers className="text-primary mb-3" size={48} />
                  <h5 className="card-title">Smart Donor Matching</h5>
                  <p className="card-text">
                    AI-powered algorithms match patients with compatible blood donors based on location, blood type, and availability in real-time.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card-thali h-100">
                <div className="card-body text-center">
                  <FaCalendarAlt className="text-success mb-3" size={48} />
                  <h5 className="card-title">Appointment Management</h5>
                  <p className="card-text">
                    Schedule and manage transfusions, checkups, and counseling sessions with intelligent reminders and calendar integration.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card-thali h-100">
                <div className="card-body text-center">
                  <FaHospital className="text-info mb-3" size={48} />
                  <h5 className="card-title">Healthcare Network</h5>
                  <p className="card-text">
                    Connect with hospitals, doctors, and blood banks across the country for comprehensive care coordination.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card-thali h-100">
                <div className="card-body text-center">
                  <FaRobot className="text-warning mb-3" size={48} />
                  <h5 className="card-title">ThalAI Chatbot</h5>
                  <p className="card-text">
                    Get instant answers about Thalassemia, treatment options, and support resources from our intelligent assistant.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card-thali h-100">
                <div className="card-body text-center">
                  <FaHeartbeat className="text-danger mb-3" size={48} />
                  <h5 className="card-title">Health Tracking</h5>
                  <p className="card-text">
                    Monitor hemoglobin levels, ferritin, and vital signs with visual charts and trend analysis for better health management.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card-thali h-100">
                <div className="card-body text-center">
                  <FaUsers className="text-primary mb-3" size={48} />
                  <h5 className="card-title">Multi-Role Support</h5>
                  <p className="card-text">
                    Tailored experiences for patients, donors, doctors, hospitals, and administrators with role-specific dashboards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Making an Impact</h2>
            <p className="lead text-muted">
              Join our growing community dedicated to saving lives
            </p>
          </div>

          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <div className="dashboard-stat-card primary text-center p-4">
                <h3 className="fw-bold">10,000+</h3>
                <p className="text-muted mb-0">Active Users</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="dashboard-stat-card success text-center p-4">
                <h3 className="fw-bold">5,000+</h3>
                <p className="text-muted mb-0">Blood Donors</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="dashboard-stat-card info text-center p-4">
                <h3 className="fw-bold">500+</h3>
                <p className="text-muted mb-0">Healthcare Partners</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="dashboard-stat-card warning text-center p-4">
                <h3 className="fw-bold">98%</h3>
                <p className="text-muted mb-0">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to Join?</h2>
          <p className="lead text-muted mb-4">
            Be part of a supportive network dedicated to Thalassemia care
          </p>
          <Link to="/register" className="btn btn-thali-primary btn-lg px-5">
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card-thali">
                <div className="card-body text-center">
                  <h3 className="card-title mb-4">Need Help?</h3>
                  <p className="card-text text-muted mb-4">
                    Our team is here to support you on your Thalassemia journey.
                  </p>
                  <Link to="/contact" className="btn btn-outline-primary me-2">
                    Contact Support
                  </Link>
                  <Link to="/chatbot" className="btn btn-primary">
                    Chat with ThalAI
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;