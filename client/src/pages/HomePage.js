import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Carousel from "../components/Carousel";
import Features from "../components/Features";
import Footer from "../components/Footer";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
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
              onClick={() => { navigate('/profile'); setIsProfileOpen(false); }}
              className="flex items-center text-white focus:outline-none"
            >
              <FaUserCircle size={28} className="mr-1" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-12 w-40 bg-white rounded-lg shadow-lg py-2">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Settings
                </Link>
                <button
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setIsProfileOpen(false);
                    alert("Logged out!");
                  }}
                >
                  Logout
                </button>
              </div>
            )}
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

              {/* Profile in Mobile Menu */}
              <div className="flex flex-col items-center pt-2 w-full">
                <button
                  onClick={() => {
                    navigate('/profile');
                    setIsProfileOpen(false);
                    toggleMenu();
                  }}
                  className="flex items-center text-white focus:outline-none"
                >
                  <FaUserCircle size={28} className="mr-1" />
                  <span>Profile</span>
                </button>

                {isProfileOpen && (
                  <div className="bg-white mt-2 w-full rounded-lg shadow-lg py-2">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setIsProfileOpen(false);
                        toggleMenu();
                      }}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setIsProfileOpen(false);
                        toggleMenu();
                      }}
                    >
                      Settings
                    </Link>
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setIsProfileOpen(false);
                        toggleMenu();
                        alert("Logged out!");
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        <Carousel />
        <Features />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
