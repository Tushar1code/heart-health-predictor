import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/find-doctor", label: "Find a Doctor" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem("token");

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav
      className="p-5 flex justify-between items-center w-full shadow-md"
      style={{
        backgroundImage: "url('/images/header-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="Logo" className="h-12 w-40" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 flex-grow justify-center">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-black font-medium hover:text-blue-600"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Login/Logout Button */}
      <div className="hidden md:flex ml-auto">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              Login
            </button>
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 p-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-black font-medium hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile: If logged in, show logout in mobile view */}
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
