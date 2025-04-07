import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="/WebIcon.jpg" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-800">ResumeMaker</span>
        </div>

        {/* Navigation Links */}
        <div className=" md:flex gap-15 hover:text-red-500">
          <a
            href="#home"
            className="font-bold  "
            style={{ textDecoration: "none" }}
          >
            Home
          </a>
          <a
            href="#builder"
            className="font-bold  hover:text-red-500"
            style={{ textDecoration: "none" }}
          >
            Builder
          </a>
          <a
            href="#ats"
            className="font-bold  hover:text-red-900"
            style={{ textDecoration: "none" }}
          >
            ATS Check
          </a>
        </div>

        {/* Login Button */}

        <button
          className="bg-red-500 text-black text-xl px-4 py-2 mx-3 hover:bg-pink-500"
          style={{ borderRadius: "8px" }}
        >
          Login
        </button>
        
      </div>
    </nav>
  );
}

export default Navbar;
