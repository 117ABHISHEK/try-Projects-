import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaHeartbeat } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="hero-thali">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
          <p className="lead">We're here to help you on your Thalassemia journey</p>
        </div>
      </div>

      <div className="container flex-grow-1">
        <div className="row py-5">
          <div className="col-lg-4 mb-4">
            <div className="card-thali">
              <div className="card-header">
                <h5 className="mb-0">Get in Touch</h5>
              </div>
              <div className="card-body">
                <div className="mb-4">
                  <h6 className="text-muted">24/7 Emergency Helpline</h6>
                  <p className="mb-2">
                    <FaPhone className="me-2" />
                    <strong>1-800-THALAI</strong>
                  </p>
                </div>
                <div className="mb-4">
                  <h6 className="text-muted">Email Support</h6>
                  <p className="mb-2">
                    <FaEnvelope className="me-2" />
                    support@thalaiguardian.com
                  </p>
                </div>
                <div className="mb-4">
                  <h6 className="text-muted">Office Hours</h6>
                  <p className="mb-2">
                    <FaClock className="me-2" />
                    Mon-Fri: 9AM-6PM
                  </p>
                  <p className="mb-2">
                    Sat-Sun: 10AM-4PM
                  </p>
                </div>
                <div>
                  <h6 className="text-muted">Office Location</h6>
                  <p className="mb-0">
                    <FaMapMarkerAlt className="me-2" />
                    Medical Hub Tower, 4th Floor<br />
                    123 Healthcare Lane, Mumbai - 400001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mb-4">
            <div className="card-thali">
              <div className="card-header">
                <h5 className="mb-0">Send us a Message</h5>
              </div>
              <div className="card-body">
                {submitted ? (
                  <div className="text-center py-5">
                    <FaHeartbeat className="text-success mb-3" size={64} />
                    <h4 className="text-success">Message Sent Successfully!</h4>
                    <p className="text-muted">
                      We'll get back to you within 24 hours.
                    </p>
                    <button
                      className="btn btn-thali-primary"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {error && (
                      <div className="alert alert-danger mb-3">
                        {error}
                      </div>
                    )}

                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-thali"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-thali"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-thali"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control form-control-thali"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell us how we can help..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-thali-primary w-100"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card-thali h-100">
                <div className="card-header">
                  <h6 className="mb-0">For Patients</h6>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    <li>• Medical emergencies</li>
                    <li>• Appointment scheduling</li>
                    <li>• Blood request status</li>
                    <li>• Health record assistance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card-thali h-100">
                <div className="card-header">
                  <h6 className="mb-0">For Donors</h6>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    <li>• Donation eligibility</li>
                    <li>• Blood type verification</li>
                    <li>• Request notifications</li>
                    <li>• Donation history</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card-thali h-100">
                <div className="card-header">
                  <h6 className="mb-0">For Healthcare</h6>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    <li>• Platform support</li>
                    <li>• Integration assistance</li>
                    <li>• Staff training</li>
                    <li>• Technical help</li>
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

export default ContactPage;