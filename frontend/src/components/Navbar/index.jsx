

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Navbar */}
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a504c]">
              Odisha Polyclinic
            </h2>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 font-medium">
            <Link to="/" className="hover:text-[#1a504c] transition">
              Home
            </Link>

            <Link to="/about" className="hover:text-[#1a504c] transition">
              About Us
            </Link>

            <Link
              to="/departments"
              className="hover:text-[#1a504c] transition"
            >
              Departments
            </Link>

            

            <Link
              to="/tests-services"
              className="hover:text-[#1a504c] transition"
            >
              Lab Tests
            </Link>

            <Link
              to="/learning"
              className="hover:text-[#1a504c] transition"
            >
              Learning
            </Link>

            <Link
              to="/contact"
              className="hover:text-[#1a504c] transition"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* <Link
              to="/login"
              className="border border-[#1a504c] text-[#1a504c] px-4 py-2 rounded-lg hover:bg-[#1a504c] hover:text-white transition"
            >
              Login
            </Link> */}

            <Link
              to="/appointment"
              className="bg-[#1a504c] text-white px-4 py-2 rounded-lg hover:bg-black transition"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-[#1a504c]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 mb-4 bg-[#1a504c] text-white rounded-2xl shadow-xl p-5 flex flex-col gap-4">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-200"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-200"
            >
              About Us
            </Link>

            <Link
              to="/departments"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-200"
            >
              Departments
            </Link>

            <Link
              to="/consultation"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-200"
            >
              Lab Test
            </Link>

            <Link
              to="/tests-services"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-200"
            >
              Tests & Services
            </Link>

            <Link
              to="/learning"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-200"
            >
              Learning
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-200"
            >
              Contact
            </Link>

            <div className="border-t border-white/20 pt-4 flex flex-col gap-3">

              {/* <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="border border-white text-center py-2 rounded-lg hover:bg-white hover:text-[#1a504c] transition"
              >
                Login
              </Link> */}

              <Link
                to="/appointment"
                onClick={() => setIsOpen(false)}
                className="bg-white text-[#1a504c] text-center py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Book Appointment
              </Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}