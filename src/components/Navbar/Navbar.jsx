import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute -top-10 left-0 right-0 z-10 bg-transparent">
      <div className="px-10  py-4">
        <div className="flex justify-between items-center md:px-1">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="src/assets/Images/logo.png" 
              alt="Logo"
              className="h-28 w-auto"
            />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-primary focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links for larger screens */}
          <div className="hidden md:flex space-x-6 text-primary font-semibold text-lg" >
            <a href="/" className="hover:text-secondary transition duration-300 hover:underline">
              HOME
            </a>
            <Link to="/program" className="hover:text-secondary transition duration-300">
              SERVICES
            </Link>
            <a href="#elearning" className="hover:text-secondary transition duration-300">
              E-LEARNING
            </a>
            <a href="#remotejob" className="hover:text-secondary transition duration-300">
              REMOTE JOB
            </a>
            <a href="#aboutus" className="hover:text-secondary transition duration-300">
              ABOUT US
            </a>
            <a href="#contactus" className="hover:text-secondary transition duration-300">
              CONTACT US
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden md:mt-0 -mt-8 space-y-2 text-blue-600 bg-gradient-to-b from-sky-100 to-[#c5f5f7] font-semibold text-center" style={{ fontSize: '20px' }}>
            <a href="#home" className="block hover:text-secondary transition duration-300">
              HOME
            </a>
            <a href="#services" className="block hover:text-secondary transition duration-300">
              SERVICES
            </a>
            <a href="#elearning" className="block hover:text-secondary transition duration-300">
              E-LEARNING
            </a>
            <a href="#remotejob" className="block hover:text-secondary transition duration-300">
              REMOTE JOB
            </a>
            <a href="#aboutus" className="block hover:text-secondary transition duration-300">
              ABOUT US
            </a>
            <a href="#contactus" className="block hover:text-secondary transition duration-300">
              CONTACT US
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
