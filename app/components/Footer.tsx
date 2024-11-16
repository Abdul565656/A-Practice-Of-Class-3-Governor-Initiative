"use client"
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-8 md:mb-0 transform transition-all duration-500 hover:scale-105">
              <h3 className="text-4xl font-bold mb-4 animate-pulse">Abdullah Kashif</h3>
              <p className="text-lg opacity-80 hover:opacity-100 transition-opacity duration-300">
                Crafting digital experiences with passion and precision.
              </p>
            </div>

            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h4 className="text-2xl font-semibold mb-6 text-center">Quick Links</h4>
              <ul className="flex flex-col items-center space-y-3">
                <li>
                  <a
                    href="/"
                    className="hover:text-blue-400 transition-colors duration-300 transform hover:translate-x-2 inline-block"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="hover:text-blue-400 transition-colors duration-300 transform hover:translate-x-2 inline-block"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-blue-400 transition-colors duration-300 transform hover:translate-x-2 inline-block"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/contactus"
                    className="hover:text-blue-400 transition-colors duration-300 transform hover:translate-x-2 inline-block"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/3">
              <h4 className="text-2xl font-semibold mb-6 text-center">Connect With Me</h4>
              <div className="flex justify-center space-x-6">
                {/* Instagram Icon */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-500 transition-colors duration-300 transform hover:scale-125"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.5a5.25 5.25 0 1 1 0 10.5A5.25 5.25 0 0 1 12 7zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm4.625-.5a.875.875 0 1 1 1.75 0 .875.875 0 0 1-1.75 0z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/abdullah-kashif-6961a931b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-125"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.6c0-1.335-.028-3.055-1.861-3.055-1.861 0-2.145 1.452-2.145 2.954v5.701h-3.554V8.348h3.414v1.645h.049c.476-.902 1.635-1.851 3.364-1.851 3.595 0 4.26 2.367 4.26 5.452v6.858zM5.337 6.433c-1.144 0-2.067-.925-2.067-2.062 0-1.138.923-2.062 2.067-2.062s2.067.924 2.067 2.062c0 1.137-.924 2.062-2.067 2.062zM3.672 20.452h3.554V8.348H3.672v12.104z"></path>
                  </svg>
                </a>

                <a
                  href="https://github.com/Abdul565656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-colors duration-300 transform hover:scale-125"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2c-5.523 0-10 4.477-10 10 0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.012-1.7-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.907-.62.069-.608.069-.608 1.002.071 1.529 1.029 1.529 1.029.891 1.527 2.338 1.086 2.91.831.092-.646.35-1.086.637-1.336-2.22-.252-4.555-1.11-4.555-4.945 0-1.092.39-1.986 1.029-2.685-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.836c.85.004 1.705.115 2.502.338 1.908-1.296 2.747-1.026 2.747-1.026.547 1.378.203 2.397.1 2.65.641.7 1.029 1.593 1.029 2.685 0 3.847-2.338 4.687-4.566 4.935.36.31.678.917.678 1.85 0 1.335-.012 2.41-.012 2.738 0 .268.18.578.688.48C19.138 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 text-sm text-center">
            <p className="animate-bounce">
              &copy; {new Date().getFullYear()} Abdullah Kashif. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
  }
export default Footer
