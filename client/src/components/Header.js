import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigate = useNavigate();

  return (
    <header className="bg-[#0f1b2b] shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-white">Thala-AI</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/home" className="text-white hover:text-[#e74c3c]">
            Home
          </Link>
          <a href="#services" className="text-white hover:text-[#e74c3c]">
            Services
          </a>
          <a href="#about" className="text-white hover:text-[#e74c3c]">
            About
          </a>
          <Link to="/contact" className="text-white hover:text-[#e74c3c]">
            Contact
          </Link>
        </nav>

        {/* Profile Section */}
        <div className="relative hidden md:flex items-center">
          <button
            onClick={() => navigate('/role-selection')}
            className="bg-[#2ecc71] hover:bg-[#27ae60] px-4 py-2 rounded transition-colors text-sm text-white"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
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
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0f1b2b] pb-4">
          <nav className="flex flex-col items-center space-y-2">
            <Link
              to="/home"
              className="text-white hover:text-[#e74c3c] py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <a
              href="#services"
              className="text-white hover:text-[#e74c3c] py-2"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-white hover:text-[#e74c3c] py-2"
              onClick={toggleMenu}
            >
              About
            </a>
            <Link
              to="/contact"
              className="text-white hover:text-[#e74c3c] py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>

            {/* Get Started Button in Mobile Menu */}
            <button
              onClick={() => { navigate('/role-selection'); toggleMenu(); }}
              className="bg-[#2ecc71] hover:bg-[#27ae60] px-4 py-2 rounded transition-colors text-sm text-white w-full"
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;