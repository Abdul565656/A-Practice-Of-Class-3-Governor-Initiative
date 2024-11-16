"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50 transition-all duration-300 ease-in-out hover:shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-gray-800 animate-pulse">Abdullah Kashif</h2>

          {/* Hamburger Icon */}
          <div
            className="md:hidden text-gray-800 cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </div>

          {/* Navigation */}
          <nav
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-6">
              <li>
                <a
                  href="/"
                  className="text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-500 pb-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-500 pb-1"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-500 pb-1"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contactus"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
