import React, { useState } from "react";
import LOGO from "../assets/images/logo.jpg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        id="global-header"
        className="code-section fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 font-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 lg:h-20">
            {/* Logo */}
            <a href="/" data-logo="" className="flex items-center">
              <img
                src={LOGO}
                alt="Naphtech College Logo"
                className="h-16 lg:h-[70px] w-auto"
              />
            </a>
            {/* tiktok icons */}
            <a
              href="https://www.tiktok.com/@naphtechcomputertraining"
              target="_blank"
              rel="noopener noreferrer"
              className=" lg:hidden w-11 h-11 bg-white/10 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width={24}
                height={24}
              >
                <path
                  fill="#010101"
                  d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"
                />
                <path
                  fill="#F77737"
                  d="M37.006 22.323c-0.227 0.021-0.457 0.035-0.69 0.035-2.623 0-4.928-1.349-6.269-3.388 0 5.349 0 11.435 0 11.537 0 4.709-3.818 8.527-8.527 8.527s-8.527-3.818-8.527-8.527 3.818-8.527 8.527-8.527c0.178 0 0.352 0.016 0.527 0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053-2.404 0-4.352 1.948-4.352 4.352s1.948 4.352 4.352 4.352 4.527-1.894 4.527-4.298c0-0.095 0.042-19.594 0.042-19.594h4.016c0.378 3.591 3.277 6.425 6.901 6.685v22.323z"
                />
              </svg>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 font-bold">
              <a
                href="#healthcare"
                className="text-gray-600 hover:text-[#1E3A8A] font-medium transition-colors "
              >
                Degrees
              </a>
              <a
                href="#training"
                className="text-gray-600 hover:text-[#1E3A8A] font-medium transition-colors"
              >
                Trainings
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-[#1E3A8A] font-medium transition-colors"
              >
                Services
              </a>

              <a
                href="#contact"
                className="text-gray-600 hover:text-[#1E3A8A] font-medium transition-colors"
              >
                Contact Us
              </a>

              <a
                href="https://www.tiktok.com/@naphtechcomputertraining"
                target="_blank"
                rel="noopener noreferrer"
                className="max-lg:hidden w-11 h-11 bg-white/10 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width={24}
                  height={24}
                >
                  <path
                    fill="#010101"
                    d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"
                  />
                  <path
                    fill="#F77737"
                    d="M37.006 22.323c-0.227 0.021-0.457 0.035-0.69 0.035-2.623 0-4.928-1.349-6.269-3.388 0 5.349 0 11.435 0 11.537 0 4.709-3.818 8.527-8.527 8.527s-8.527-3.818-8.527-8.527 3.818-8.527 8.527-8.527c0.178 0 0.352 0.016 0.527 0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053-2.404 0-4.352 1.948-4.352 4.352s1.948 4.352 4.352 4.352 4.527-1.894 4.527-4.298c0-0.095 0.042-19.594 0.042-19.594h4.016c0.378 3.591 3.277 6.425 6.901 6.685v22.323z"
                  />
                </svg>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-[#1E3A8A] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  // Close icon (X) when menu is open
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger icon when menu is closed
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } bg-white border-t border-gray-100`}
        >
          <nav className="px-4 py-4 space-y-1">
            <a
              href="#healthcare"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-[#1E3A8A] hover:bg-gray-50 rounded-lg font-medium"
            >
              Degrees
            </a>
            <a
              href="#training"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-[#1E3A8A] hover:bg-gray-50 rounded-lg font-medium"
            >
              Trainings
            </a>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-[#1E3A8A] hover:bg-gray-50 rounded-lg font-medium"
            >
              Services
            </a>

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-[#1E3A8A] hover:bg-gray-50 rounded-lg font-medium"
            >
              Contact Us
            </a>
            <a
              href="https://www.tiktok.com/@naphtechcomputertraining"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="max-lg:hidden w-11 h-11 bg-white/10 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width={24}
                height={24}
              >
                <path
                  fill="#010101"
                  d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"
                />
                <path
                  fill="#F77737"
                  d="M37.006 22.323c-0.227 0.021-0.457 0.035-0.69 0.035-2.623 0-4.928-1.349-6.269-3.388 0 5.349 0 11.435 0 11.537 0 4.709-3.818 8.527-8.527 8.527s-8.527-3.818-8.527-8.527 3.818-8.527 8.527-8.527c0.178 0 0.352 0.016 0.527 0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053-2.404 0-4.352 1.948-4.352 4.352s1.948 4.352 4.352 4.352 4.527-1.894 4.527-4.298c0-0.095 0.042-19.594 0.042-19.594h4.016c0.378 3.591 3.277 6.425 6.901 6.685v22.323z"
                />
              </svg>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
