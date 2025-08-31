import React from 'react';
import { FaTwitter, FaPinterest, FaLinkedin } from 'react-icons/fa';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0f1b2b] text-[#f1c40f] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ThalaAI</h3>
            <p className="text-[#f1c40f] mb-6 leading-relaxed">
              Supporting Thalassemia patients and their families through
              innovative technology, community support, and accessible
              healthcare resources.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-[#f1c40f] hover:text-soft-gold transition-colors">
                <FaTwitter size={22} />
              </a>
              <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer" className="text-[#f1c40f] hover:text-soft-gold transition-colors">
                <FaPinterest size={22} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-[#f1c40f] hover:text-soft-gold transition-colors">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-[#f1c40f] hover:text-soft-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-[#f1c40f] hover:text-soft-gold transition-colors">About</a></li>
              <li><a href="#causes" className="text-[#f1c40f] hover:text-soft-gold transition-colors">Causes</a></li>
              <li><a href="#donate" className="text-[#f1c40f] hover:text-soft-gold transition-colors">Donate</a></li>
              <li><Link to="/contact" className="text-[#f1c40f] hover:text-soft-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-[#f1c40f]">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-soft-gold" />
                <span>Mumbai, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-soft-gold" />
                <span>info@thalaai.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-soft-gold" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-[#f1c40f] text-sm">
          <p>© 2025 ThalaAI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button type="button" className="hover:text-soft-gold bg-transparent border-none p-0 cursor-pointer">Privacy Policy</button>
            <button type="button" className="hover:text-soft-gold bg-transparent border-none p-0 cursor-pointer">Terms of Service</button>
            <button type="button" className="hover:text-soft-gold bg-transparent border-none p-0 cursor-pointer">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
