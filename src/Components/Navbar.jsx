import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Facilities", path: "/Facilities" },
    { name: "Services", path: "/services" },
    // { name: "Gallery", path: "/gallery" },
    
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <NavLink to="/">
          <h1 className="text-3xl font-serif font-bold text-black md:text-4xl">
            Divine Hospital
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[15px] font-medium transition ${
                  isActive
                    ? "text-black after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-yellow-600"
                    : "text-gray-600 hover:text-black"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Button */}
        <NavLink
          to="/contact"
          className="hidden bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 lg:block"
        >
          Request Appointment
        </NavLink>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl lg:hidden"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px] border-t border-gray-200" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `border-b border-gray-100 py-4 transition ${
                  isActive
                    ? "font-semibold text-black"
                    : "text-gray-700 hover:text-black"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-5 w-full bg-black py-3 text-center font-semibold text-white transition hover:bg-gray-800"
          >
            Request Appointment
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;