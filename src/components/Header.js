import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    navigate('/role-selection');
  };

  return (
    <header className="bg-charcoal-grey text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">ThalaAI</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-soft-gold transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-white hover:text-soft-gold transition-colors duration-300">
              About
            </a>
            <a href="#services" className="text-white hover:text-soft-gold transition-colors duration-300">
              Services
            </a>
            <a href="#contact" className="text-white hover:text-soft-gold transition-colors duration-300">
              Contact
            </a>
            <button
              onClick={handleLoginClick}
              className="bg-sage-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Login
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-soft-gold transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-600">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-soft-gold transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="text-white hover:text-soft-gold transition-colors duration-300">
                About
              </a>
              <a href="#services" className="text-white hover:text-soft-gold transition-colors duration-300">
                Services
              </a>
              <a href="#contact" className="text-white hover:text-soft-gold transition-colors duration-300">
                Contact
              </a>
              <button
                onClick={handleLoginClick}
                className="bg-sage-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 w-full text-left"
              >
                Login
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
