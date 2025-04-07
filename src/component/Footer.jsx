import React from "react";
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">ResumeMaker</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Middle: Social Icons */}
        <div className="flex gap-15 text-2xl">
          <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
          <FaLinkedin className="hover:text-blue-600 cursor-pointer transition" />
          <FaTelegram className="hover:text-sky-400 cursor-pointer transition" />
        </div>

        {/* Right: Credit or Note */}
        <div className="text-sm text-gray-400">
          Made with ❤️ by @Team
        </div>
      </div>
    </footer>
  );
}

export default Footer;
