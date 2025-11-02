import React, { useState, useEffect } from 'react';
import { FaPlus, FaBell, FaUsers, FaClock, FaMapMarkerAlt, FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BloodRequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newRequest, setNewRequest] = useState({
    bloodType: '',
    unitsNeeded: '',
    urgency: 'normal',
    hospitalName: '',
    dateNeeded: '',
    reason: ''
  });

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setRequests([
        {
          id: 1,
          bloodType: 'O+',
          unitsNeeded: 2,
          urgency: 'emergency',
          hospitalName: 'City Hospital',
          location: 'Mumbai, Maharashtra',
          dateNeeded: '2024-12-05',
          status: 'active',
          createdAt: '2024-12-01'
        },
        {
          id: 2,
          bloodType: 'A+',
          unitsNeeded: 1,
          urgency: 'normal',
          hospitalName: 'Medical Center',
          location: 'Delhi, Delhi',
          dateNeeded: '2024-12-10',
          status: 'active',
          createdAt: '2024-12-02'
        }
      ]);
    } catch (error) {
      console.error('Error loading requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateRequest = async (e) => {
    e.preventDefault();

    try {
      const request = {
        id: Date.now(),
        ...newRequest,
        status: 'active',
        createdAt: new Date().toISOString().split('T')[0]
      };

      setRequests(prev => [request, ...prev]);
      setNewRequest({
        bloodType: '',
        unitsNeeded: '',
        urgency: 'normal',
        hospitalName: '',
        dateNeeded: '',
        reason: ''
      });
      setShowCreateForm(false);
    } catch (error) {
      console.error('Error creating request:', error);
    }
  };

  const getUrgencyBadge = (urgency) => {
    return urgency === 'emergency' ? 'danger' : 'warning';
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      active: 'success',
      completed: 'info',
      cancelled: 'danger'
    };
    return statusMap[status] || 'secondary';
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border spinner-thali text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading blood requests...</p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">
            <FaBell className="text-danger me-2" />
            Blood Requests
          </h2>
          <p className="text-muted mb-0">Manage and track blood donation requests</p>
        </div>
        <button
          className="btn btn-thali-danger"
          onClick={() => setShowCreateForm(true)}
        >
          <FaPlus className="me-2" />
          New Request
        </button>
      </div>

      {/* Create Request Form */}
      {showCreateForm && (
        <div className="card-thali mb-4">
          <div className="card-header">
            <h5 className="mb-0">Create Blood Request</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleCreateRequest}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Blood Type *</label>
                  <select
                    className="form-select form-control-thali"
                    value={newRequest.bloodType}
                    onChange={(e) => setNewRequest({...newRequest, bloodType: e.target.value})}
                    required
                  >
                    <option value="">Select Blood Type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Units Needed *</label>
                  <input
                    type="number"
                    min="1"
                    className="form-control form-control-thali"
                    value={newRequest.unitsNeeded}
                    onChange={(e) => setNewRequest({...newRequest, unitsNeeded: e.target.value})}
                    placeholder="e.g., 2"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Urgency *</label>
                  <select
                    className="form-select form-control-thali"
                    value={newRequest.urgency}
                    onChange={(e) => setNewRequest({...newRequest, urgency: e.target.value})}
                    required
                  >
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Date Needed *</label>
                  <input
                    type="date"
                    className="form-control form-control-thali"
                    value={newRequest.dateNeeded}
                    onChange={(e) => setNewRequest({...newRequest, dateNeeded: e.target.value})}
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Hospital Name *</label>
                  <input
                    type="text"
                    className="form-control form-control-thali"
                    value={newRequest.hospitalName}
                    onChange={(e) => setNewRequest({...newRequest, hospitalName: e.target.value})}
                    placeholder="Enter hospital name"
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Reason for Request</label>
                  <textarea
                    className="form-control form-control-thali"
                    value={newRequest.reason}
                    onChange={(e) => setNewRequest({...newRequest, reason: e.target.value})}
                    rows="3"
                    placeholder="Brief description of why blood is needed..."
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-thali-primary me-2">
                    Create Request
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowCreateForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="row mb-4">
        <div className="col-md-3 col-6 mb-3">
          <div className="dashboard-stat-card danger text-center p-3">
            <h6 className="text-muted mb-1">Emergency</h6>
            <h4 className="mb-0">
              {requests.filter(r => r.urgency === 'emergency').length}
            </h4>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="dashboard-stat-card warning text-center p-3">
            <h6 className="text-muted mb-1">Active</h6>
            <h4 className="mb-0">
              {requests.filter(r => r.status === 'active').length}
            </h4>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="dashboard-stat-card info text-center p-3">
            <h6 className="text-muted mb-1">Completed</h6>
            <h4 className="mb-0">
              {requests.filter(r => r.status === 'completed').length}
            </h4>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="dashboard-stat-card primary text-center p-3">
            <h6 className="text-muted mb-1">Total</h6>
            <h4 className="mb-0">{requests.length}</h4>
          </div>
        </div>
      </div>

      {/* Requests List */}
      <div className="row">
        <div className="col-12">
          <div className="card-thali">
            <div className="card-header">
              <h5 className="mb-0">Recent Blood Requests</h5>
            </div>
            <div className="card-body">
              {requests.length === 0 ? (
                <div className="text-center py-5">
                  <FaBell className="text-muted mb-3" size={64} />
                  <h4>No blood requests</h4>
                  <p className="text-muted mb-4">
                    Create your first blood request to get started
                  </p>
                  <button
                    className="btn btn-thali-danger"
                    onClick={() => setShowCreateForm(true)}
                  >
                    <FaPlus className="me-2" />
                    Create Request
                  </button>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Request ID</th>
                        <th>Blood Type</th>
                        <th>Units</th>
                        <th>Urgency</th>
                        <th>Hospital</th>
                        <th>Date Needed</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {requests.map((request) => (
                        <tr key={request.id}>
                          <td>#{request.id}</td>
                          <td>
                            <span className="blood-type-badge">{request.bloodType}</span>
                          </td>
                          <td>{request.unitsNeeded}</td>
                          <td>
                            <span className={`badge bg-${getUrgencyBadge(request.urgency)}`}>
                              {request.urgency.toUpperCase()}
                            </span>
                          </td>
                          <td>
                            <div>
                              <div className="fw-bold">{request.hospitalName}</div>
                              <small className="text-muted">{request.location}</small>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <FaCalendarAlt className="text-muted me-2" size={14} />
                              <span>
                                {new Date(request.dateNeeded).toLocaleDateString()}
                              </span>
                            </div>
                          </td>
                          <td>
                            <span className={`badge bg-${getStatusBadge(request.status)}`}>
                              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                            </span>
                          </td>
                          <td>
                            <div className="btn-group btn-group-sm">
                              <button className="btn btn-outline-primary">
                                View
                              </button>
                              {request.status === 'active' && (
                                <button className="btn btn-outline-danger">
                                  Cancel
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card-thali">
            <div className="card-header bg-danger text-white">
              <h5 className="mb-0">
                <FaExclamationTriangle className="me-2" />
                Emergency Blood Request Protocol
              </h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <h6 className="text-danger">🚨 When to Create Emergency Requests</h6>
                  <ul className="mb-0">
                    <li>Urgent transfusion needed within 24 hours</li>
                    <li>Life-threatening situations</li>
                    <li>Scheduled transfusion missed or delayed</li>
                    <li>Complications requiring immediate attention</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 className="text-primary">📞 Emergency Contacts</h6>
                  <ul className="mb-0">
                    <li>Emergency Helpline: 1-800-THALAI</li>
                    <li>24/7 Support: Available 24/7</li>
                    <li>Hospital Direct: Connect with hospital blood bank</li>
                    <li>Local Donors: Nearest available donors will be notified</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodRequestsPage;