import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="/WebIcon.jpg" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-800">ResumeMaker</span>
        </div>

        {/* Navigation + Menu Toggle */}
        <div className="flex items-center gap-4">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-15">
            <a
              href="#home"
              className="font-bold hover:text-red-500"
              style={{ textDecoration: "none" }}
            >
              Home
            </a>
            <a
              href="#builder"
              className="font-bold hover:text-red-500"
              style={{ textDecoration: "none" }}
            >
              Builder
            </a>
            <a
              href="#ats"
              className="font-bold hover:text-red-900"
              style={{ textDecoration: "none" }}
            >
              ATS Check
            </a>
          </div>

          {/* Hamburger Icon - Mobile Only */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Login Button (Always Visible) */}
          <button
            className="bg-red-500 text-black text-xl px-4 py-2 mx-2 hover:bg-pink-500"
            style={{ borderRadius: "8px" }}
          >
            Login
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Links */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white">
          <a
            href="#home"
            className="block py-2 font-bold text-gray-800 hover:text-red-500"
            style={{ textDecoration: "none" }}
          >
            Home
          </a>
          <a
            href="#builder"
            className="block py-2 font-bold text-gray-800 hover:text-red-500"
            style={{ textDecoration: "none" }}
          >
            Builder
          </a>
          <a
            href="#ats"
            className="block py-2 font-bold text-gray-800 hover:text-red-900"
            style={{ textDecoration: "none" }}
          >
            ATS Check
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
