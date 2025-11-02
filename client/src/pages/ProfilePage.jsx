import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaEdit, FaHeartbeat, FaEnvelope, FaPhone, FaMapMarkerAlt, FaSave } from 'react-icons/fa';

const ProfilePage = () => {
  const { user, refreshUser } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    dob: user?.dob || '',
    gender: user?.gender || '',
    bloodGroup: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    }
  });

  useEffect(() => {
    if (user) {
      setFormData({
        ...formData,
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        dob: user.dob || '',
        gender: user.gender || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      await refreshUser();
      setEditMode(false);
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card-thali">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                <FaUser className="me-2" />
                My Profile
              </h5>
              <button
                className="btn btn-sm btn-light"
                onClick={() => setEditMode(!editMode)}
              >
                <FaEdit className="me-1" />
                {editMode ? 'Cancel' : 'Edit'}
              </button>
            </div>
            <div className="card-body">
              <div className="text-center mb-4">
                <div className="mx-auto mb-3" style={{ width: '120px', height: '120px' }}>
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white" style={{ width: '100%', height: '100%' }}>
                    <FaUser size={48} />
                  </div>
                </div>
                <h4>{user?.name}</h4>
                <p className="text-muted mb-0">Role: <span className="badge bg-primary">{user?.role}</span></p>
              </div>

              {editMode ? (
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control form-control-thali"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-thali"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled
                      />
                      <small className="text-muted">Email cannot be changed</small>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        className="form-control form-control-thali"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Date of Birth</label>
                      <input
                        type="date"
                        className="form-control form-control-thali"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Gender</label>
                      <select
                        className="form-select form-control-thali"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Blood Group</label>
                      <select
                        className="form-select form-control-thali"
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                      >
                        <option value="">Select Blood Group</option>
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
                    <div className="col-12">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control form-control-thali mb-2"
                        name="address.street"
                        value={formData.address.street}
                        onChange={handleChange}
                        placeholder="Street Address"
                      />
                      <div className="row g-2">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control form-control-thali"
                            name="address.city"
                            value={formData.address.city}
                            onChange={handleChange}
                            placeholder="City"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control form-control-thali"
                            name="address.state"
                            value={formData.address.state}
                            onChange={handleChange}
                            placeholder="State"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-end mt-4">
                    <button
                      type="button"
                      className="btn btn-thali-primary"
                      onClick={handleSave}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          Saving...
                        </>
                      ) : (
                        <>
                          <FaSave className="me-2" />
                          Save Changes
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center mb-3">
                        <FaEnvelope className="text-muted me-3" size={20} />
                        <div>
                          <small className="text-muted">Email</small>
                          <div>{user?.email || 'Not provided'}</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center mb-3">
                        <FaPhone className="text-muted me-3" size={20} />
                        <div>
                          <small className="text-muted">Phone</small>
                          <div>{user?.phone || 'Not provided'}</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center mb-3">
                        <FaHeartbeat className="text-muted me-3" size={20} />
                        <div>
                          <small className="text-muted">Date of Birth</small>
                          <div>{user?.dob ? new Date(user.dob).toLocaleDateString() : 'Not provided'}</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center mb-3">
                        <FaMapMarkerAlt className="text-muted me-3" size={20} />
                        <div>
                          <small className="text-muted">Gender</small>
                          <div>{user?.gender || 'Not provided'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Account Statistics */}
          <div className="card-thali mt-4">
            <div className="card-header">
              <h5 className="mb-0">Account Information</h5>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-md-3 col-6 mb-3">
                  <div className="p-3">
                    <h4 className="text-primary mb-1">Member Since</h4>
                    <p className="mb-0">
                      {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="p-3">
                    <h4 className="text-success mb-1">Profile Status</h4>
                    <p className="mb-0">
                      <span className="badge bg-success">
                        {user?.isProfileComplete ? 'Complete' : 'Incomplete'}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="p-3">
                    <h4 className="text-info mb-1">Last Login</h4>
                    <p className="mb-0">
                      {user?.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'First time'}
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="p-3">
                    <h4 className="text-warning mb-1">Account Type</h4>
                    <p className="mb-0">
                      <span className="badge bg-primary">{user?.role?.toUpperCase()}</span>
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

export default ProfilePage;