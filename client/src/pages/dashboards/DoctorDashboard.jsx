import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { FaUserMd, FaCalendarAlt, FaNotesMedical, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DoctorDashboard = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStats({
          totalPatients: 25,
          appointmentsToday: 3,
          healthRecords: 150,
          consultations: 45
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
          <h2 className="mb-1">Welcome back, Dr. {user?.name}!</h2>
          <p className="text-muted mb-0">Your medical practice overview</p>
        </div>
        <Link to="/appointments" className="btn btn-thali-primary">
          <FaCalendarAlt className="me-2" />
          View Schedule
        </Link>
      </div>

      <div className="row mb-4">
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card primary">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Total Patients</h6>
                <h3 className="mb-0">{stats?.totalPatients}</h3>
                <small className="text-muted">
                  Active cases
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
                <h6 className="text-muted mb-1">Today's Appointments</h6>
                <h3 className="mb-0">{stats?.appointmentsToday}</h3>
                <small className="text-muted">
                  Scheduled
                </small>
              </div>
              <FaCalendarAlt className="text-success" size={32} />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card info">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Health Records</h6>
                <h3 className="mb-0">{stats?.healthRecords}</h3>
                <small className="text-muted">
                  Managed
                </small>
              </div>
              <FaNotesMedical className="text-info" size={32} />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="dashboard-stat-card warning">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-muted mb-1">Consultations</h6>
                <h3 className="mb-0">{stats?.consultations}</h3>
                <small className="text-muted">
                  This month
                </small>
              </div>
              <FaUserMd className="text-warning" size={32} />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 mb-4">
          <div className="card-thali">
            <div className="card-header">
              <h5 className="mb-0">Today's Schedule</h5>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                <div className="list-group-item px-0">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="mb-1">Patient Consultation</h6>
                      <p className="text-muted mb-1">
                        Sarah Johnson - Regular checkup
                      </p>
                      <small className="text-primary">
                        10:00 AM - 11:00 AM
                      </small>
                    </div>
                    <span className="badge bg-primary">Confirmed</span>
                  </div>
                </div>
                <div className="list-group-item px-0">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="mb-1">Blood Transfusion</h6>
                      <p className="text-muted mb-1">
                        Michael Chen - Pre-transfusion evaluation
                      </p>
                      <small className="text-warning">
                        2:00 PM - 3:00 PM
                      </small>
                    </div>
                    <span className="badge bg-warning">Scheduled</span>
                  </div>
                </div>
                <div className="list-group-item px-0">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="mb-1">Follow-up</h6>
                      <p className="text-muted mb-1">
                        Emma Wilson - Post-transfusion review
                      </p>
                      <small className="text-primary">
                        4:00 PM - 4:30 PM
                      </small>
                    </div>
                    <span className="badge bg-primary">Confirmed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card-thali">
            <div className="card-header">
              <h5 className="mb-0">Recent Activities</h5>
            </div>
            <div className="card-body">
              <div className="timeline">
                <div className="mb-3">
                  <small className="text-muted">2 hours ago</small>
                  <div>
                    Added health record for John Doe
                  </div>
                </div>
                <div className="mb-3">
                  <small className="text-muted">5 hours ago</small>
                  <div>
                    Completed consultation with Sarah Johnson
                  </div>
                </div>
                <div className="mb-3">
                  <small className="text-muted">Yesterday</small>
                  <div>
                    Reviewed Emma Wilson's blood work
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

export default DoctorDashboard;