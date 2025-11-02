import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaPlus, FaClock, FaMapMarkerAlt, FaUserMd, FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AppointmentCalendarPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAppointments([
        {
          id: 1,
          type: 'transfusion',
          date: '2024-12-15',
          time: '10:00 AM',
          doctor: 'Dr. Sharma',
          hospital: 'City Hospital',
          status: 'confirmed'
        },
        {
          id: 2,
          type: 'checkup',
          date: '2024-12-20',
          time: '2:00 PM',
          doctor: 'Dr. Patel',
          hospital: 'Medical Center',
          status: 'scheduled'
        }
      ]);
    } catch (error) {
      console.error('Error loading appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      confirmed: 'success',
      scheduled: 'warning',
      cancelled: 'danger',
      completed: 'info'
    };
    return statusMap[status] || 'secondary';
  };

  const getTypeIcon = (type) => {
    const typeMap = {
      transfusion: '🩸',
      checkup: '🩺',
      counseling: '💬',
      emergency: '🚨'
    };
    return typeMap[type] || '📅';
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border spinner-thali text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading appointments...</p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">Appointments</h2>
          <p className="text-muted mb-0">Manage your medical appointments</p>
        </div>
        <Link to="/appointments/new" className="btn btn-thali-primary">
          <FaPlus className="me-2" />
          Book Appointment
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="card-thali mb-4">
        <div className="card-body">
          <div className="d-flex gap-2 flex-wrap">
            <button
              className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setFilter('all')}
            >
              All Appointments
            </button>
            <button
              className={`btn ${filter === 'upcoming' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setFilter('upcoming')}
            >
              Upcoming
            </button>
            <button
              className={`btn ${filter === 'past' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setFilter('past')}
            >
              Past
            </button>
            <button
              className={`btn ${filter === 'cancelled' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setFilter('cancelled')}
            >
              Cancelled
            </button>
          </div>
        </div>
      </div>

      {/* Appointments List */}
      <div className="row">
        {appointments.length === 0 ? (
          <div className="col-12">
            <div className="card-thali">
              <div className="card-body text-center py-5">
                <FaCalendarAlt className="text-muted mb-3" size={64} />
                <h4>No appointments found</h4>
                <p className="text-muted mb-4">
                  Book your first appointment to get started
                </p>
                <Link to="/appointments/new" className="btn btn-thali-primary">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        ) : (
          appointments.map((appointment) => (
            <div key={appointment.id} className="col-lg-6 mb-4">
              <div className="card-thali h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h5 className="card-title mb-1">
                        {getTypeIcon(appointment.type)} {appointment.type.charAt(0).toUpperCase() + appointment.type.slice(1)}
                      </h5>
                      <span className={`badge bg-${getStatusBadge(appointment.status)}`}>
                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                      </span>
                    </div>
                    {appointment.status === 'scheduled' && (
                      <button className="btn btn-sm btn-outline-danger">
                        Cancel
                      </button>
                    )}
                  </div>

                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <FaClock className="text-muted me-2" size={14} />
                      <span className="text-muted">
                        {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                      </span>
                    </div>

                    <div className="d-flex align-items-center mb-2">
                      <FaUserMd className="text-muted me-2" size={14} />
                      <span className="text-muted">
                        {appointment.doctor}
                      </span>
                    </div>

                    <div className="d-flex align-items-center">
                      <FaMapMarkerAlt className="text-muted me-2" size={14} />
                      <span className="text-muted">
                        {appointment.hospital}
                      </span>
                    </div>
                  </div>

                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-outline-primary">
                      View Details
                    </button>
                    {appointment.status === 'scheduled' && (
                      <button className="btn btn-sm btn-primary">
                        Reschedule
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Quick Stats */}
      <div className="row mt-4">
        <div className="col-md-3 col-6 mb-3">
          <div className="dashboard-stat-card primary text-center p-3">
            <h6 className="text-muted mb-1">Total</h6>
            <h4 className="mb-0">{appointments.length}</h4>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="dashboard-stat-card success text-center p-3">
            <h6 className="text-muted mb-1">Confirmed</h6>
            <h4 className="mb-0">
              {appointments.filter(a => a.status === 'confirmed').length}
            </h4>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="dashboard-stat-card warning text-center p-3">
            <h6 className="text-muted mb-1">Scheduled</h6>
            <h4 className="mb-0">
              {appointments.filter(a => a.status === 'scheduled').length}
            </h4>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="dashboard-stat-card info text-center p-3">
            <h6 className="text-muted mb-1">Completed</h6>
            <h4 className="mb-0">
              {appointments.filter(a => a.status === 'completed').length}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCalendarPage;