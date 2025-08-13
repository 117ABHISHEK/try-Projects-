import React from 'react';
import { FaTwitter, FaPinterest, FaLinkedin } from 'react-icons/fa';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2e4555] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ThalaAI</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Supporting Thalassemia patients and their families through
              innovative technology, community support, and accessible
              healthcare resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                <FaPinterest size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-[#d4af37] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#d4af37] transition-colors">About</a></li>
              <li><a href="#causes" className="text-gray-300 hover:text-[#d4af37] transition-colors">Causes</a></li>
              <li><a href="#donate" className="text-gray-300 hover:text-[#d4af37] transition-colors">Donate</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#d4af37] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-[#d4af37]" />
                <span>Mumbai, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-[#d4af37]" />
                <span>info@thalaai.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-[#d4af37]" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <p>© 2025 ThalaAI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#d4af37]">Privacy Policy</a>
            <a href="#" className="hover:text-[#d4af37]">Terms of Service</a>
            <a href="#" className="hover:text-[#d4af37]">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
