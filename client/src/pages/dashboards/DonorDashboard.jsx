import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { FaHeart, FaUsers, FaHistory, FaBell, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DonorDashboard = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStats({
          totalDonations: 15,
          lastDonation: '2024-10-15',
          nextEligible: '2024-12-15',
          bloodRequests: 3,
          availableForEmergency: true
        });
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border spinner-thali text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">Welcome back, {user?.name}!</h2>
          <p className="text-muted mb-0">Your blood donation impact</p>
        </div>
        <Link to="/blood-requests" className="btn btn-thali-primary">
          <FaBell className="me-2" />
          View Requests
        </Link>
      </div>

      <div className="row mb-4">
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card success">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Total Donations</h6>
                <h3 className="mb-0">{stats?.totalDonations}</h3>
                <small className="text-muted">
                  Lifetime impact
                </small>
              </div>
              <FaHeart className="text-success" size={32} />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card warning">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Last Donation</h6>
                <h5 className="mb-0">
                  {new Date(stats?.lastDonation).toLocaleDateString()}
                </h5>
                <small className="text-muted">
                  48 days ago
                </small>
              </div>
              <FaHistory className="text-warning" size={32} />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card primary">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Next Eligible</h6>
                <h5 className="mb-0">
                  {new Date(stats?.nextEligible).toLocaleDateString()}
                </h5>
                <small className="text-muted">
                  In 30 days
                </small>
              </div>
              <FaCalendarAlt className="text-primary" size={32} />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card danger">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Blood Requests</h6>
                <h3 className="mb-0">{stats?.bloodRequests}</h3>
                <small className="text-muted">
                  2 pending
                </small>
              </div>
              <FaBell className="text-danger" size={32} />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card-thali">
            <div className="card-header">
              <h5 className="mb-0">Donation Hero Status</h5>
            </div>
            <div className="card-body text-center py-5">
              {stats?.availableForEmergency ? (
                <div>
                  <div className="text-success mb-3">
                    <FaHeart size={64} />
                  </div>
                  <h4 className="text-success">Available for Emergency</h4>
                  <p className="text-muted">
                    You can receive emergency blood donation requests in your area
                  </p>
                </div>
              ) : (
                <div>
                  <div className="text-warning mb-3">
                    <FaClock size={64} />
                  </div>
                  <h4 className="text-warning">Rest Period</h4>
                  <p className="text-muted">
                    You're currently in the mandatory 56-day rest period after your last donation
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;