import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import clogo from '../assets/logocdpc.png';
import iitlogo from '../assets/logoiit2.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRecruitersDropdownOpen, setIsRecruitersDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleRecruitersDropdown = () => {
    setIsRecruitersDropdownOpen(!isRecruitersDropdownOpen);
  };

  const toggleMoreDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };

  const closeRecruitersDropdown = () => {
    setIsRecruitersDropdownOpen(false);
  };

  const closeMoreDropdown = () => {
    setIsMoreDropdownOpen(false);
  };

  return (
    <div>
      <div className="box1 flex flex-row justify-between items-center pt-3 pb-3 bg-blue-100 px-6 sticky top-0 z-50 shadow-sm">
        {/* Logo */}
        <div className="cpdc_logo">
          <Link to="/">
            <img 
              src={clogo} 
              className="h-16 lg:h-20 p-2 invert transition-transform hover:scale-105" 
              alt="CDPC Logo" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="box2 hidden lg:flex flex-row items-center gap-8">
          <div className="buttons flex flex-row items-center gap-6 text-black">
            
            {/* Main Navigation Buttons */}
            <Link to="/why-recruit">
              <button 
                onMouseEnter={() => {
                  setIsRecruitersDropdownOpen(false);
                  setIsMoreDropdownOpen(false);
                }}
                className="font-medium text-lg px-4 py-2.5 hover:bg-blue-200 rounded-lg hover:cursor-pointer transition-all duration-200 hover:shadow-sm"
                type="button"
              >
                Why Recruit?
              </button>
            </Link>

            <Link to="/about-us">
              <button 
                onMouseEnter={() => {
                  setIsRecruitersDropdownOpen(false);
                  setIsMoreDropdownOpen(false);
                }}
                className="font-medium text-lg px-4 py-2.5 hover:bg-blue-200 rounded-lg hover:cursor-pointer transition-all duration-200 hover:shadow-sm"
                type="button"
              >
                About Us
              </button>
            </Link>

            <Link to="/corporate-connect-home">
              <button 
                onMouseEnter={() => {
                  setIsRecruitersDropdownOpen(false);
                  setIsMoreDropdownOpen(false);
                }}
                className="font-medium text-lg px-4 py-2.5 bg-blue-500 text-white hover:bg-blue-600 rounded-lg hover:cursor-pointer transition-all duration-200 hover:shadow-md"
                type="button"
              >
                Corporate Connect
              </button>
            </Link>

            {/* For Recruiters Dropdown */}
            <div className="relative">
              <button
                onClick={toggleRecruitersDropdown}
                onMouseEnter={() => {
                  setIsMoreDropdownOpen(false);
                  setIsRecruitersDropdownOpen(true);
                }}
                className="font-medium text-lg px-4 py-2.5 hover:bg-blue-200 rounded-lg hover:cursor-pointer transition-all duration-200 hover:shadow-sm flex items-center gap-1"
                type="button"
              >
                For Recruiters
                <ChevronDown size={16} className={`transform transition-transform duration-200 ${isRecruitersDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Recruiters Dropdown Menu */}
              {isRecruitersDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-48 z-50"
                  onMouseLeave={closeRecruitersDropdown}
                >
                  <Link to="/resources" onClick={closeRecruitersDropdown}>
                    <div className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors duration-200">
                      📚 Resources
                    </div>
                  </Link>
                  <Link to="/recruiters-guide" onClick={closeRecruitersDropdown}>
                    <div className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors duration-200">
                      📖 Recruiter&apos;s Guide
                    </div>
                  </Link>
                  <Link to="/recruiters-portal" onClick={closeRecruitersDropdown}>
                    <div className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors duration-200">
                      🚪 Recruiter&apos;s Portal
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* More Dropdown - for other options */}
            <div className="relative">
              <button
                onClick={toggleMoreDropdown}
                onMouseEnter={() => {
                  setIsRecruitersDropdownOpen(false);
                  setIsMoreDropdownOpen(true);
                }}
                className="font-medium text-lg px-4 py-2.5 hover:bg-blue-200 rounded-lg hover:cursor-pointer transition-all duration-200 hover:shadow-sm flex items-center gap-1"
                type="button"
              >
                More
                <ChevronDown size={16} className={`transform transition-transform duration-200 ${isMoreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* More Dropdown Menu */}
              {isMoreDropdownOpen && (
                <div 
                  className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-48 z-50"
                  onMouseLeave={closeMoreDropdown}
                >
                  <Link to="/student-programs" onClick={closeMoreDropdown}>
                    <div className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors duration-200">
                      🎓 Student Programs
                    </div>
                  </Link>
                  <Link to="/placement-stats" onClick={closeMoreDropdown}>
                    <div className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors duration-200">
                      📊 Placements
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Uncomment if needed
          <div className="logo2 ml-4">
            <Link to="/iitRopar">
              <img 
                src={iitlogo} 
                alt="IIT Logo" 
                className="h-14 lg:h-16 p-1 invert transition-transform hover:scale-105" 
              />
            </Link>
          </div> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-blue-200 transition-colors duration-200"
            type="button"
          >
            {isMenuOpen ? (
              <X size={24} className="text-black" />
            ) : (
              <Menu size={24} className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-50 border-t border-blue-200 px-6 py-4 sticky top-20 z-40 shadow-sm">
          <div className="flex flex-col gap-2">
            <Link to="/why-recruit" onClick={toggleMenu}>
              <button 
                className="w-full text-left font-medium text-base px-4 py-3 hover:bg-blue-200 rounded-lg transition-colors duration-200"
                type="button"
              >
                Why Recruit?
              </button>
            </Link>
            
            <Link to="/about-us" onClick={toggleMenu}>
              <button 
                className="w-full text-left font-medium text-base px-4 py-3 hover:bg-blue-200 rounded-lg transition-colors duration-200"
                type="button"
              >
                About Us
              </button>
            </Link>

            <Link to="/corporate-connect-home" onClick={toggleMenu}>
              <button 
                className="w-full text-left font-medium text-base px-4 py-3 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors duration-200"
                type="button"
              >
                Corporate Connect
              </button>
            </Link>

            <Link to="/student-programs" onClick={toggleMenu}>
              <button 
                className="w-full text-left font-medium text-base px-4 py-3 hover:bg-blue-200 rounded-lg transition-colors duration-200"
                type="button"
              >
                Student Programs
              </button>
            </Link>
            
            <Link to="/placement-stats" onClick={toggleMenu}>
              <button 
                className="w-full text-left font-medium text-base px-4 py-3 hover:bg-blue-200 rounded-lg transition-colors duration-200"
                type="button"
              >
                Placements
              </button>
            </Link>
            
            {/* Mobile Recruiters Section */}
            <div className="border-t border-blue-200 pt-2 mt-2">
              <div className="text-sm font-semibold text-gray-600 px-4 py-2">For Recruiters</div>
              <Link to="/resources" onClick={toggleMenu}>
                <button 
                  className="w-full text-left font-medium text-base px-6 py-2.5 hover:bg-blue-200 rounded-lg transition-colors duration-200"
                  type="button"
                >
                  📚 Resources
                </button>
              </Link>
              <Link to="/recruiters-guide" onClick={toggleMenu}>
                <button 
                  className="w-full text-left font-medium text-base px-6 py-2.5 hover:bg-blue-200 rounded-lg transition-colors duration-200"
                  type="button"
                >
                  📖 Recruiter&apos;s Guide
                </button>
              </Link>
              <Link to="/recruiters-portal" onClick={toggleMenu}>
                <button 
                  className="w-full text-left font-medium text-base px-6 py-2.5 hover:bg-blue-200 rounded-lg transition-colors duration-200"
                  type="button"
                >
                  🚪 Recruiter&apos;s Portal
                </button>
              </Link>
            </div>
            
            {/* IIT Logo in Mobile Menu - Uncomment if needed
            <div className="pt-4 border-t border-blue-200 mt-4">
              <Link to="/iitRopar" onClick={toggleMenu}>
                <div className="flex items-center gap-3 px-4 py-2 hover:bg-blue-200 rounded-lg transition-colors duration-200">
                  <img 
                    src={iitlogo} 
                    alt="IIT Logo" 
                    className="h-8 invert" 
                  />
                  <span className="font-medium text-base">IIT Ropar</span>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;