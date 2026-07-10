import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
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
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-400">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-[#d2af61]" />
              53 Engineer's Colony, Sirsi Road, Panchyawala, Jaipur, Rajasthan - 302034
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#d2af61]" />
              <a
                href="tel:+911413558254"
                className="transition hover:text-white"
              >
                +91 14135 58254
              </a>
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#d2af61]" />
              <a
                href="mailto:hospitaldivine378@gmail.com"
                className="transition hover:text-white"
              >
                hospitaldivine378@gmail.com
              </a>
            </p>

            {/* Google Map */}
            <div className="mt-6 overflow-hidden rounded-xl border border-white/10 shadow-lg">
              <iframe
                title="Divine Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.4574607331224!2d75.7227022!3d26.920708400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db30023f4231b%3A0x1da475c69f259d0e!2sDivine%20Hospital!5e0!3m2!1sen!2sin!4v1783504518253!5m2!1sen!2sin"
                className="h-56 w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
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
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#c79a4a] hover:bg-[#c79a4a]"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="https://www.instagram.com/divinehospitall"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#c79a4a] hover:bg-[#c79a4a]"
            >
              <FaInstagram size={14} />
            </a>

            <a
              href="https://in.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#c79a4a] hover:bg-[#c79a4a]"
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