function Navbar() {
    return (
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <img
              src="/WebIcon.jpg" // Replace with your favicon or logo path
              alt="Logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-gray-800">
              ResumeMaker
            </span>
          </div>
  
          {/* Navigation Links */}
          <div className="hidden md:flex gap-6">
            <a href="#home"  className="font-bold text-gray-700 hover:text-red  " style={{ textDecoration: 'none' }}>
              Home
            </a>
            <a href="#builder" className="font-bold text-gray-700 hover:text-red " style={{ textDecoration: 'none' }}>
              Builder
            </a>
            <a href="#ats" className=" font-bold text-gray-700 hover:text-red " style={{ textDecoration: 'none' }}>
              ATS Check
            </a>
          </div>
  
          {/* Login Button */}
          <div className="hidden md:block">
            <button
              href="#login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 no-underline"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  