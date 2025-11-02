import React, { useState, useEffect } from 'react';
import { FaHeartbeat, FaPlus, FaChartLine, FaCalendarAlt, FaNotesMedical } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

const HealthTrackingPage = () => {
  const [healthRecords, setHealthRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newRecord, setNewRecord] = useState({
    hemoglobin: '',
    ferritin: '',
    symptoms: '',
    notes: ''
  });

  useEffect(() => {
    loadHealthRecords();
  }, []);

  const loadHealthRecords = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setHealthRecords([
        {
          id: 1,
          date: '2024-12-01',
          hemoglobin: 8.5,
          ferritin: 2500,
          symptoms: ['fatigue', 'weakness'],
          notes: 'Pre-transfusion check'
        },
        {
          id: 2,
          date: '2024-11-28',
          hemoglobin: 8.8,
          ferritin: 2300,
          symptoms: [],
          notes: 'Regular monitoring'
        },
        {
          id: 3,
          date: '2024-11-15',
          hemoglobin: 9.1,
          ferritin: 2100,
          symptoms: [],
          notes: 'Post-transfusion'
        }
      ]);
    } catch (error) {
      console.error('Error loading health records:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddRecord = async (e) => {
    e.preventDefault();

    try {
      const record = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        hemoglobin: parseFloat(newRecord.hemoglobin),
        ferritin: parseFloat(newRecord.ferritin) || null,
        symptoms: newRecord.symptoms.split(',').map(s => s.trim()).filter(s => s),
        notes: newRecord.notes
      };

      setHealthRecords(prev => [record, ...prev]);
      setNewRecord({ hemoglobin: '', ferritin: '', symptoms: '', notes: '' });
      setShowAddForm(false);
    } catch (error) {
      console.error('Error adding health record:', error);
    }
  };

  const getHemoglobinColor = (value) => {
    if (value < 8) return 'text-danger';
    if (value < 10) return 'text-warning';
    return 'text-success';
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border spinner-thali text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading health records...</p>
      </div>
    );
  }

  // Prepare chart data
  const chartData = healthRecords
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(record => ({
      date: new Date(record.date).toLocaleDateString(),
      hemoglobin: record.hemoglobin,
      ferritin: record.ferritin
    }));

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">
            <FaHeartbeat className="text-danger me-2" />
            Health Tracking
          </h2>
          <p className="text-muted mb-0">Monitor your health metrics over time</p>
        </div>
        <button
          className="btn btn-thali-primary"
          onClick={() => setShowAddForm(true)}
        >
          <FaPlus className="me-2" />
          Add Record
        </button>
      </div>

      {/* Add Record Modal */}
      {showAddForm && (
        <div className="card-thali mb-4">
          <div className="card-header">
            <h5 className="mb-0">Add Health Record</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleAddRecord}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Hemoglobin Level (g/dL) *</label>
                  <input
                    type="number"
                    step="0.1"
                    className="form-control form-control-thali"
                    value={newRecord.hemoglobin}
                    onChange={(e) => setNewRecord({...newRecord, hemoglobin: e.target.value})}
                    placeholder="e.g., 8.5"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Ferritin Level (ng/mL)</label>
                  <input
                    type="number"
                    className="form-control form-control-thali"
                    value={newRecord.ferritin}
                    onChange={(e) => setNewRecord({...newRecord, ferritin: e.target.value})}
                    placeholder="e.g., 2500"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Symptoms (comma separated)</label>
                  <input
                    type="text"
                    className="form-control form-control-thali"
                    value={newRecord.symptoms}
                    onChange={(e) => setNewRecord({...newRecord, symptoms: e.target.value})}
                    placeholder="e.g., fatigue, weakness, pale skin"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Notes</label>
                  <textarea
                    className="form-control form-control-thali"
                    value={newRecord.notes}
                    onChange={(e) => setNewRecord({...newRecord, notes: e.target.value})}
                    rows="3"
                    placeholder="Additional notes..."
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-thali-primary me-2">
                    Save Record
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowAddForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Health Charts */}
      {healthRecords.length > 0 && (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card-thali">
              <div className="card-header">
                <h5 className="mb-0">
                  <FaChartLine className="me-2" />
                  Health Trends
                </h5>
              </div>
              <div className="card-body">
                <div style={{ height: '300px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="hemoglobin"
                        stroke="#dc3545"
                        strokeWidth={2}
                        name="Hemoglobin (g/dL)"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="ferritin"
                        stroke="#1976d2"
                        strokeWidth={2}
                        name="Ferritin (ng/mL)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Current Status */}
      {healthRecords.length > 0 && (
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="card-thali">
              <div className="card-header">
                <h6 className="mb-0">Latest Hemoglobin</h6>
              </div>
              <div className="card-body text-center">
                <h2 className={getHemoglobinColor(healthRecords[0].hemoglobin)}>
                  {healthRecords[0].hemoglobin} g/dL
                </h2>
                <p className="text-muted mb-0">
                  {new Date(healthRecords[0].date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-thali">
              <div className="card-header">
                <h6 className="mb-0">Latest Ferritin</h6>
              </div>
              <div className="card-body text-center">
                <h2 className="text-primary">
                  {healthRecords[0].ferritin || 'N/A'} ng/mL
                </h2>
                <p className="text-muted mb-0">
                  {new Date(healthRecords[0].date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Health Records List */}
      <div className="row">
        <div className="col-12">
          <div className="card-thali">
            <div className="card-header">
              <h5 className="mb-0">
                <FaNotesMedical className="me-2" />
                Health Records
              </h5>
            </div>
            <div className="card-body">
              {healthRecords.length === 0 ? (
                <div className="text-center py-5">
                  <FaHeartbeat className="text-muted mb-3" size={64} />
                  <h4>No health records</h4>
                  <p className="text-muted mb-4">
                    Start tracking your health metrics to monitor your progress
                  </p>
                  <button
                    className="btn btn-thali-primary"
                    onClick={() => setShowAddForm(true)}
                  >
                    <FaPlus className="me-2" />
                    Add First Record
                  </button>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Hemoglobin</th>
                        <th>Ferritin</th>
                        <th>Symptoms</th>
                        <th>Notes</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {healthRecords.map((record) => (
                        <tr key={record.id}>
                          <td>
                            <FaCalendarAlt className="text-muted me-2" size={14} />
                            {new Date(record.date).toLocaleDateString()}
                          </td>
                          <td>
                            <span className={`badge bg-${getHemoglobinColor(record.hemoglobin) === 'text-danger' ? 'danger' : getHemoglobinColor(record.hemoglobin) === 'text-warning' ? 'warning' : 'success'}`}>
                              {record.hemoglobin} g/dL
                            </span>
                          </td>
                          <td>
                            {record.ferritin ? `${record.ferritin} ng/mL` : 'N/A'}
                          </td>
                          <td>
                            {record.symptoms.length > 0 ? (
                              <span className="badge bg-warning">
                                {record.symptoms.join(', ')}
                              </span>
                            ) : (
                              <span className="text-muted">None</span>
                            )}
                          </td>
                          <td>
                            {record.notes || <span className="text-muted">No notes</span>}
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary">
                              Edit
                            </button>
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

      {/* Health Tips */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card-thali">
            <div className="card-header">
              <h5 className="mb-0">Health Tips for Thalassemia</h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <h6 className="text-primary">💊 Medication Adherence</h6>
                  <p className="small text-muted mb-0">
                    Always take your iron chelation therapy as prescribed by your doctor.
                  </p>
                </div>
                <div className="col-md-6">
                  <h6 className="text-success">🥗 Nutrition</h6>
                  <p className="small text-muted mb-0">
                    Avoid iron-rich foods. Focus on calcium, vitamin D, and folic acid.
                  </p>
                </div>
                <div className="col-md-6">
                  <h6 className="text-info">💧 Hydration</h6>
                  <p className="small text-muted mb-0">
                    Stay well-hydrated, especially before and after transfusions.
                  </p>
                </div>
                <div className="col-md-6">
                  <h6 className="text-warning">🏃 Exercise</h6>
                  <p className="small text-muted mb-0">
                    Engage in light exercise regularly, but avoid overexertion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTrackingPage;