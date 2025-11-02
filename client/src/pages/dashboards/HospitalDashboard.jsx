import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { FaHospital, FaUsers, FaBell, FaBox } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HospitalDashboard = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStats({
          totalDonors: 150,
          bloodRequests: 12,
          inventory: {
            'O+': 25,
            'A+': 18,
            'B+': 22,
            'AB+': 8
          },
          appointments: 15
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
          <p className="text-muted mb-0">{user?.hospitalName || 'Hospital'} Management</p>
        </div>
        <Link to="/blood-inventory" className="btn btn-thali-primary">
          <FaBox className="me-2" />
          Manage Inventory
        </Link>
      </div>

      <div className="row mb-4">
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card success">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Total Donors</h6>
                <h3 className="mb-0">{stats?.totalDonors}</h3>
                <small className="text-muted">
                  Registered
                </small>
              </div>
              <FaUsers className="text-success" size={32} />
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
                  5 urgent
                </small>
              </div>
              <FaBell className="text-danger" size={32} />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card primary">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Appointments</h6>
                <h3 className="mb-0">{stats?.appointments}</h3>
                <small className="text-muted">
                  Today
                </small>
              </div>
              <FaCalendarAlt className="text-primary" size={32} />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card info">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Total Units</h6>
                <h3 className="mb-0">
                  {Object.values(stats?.inventory || {}).reduce((sum, units) => sum + units, 0)}
                </h3>
                <small className="text-muted">
                  Available
                </small>
              </div>
              <FaBox className="text-info" size={32} />
            </div>
          </div>
        </div>
      </div>

      {/* Blood Inventory */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card-thali">
            <div className="card-header">
              <h5 className="mb-0">Blood Inventory</h5>
            </div>
            <div className="card-body">
              <div className="row">
                {Object.entries(stats?.inventory || {}).map(([bloodType, units]) => (
                  <div key={bloodType} className="col-md-3 col-sm-6 mb-3">
                    <div className="text-center p-3 border rounded">
                      <span className="blood-type-badge mb-2">{bloodType}</span>
                      <h4 className="mb-0">{units} units</h4>
                      <small className="text-muted">
                        {units < 10 ? 'Low stock' : 'Good supply'}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 mb-4">
          <div className="card-thali">
            <div className="card-header">
              <h5 className="mb-0">Recent Blood Requests</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Request ID</th>
                      <th>Blood Type</th>
                      <th>Units</th>
                      <th>Urgency</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#REQ001</td>
                      <td><span className="blood-type-badge">O+</span></td>
                      <td>2</td>
                      <td><span className="badge bg-danger">Emergency</span></td>
                      <td><span className="badge bg-success">Fulfilled</span></td>
                    </tr>
                    <tr>
                      <td>#REQ002</td>
                      <td><span className="blood-type-badge">A+</span></td>
                      <td>1</td>
                      <td><span className="badge bg-warning">Urgent</span></td>
                      <td><span className="badge bg-warning">In Progress</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card-thali">
            <div className="card-header">
              <h5 className="mb-0">Quick Actions</h5>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <Link to="/blood-inventory" className="btn btn-outline-primary">
                  <FaBox className="me-2" />
                  Update Inventory
                </Link>
                <Link to="/blood-requests" className="btn btn-outline-danger">
                  <FaBell className="me-2" />
                  View Requests
                </Link>
                <Link to="/appointments" className="btn btn-outline-success">
                  <FaCalendarAlt className="me-2" />
                  Manage Schedule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;