import React, { useState, useEffect } from 'react';
import { FaUsers, FaMapMarkerAlt, FaPhone, FaSearch, FaClock } from 'react-icons/fa';
import api from '../utils/api';

const BloodDonorFinderPage = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    bloodType: '',
    city: '',
    state: '',
    availableOnly: true
  });
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchCriteria.bloodType) {
      setError('Please select a blood type');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const params = new URLSearchParams();
      params.append('bloodType', searchCriteria.bloodType);
      if (searchCriteria.city) params.append('city', searchCriteria.city);
      if (searchCriteria.state) params.append('state', searchCriteria.state);
      params.append('availableOnly', searchCriteria.availableOnly);

      const response = await api.get(`/donor/search?${params}`);
      setDonors(response.data.donors || []);
    } catch (error) {
      setError('Failed to search donors. Please try again.');
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchCriteria(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="container py-4">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold mb-3">
          <FaUsers className="text-danger me-3" />
          Blood Donor Finder
        </h2>
        <p className="lead text-muted">
          Find compatible blood donors in your area
        </p>
      </div>

      {/* Search Form */}
      <div className="card-thali mb-4">
        <div className="card-header">
          <h5 className="mb-0">Search Filters</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSearch}>
            <div className="row g-3">
              <div className="col-md-3">
                <label className="form-label">Blood Type *</label>
                <select
                  className="form-select form-control-thali"
                  name="bloodType"
                  value={searchCriteria.bloodType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Blood Type</option>
                  {bloodTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control form-control-thali"
                  name="city"
                  value={searchCriteria.city}
                  onChange={handleChange}
                  placeholder="Enter city name"
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">State</label>
                <input
                  type="text"
                  className="form-control form-control-thali"
                  name="state"
                  value={searchCriteria.state}
                  onChange={handleChange}
                  placeholder="Enter state name"
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Availability</label>
                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="availableOnly"
                    name="availableOnly"
                    checked={searchCriteria.availableOnly}
                    onChange={handleChange}
                  />
                  <label className="form-check-label ms-2" htmlFor="availableOnly">
                    Available for emergency
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-thali-primary"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Searching...
                    </>
                  ) : (
                    <>
                      <FaSearch className="me-2" />
                      Search Donors
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {error && (
        <div className="alert alert-danger mb-4">
          {error}
        </div>
      )}

      {/* Results */}
      {donors.length > 0 && (
        <div className="row">
          <div className="col-12">
            <div className="card-thali">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  Found {donors.length} Compatible Donor{donors.length !== 1 ? 's' : ''}
                </h5>
                <span className="badge bg-danger">
                  {searchCriteria.bloodType}
                </span>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {donors.map((donor, index) => (
                    <div key={index} className="col-lg-6">
                      <div className="card border h-100">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <div>
                              <h6 className="card-title mb-1">Donor #{donor.donorId}</h6>
                              <span className="blood-type-badge">{donor.bloodType}</span>
                            </div>
                            {donor.availableForEmergency && (
                              <span className="badge bg-success">Available Now</span>
                            )}
                          </div>

                          <div className="mb-2">
                            <FaMapMarkerAlt className="text-muted me-2" size={14} />
                            <span className="text-muted">{donor.city}, {donor.state}</span>
                          </div>

                          {donor.lastDonationDate && (
                            <div className="mb-2">
                              <FaClock className="text-muted me-2" size={14} />
                              <span className="text-muted">
                                Last donation: {new Date(donor.lastDonationDate).toLocaleDateString()}
                              </span>
                            </div>
                          )}

                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <button className="btn btn-thali-primary btn-sm">
                              Contact Donor
                            </button>
                            <div className="text-muted small">
                              <FaPhone className="me-1" />
                              Available
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!loading && donors.length === 0 && searchCriteria.bloodType && (
        <div className="text-center py-5">
          <FaUsers className="text-muted mb-3" size={64} />
          <h4>No donors found</h4>
          <p className="text-muted mb-4">
            Try expanding your search criteria or search in nearby areas.
          </p>
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              setSearchCriteria({
                bloodType: '',
                city: '',
                state: '',
                availableOnly: true
              });
              setDonors([]);
              setError('');
            }}
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Emergency Notice */}
      <div className="card-thali mt-4">
        <div className="card-header bg-danger text-white">
          <h5 className="mb-0">Emergency Blood Request</h5>
        </div>
        <div className="card-body">
          <p className="mb-3">
            If you need blood urgently, create an emergency blood request that will notify all compatible donors in your area immediately.
          </p>
          <button className="btn btn-thali-danger">
            Create Emergency Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default BloodDonorFinderPage;