import React from 'react';
import { FaHeart, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-thali">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="mb-3">About ThalAI Guardian</h5>
            <p className="text-white-50">
              An intelligent lifeline for Thalassemia warriors, connecting patients with blood donors,
              healthcare providers, and essential resources for comprehensive care.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white text-decoration-none">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white text-decoration-none">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white text-decoration-none">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  About Thalassemia
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Find Blood Donors
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Book Appointments
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Health Resources
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Support Groups
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="mb-3">Contact Us</h5>
            <div className="mb-3">
              <p className="text-white-50 mb-1">
                <FaEnvelope className="me-2" />
                support@thalaiguardian.com
              </p>
              <p className="text-white-50 mb-1">
                <FaPhone className="me-2" />
                +91-XXXX-XXXXXX
              </p>
            </div>
            <h6 className="text-white mb-2">Emergency Helpline</h6>
            <p className="text-white">
              <FaPhone className="me-2" />
              24/7: 1-800-THALAI
            </p>
          </div>
        </div>

        <hr className="border-white border-opacity-25 my-4" />

        <div className="row">
          <div className="col-md-8">
            <p className="text-white-50 mb-0">
              © 2024 ThalAI Guardian. All rights reserved.
            </p>
          </div>
          <div className="col-md-4 text-md-end">
            <p className="text-white-50 mb-0">
              Made with <FaHeart className="text-danger" /> for Thalassemia Warriors
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;