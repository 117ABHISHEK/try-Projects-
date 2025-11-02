import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaUsers, FaUserMd, FaHospital, FaCog } from 'react-icons/fa';

const RoleSelectionPage = () => {
  const roles = [
    {
      id: 'patient',
      title: 'Patient',
      description: 'Access blood donors, manage health records, book appointments, and connect with healthcare providers.',
      icon: FaHeartbeat,
      color: 'danger',
      features: ['Find blood donors', 'Health tracking', 'Book appointments', 'Emergency requests']
    },
    {
      id: 'donor',
      title: 'Blood Donor',
      description: 'Donate blood to save lives, track donation history, and respond to blood requests in your area.',
      icon: FaUsers,
      color: 'success',
      features: ['Save lives', 'Donation tracking', 'Request notifications', 'Donor recognition']
    },
    {
      id: 'doctor',
      title: 'Doctor',
      description: 'Manage patient records, schedule appointments, provide medical consultations, and track patient health.',
      icon: FaUserMd,
      color: 'primary',
      features: ['Patient management', 'Health records', 'Telemedicine', 'Appointments']
    },
    {
      id: 'hospital',
      title: 'Hospital',
      description: 'Manage blood bank inventory, coordinate donations, handle blood requests, and track hospital resources.',
      icon: FaHospital,
      color: 'info',
      features: ['Blood bank management', 'Donor coordination', 'Resource tracking', 'Emergency response']
    },
    {
      id: 'admin',
      title: 'Administrator',
      description: 'Oversee platform operations, manage user accounts, monitor system health, and ensure compliance.',
      icon: FaCog,
      color: 'warning',
      features: ['User management', 'System monitoring', 'Analytics', 'Platform governance']
    }
  ];

  const getButtonClass = (color) => {
    const colorMap = {
      danger: 'btn-danger',
      success: 'btn-success',
      primary: 'btn-primary',
      info: 'btn-info',
      warning: 'btn-warning'
    };
    return colorMap[color] || 'btn-secondary';
  };

  const getCardClass = (color) => {
    const colorMap = {
      danger: 'border-danger',
      success: 'border-success',
      primary: 'border-primary',
      info: 'border-info',
      warning: 'border-warning'
    };
    return colorMap[color] || 'border-secondary';
  };

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">
            <FaHeartbeat className="text-danger me-3" />
            Choose Your Role
          </h1>
          <p className="lead text-muted">
            Select the role that best describes how you'll use ThalAI Guardian
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {roles.map((role) => (
            <div key={role.id} className="col-lg-3 col-md-6">
              <div className={`card-thali card h-100 border-3 ${getCardClass(role.color)}`}>
                <div className="card-body text-center p-4">
                  <div className={`text-${role.color} mb-3`}>
                    <role.icon size={48} />
                  </div>
                  <h5 className="card-title">{role.title}</h5>
                  <p className="card-text text-muted mb-4">
                    {role.description}
                  </p>
                  <ul className="list-unstyled mb-4">
                    {role.features.map((feature, index) => (
                      <li key={index} className="mb-1 small">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/register?role=${role.id}`}
                    className={`btn ${getButtonClass(role.color)} w-100`}
                  >
                    Continue as {role.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p className="text-muted mb-3">
            Not sure which role to choose? <a href="#" className="text-primary">Learn more about each role</a>
          </p>
          <Link to="/welcome" className="btn btn-outline-secondary">
            ← Back to Welcome
          </Link>
        </div>

        {/* Information Section */}
        <div className="row mt-5">
          <div className="col-md-8 mx-auto">
            <div className="card-thali">
              <div className="card-header">
                <h5 className="mb-0">Why Choose ThalAI Guardian?</h5>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <h6 className="text-primary">🤝 Community Support</h6>
                    <p className="small text-muted">
                      Join a network of patients, donors, and healthcare professionals dedicated to Thalassemia care.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-success">🤖 AI-Powered Matching</h6>
                    <p className="small text-muted">
                      Smart algorithms connect patients with the most compatible blood donors in real-time.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-info">📊 Health Tracking</h6>
                    <p className="small text-muted">
                      Monitor your health metrics, track trends, and share data securely with healthcare providers.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-warning">🏥 Healthcare Integration</h6>
                    <p className="small text-muted">
                      Seamless integration with hospitals, blood banks, and healthcare systems nationwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;