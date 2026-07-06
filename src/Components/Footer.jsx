import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#171f34] text-white">
      {/* Top */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo */}
        <div>
          <h2 className="font-serif text-4xl font-bold">
            Divine Hospital
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Excellence in healthcare with compassion, advanced medical
            technology, and experienced specialists dedicated to your
            well-being.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 font-semibold text-[#d2af61]">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="transition hover:text-white">
                About
              </Link>
            </li>

            <li>
              <Link to="/doctors" className="transition hover:text-white">
                Doctors
              </Link>
            </li>

            <li>
              <Link to="/facilities" className="transition hover:text-white">
                Facilities
              </Link>
            </li>

            <li>
              <Link to="/gallery" className="transition hover:text-white">
                Gallery
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="mb-5 font-semibold text-[#d2af61]">
            Facilities
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>ICU</li>
            <li>Emergency</li>
            <li>Radiology</li>
            <li>Pathology</li>
            <li>Pharmacy</li>
            <li>Ambulance</li>
            <li>Cashless Facility</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 font-semibold text-[#d2af61]">
            Contact
          </h3>

          <div className="space-y-4 text-gray-400">
            <p>Hisar, Haryana</p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#d2af61]" />
              +91 98765 43210
            </p>

            <p>info@divinehospital.com</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Divine Hospital. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-[#c79a4a] hover:border-[#c79a4a]"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-[#c79a4a] hover:border-[#c79a4a]"
            >
              <FaInstagram size={14} />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-[#c79a4a] hover:border-[#c79a4a]"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;