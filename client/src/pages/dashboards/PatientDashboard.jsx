import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { FaHeartbeat, FaCalendarAlt, FaUsers, FaBell, FaPlus, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
  const { user, refreshUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // Simulate data loading
    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStats({
          hemoglobinLevel: 8.5,
          nextTransfusion: '2024-12-15',
          pendingRequests: 2,
          totalDonations: 15
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
          <p className="text-muted mb-0">Here's your health overview</p>
        </div>
        <div className="d-flex gap-2">
          <Link to="/health-tracking" className="btn btn-thali-primary">
            <FaPlus className="me-2" />
            Add Health Record
          </Link>
          <Link to="/blood-requests" className="btn btn-thali-danger">
            <FaBell className="me-2" />
            Emergency Blood
          </Link>
        </div>
      </div>

      {/* Health Status Cards */}
      <div className="row mb-4">
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card danger">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Hemoglobin Level</h6>
                <h3 className="mb-0">{stats?.hemoglobinLevel} g/dL</h3>
                <small className="text-muted">
                  Last updated: 2 days ago
                </small>
              </div>
              <FaHeartbeat className="text-danger" size={32} />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card warning">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Next Transfusion</h6>
                <h5 className="mb-0">
                  {new Date(stats?.nextTransfusion).toLocaleDateString()}
                </h5>
                <small className="text-muted">
                  5 days remaining
                </small>
              </div>
              <FaCalendarAlt className="text-warning" size={32} />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card primary">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Blood Requests</h6>
                <h3 className="mb-0">{stats?.pendingRequests}</h3>
                <small className="text-muted">
                  1 active, 1 pending
                </small>
              </div>
              <FaBell className="text-primary" size={32} />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card success">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Total Donations</h6>
                <h3 className="mb-0">{stats?.totalDonations}</h3>
                <small className="text-muted">
                  Lifetime received
                </small>
              </div>
              <FaUsers className="text-success" size={32} />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card-thali">
            <div className="card-header">
              <h5 className="mb-0">Quick Actions</h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-3 col-sm-6">
                  <Link to="/appointments" className="btn btn-outline-primary w-100">
                    <FaCalendarAlt className="me-2" />
                    Book Appointment
                  </Link>
                </div>
                <div className="col-md-3 col-sm-6">
                  <Link to="/blood-donor-finder" className="btn btn-outline-danger w-100">
                    <FaUsers className="me-2" />
                    Find Donors
                  </Link>
                </div>
                <div className="col-md-3 col-sm-6">
                  <Link to="/health-tracking" className="btn btn-outline-success w-100">
                    <FaChartLine className="me-2" />
                    Health Trends
                  </Link>
                </div>
                <div className="col-md-3 col-sm-6">
                  <Link to="/chatbot" className="btn btn-outline-info w-100">
                    <FaBell className="me-2" />
                    Chat Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="row">
        <div className="col-lg-8 mb-4">
          <div className="card-thali">
            <div className="card-header">
              <h5 className="mb-0">Recent Health Records</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Hemoglobin</th>
                      <th>Ferritin</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dec 1, 2024</td>
                      <td>
                        <span className="badge bg-danger">8.5 g/dL</span>
                      </td>
                      <td>2500 ng/mL</td>
                      <td>Pre-transfusion check</td>
                    </tr>
                    <tr>
                      <td>Nov 28, 2024</td>
                      <td>
                        <span className="badge bg-warning">8.8 g/dL</span>
                      </td>
                      <td>2300 ng/mL</td>
                      <td>Regular monitoring</td>
                    </tr>
                    <tr>
                      <td>Nov 15, 2024</td>
                      <td>
                        <span className="badge bg-warning">9.1 g/dL</span>
                      </td>
                      <td>2100 ng/mL</td>
                      <td>Post-transfusion</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-end">
                <Link to="/health-tracking" className="btn btn-thali-primary">
                  View All Records
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card-thali">
            <div className="card-header">
              <h5 className="mb-0">Upcoming Appointments</h5>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                <div className="list-group-item px-0">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="mb-1">Blood Transfusion</h6>
                      <p className="text-muted mb-1">
                        City Hospital - Blood Bank
                      </p>
                      <small className="text-primary">
                        Dec 15, 2024 • 10:00 AM
                      </small>
                    </div>
                    <span className="badge bg-danger">Urgent</span>
                  </div>
                </div>
                <div className="list-group-item px-0">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="mb-1">Regular Checkup</h6>
                      <p className="text-muted mb-1">
                        Dr. Sharma - Hematology
                      </p>
                      <small className="text-muted">
                        Dec 20, 2024 • 2:00 PM
                      </small>
                    </div>
                    <span className="badge bg-secondary">Scheduled</span>
                  </div>
                </div>
              </div>
              <div className="text-end mt-3">
                <Link to="/appointments" className="btn btn-thali-primary">
                  Manage Appointments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;