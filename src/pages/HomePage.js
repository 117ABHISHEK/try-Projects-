import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-charcoal-grey text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">ThalaAI</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-white hover:text-soft-gold transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-soft-gold transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#services"
                className="text-white hover:text-soft-gold transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-white hover:text-soft-gold transition-colors duration-300"
              >
                Contact
              </a>
            </nav>
            <div className="hidden md:flex items-center">
              <button onClick={() => navigate('/profile')} className="text-white">
                <lord-icon
                  src="https://cdn.lordicon.com/hrjifpbq.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{width:'40px', height:'40px'}}>
                </lord-icon>
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-600">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-white hover:text-soft-gold transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-soft-gold transition-colors duration-300"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-white hover:text-soft-gold transition-colors duration-300"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-soft-gold transition-colors duration-300"
                >
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default HomePage;
