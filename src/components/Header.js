import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRoleSelect = (role) => {
    console.log(`Selected role: ${role}`);
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-charcoal-grey text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">ThalaAI</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-soft-gold transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#about" className="text-white hover:text-soft-gold transition-colors duration-300 font-medium">
              About
            </a>
            <a href="#contact" className="text-white hover:text-soft-gold transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          {/* Login/Signup Button with Dropdown */}
          <div className="hidden md:block relative" ref={dropdownRef}>
            <button 
              onClick={toggleDropdown}
              className="bg-sage-green text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg flex items-center"
            >
              Login
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  <button
                    onClick={() => handleRoleSelect('Donor')}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-body-light-grey transition-colors duration-200 cursor-pointer rounded-t-lg"
                  >
                    As Donor
                  </button>
                  <button
                    onClick={() => handleRoleSelect('Patient')}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-body-light-grey transition-colors duration-200 cursor-pointer rounded-b-lg"
                  >
                    As Patient
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-soft-gold focus:outline-none focus:text-soft-gold transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-charcoal-grey border-t border-gray-700">
              <a href="#home" className="block px-3 py-2 text-white hover:text-soft-gold transition-colors duration-300 font-medium">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-soft-gold transition-colors duration-300 font-medium">
                About
              </a>
              <a href="#causes" className="block px-3 py-2 text-white hover:text-soft-gold transition-colors duration-300 font-medium">
                Causes
              </a>
              <a href="#donate" className="block px-3 py-2 text-white hover:text-soft-gold transition-colors duration-300 font-medium">
                Donate
              </a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-soft-gold transition-colors duration-300 font-medium">
                Contact
              </a>
              <div className="pt-4">
                <button 
                  onClick={toggleDropdown}
                  className="w-full bg-sage-green text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
                >
                  Login
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mobile Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
                    <div className="py-2">
                      <button
                        onClick={() => handleRoleSelect('Donor')}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-body-light-grey transition-colors duration-200 cursor-pointer rounded-t-lg"
                      >
                        As Donor
                      </button>
                      <button
                        onClick={() => handleRoleSelect('Patient')}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-body-light-grey transition-colors duration-200 cursor-pointer rounded-b-lg"
                      >
                        As Patient
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
