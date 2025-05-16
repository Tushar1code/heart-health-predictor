import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">CardioCare</h1>
      <div className="flex space-x-4">
        <NavLink
          className="px-3"
          to="/"
          activeClassName="text-red-300"
          exact
        >
          Home
        </NavLink>
        <NavLink
          className="px-3"
          to="/about"
          activeClassName="text-red-300"
        >
          About
        </NavLink>
        <NavLink
          className="px-3"
          to="/services"
          activeClassName="text-red-300"
        >
          Services
        </NavLink>
        <NavLink
          className="px-3"
          to="/doctors"
          activeClassName="text-red-300"
        >
          Find a Doctor
        </NavLink>
        <NavLink
          className="px-3"
          to="/check-health"
          activeClassName="text-red-300"
        >
          Check Health
        </NavLink>
        <NavLink
          className="px-3"
          to="/contact"
          activeClassName="text-red-300"
        >
          Contact
        </NavLink>
        
        {/* Optional Profile Button */}
       
      </div>
    </nav>
  );
};

export default Navbar;
