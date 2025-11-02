import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { FaUsers, FaCog, FaChartBar, FaShieldAlt, FaBell, FaHeart, FaHospital, FaUserMd } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStats({
          totalUsers: 10000,
          activeUsers: 8500,
          bloodDonors: 5000,
          patients: 3500,
          doctors: 500,
          hospitals: 150,
          pendingRequests: 25,
          completedToday: 45
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
        <p className="mt-3">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">Welcome, Administrator!</h2>
          <p className="text-muted mb-0">System overview and management</p>
        </div>
        <Link to="/users" className="btn btn-thali-primary">
          <FaUsers className="me-2" />
          Manage Users
        </Link>
      </div>

      <div className="row mb-4">
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card primary">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Total Users</h6>
                <h3 className="mb-0">{stats?.totalUsers.toLocaleString()}</h3>
                <small className="text-muted">
                  Registered
                </small>
              </div>
              <FaUsers className="text-primary" size={32} />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card success">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Active Users</h6>
                <h3 className="mb-0">{stats?.activeUsers.toLocaleString()}</h3>
                <small className="text-muted">
                  85% active rate
                </small>
              </div>
              <FaShieldAlt className="text-success" size={32} />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card danger">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Pending Requests</h6>
                <h3 className="mb-0">{stats?.pendingRequests}</h3>
                <small className="text-muted">
                  Need attention
                </small>
              </div>
              <FaBell className="text-danger" size={32} />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card info">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Completed Today</h6>
                <h3 className="mb-0">{stats?.completedToday}</h3>
                <small className="text-muted">
                  Transactions
                </small>
              </div>
              <FaChartBar className="text-info" size={32} />
            </div>
          </div>
        </div>
      </div>

      {/* User Statistics */}
      <div className="row mb-4">
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card-thali text-center h-100">
            <div className="card-body">
              <FaUsers className="text-primary mb-3" size={32} />
              <h5>Patients</h5>
              <h3 className="text-primary">{stats?.patients.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card-thali text-center h-100">
            <div className="card-body">
              <FaHeart className="text-success mb-3" size={32} />
              <h5>Blood Donors</h5>
              <h3 className="text-success">{stats?.bloodDonors.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card-thali text-center h-100">
            <div className="card-body">
              <FaUserMd className="text-info mb-3" size={32} />
              <h5>Doctors</h5>
              <h3 className="text-info">{stats?.doctors.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card-thali text-center h-100">
            <div className="card-body">
              <FaHospital className="text-warning mb-3" size={32} />
              <h5>Hospitals</h5>
              <h3 className="text-warning">{stats?.hospitals}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Management Cards */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card-thali">
            <div className="card-header">
              <h5 className="mb-0">
                <FaUsers className="me-2" />
                User Management
              </h5>
            </div>
            <div className="card-body">
              <p className="text-muted mb-3">
                Manage user accounts, roles, and permissions
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">• Create user accounts</li>
                <li className="mb-2">• Manage user roles</li>
                <li className="mb-2">• Suspend/activate accounts</li>
                <li className="mb-0">• View user activity</li>
              </ul>
              <Link to="/users" className="btn btn-thali-primary w-100">
                Manage Users
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card-thali">
            <div className="card-header">
              <h5 className="mb-0">
                <FaCog className="me-2" />
                System Settings
              </h5>
            </div>
            <div className="card-body">
              <p className="text-muted mb-3">
                Configure system-wide settings and preferences
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">• Platform configuration</li>
                <li className="mb-2">• Security settings</li>
                <li className="mb-2">• Email templates</li>
                <li className="mb-0">• API settings</li>
              </ul>
              <Link to="/settings" className="btn btn-outline-primary w-100">
                Settings
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card-thali">
            <div className="card-header">
              <h5 className="mb-0">
                <FaChartBar className="me-2" />
                Analytics
              </h5>
            </div>
            <div className="card-body">
              <p className="text-muted mb-3">
                View platform statistics and performance metrics
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">• User growth trends</li>
                <li className="mb-2">• Donation statistics</li>
                <li className="mb-2">• Platform usage</li>
                <li className="mb-0">• Performance metrics</li>
              </ul>
              <Link to="/analytics" className="btn btn-outline-info w-100">
                View Analytics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;