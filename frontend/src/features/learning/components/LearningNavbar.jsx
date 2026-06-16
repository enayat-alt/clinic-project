
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function LearningNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");

  const isLoggedIn = !!token;

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    navigate("/learning");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Navbar */}
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/learning" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1a504c] rounded-xl flex items-center justify-center text-white font-bold">
              L
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1a504c]">
                odisha polyclinic
              </h1>
              <p className="text-xs text-yellow-500">
                Medical Education Platform
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-black transition font-semibold hover:text-[#1a504c]"
            >
              Odisha Polyclinic
            </Link>
            <Link
              to="/learning"
              className="hover:text-[#1a504c] font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/learning/find-course"
              className="hover:text-[#1a504c] font-medium transition"
            >
              Find Course
            </Link>
            <Link
              to="/learning/certifications"
              className="hover:text-[#1a504c] font-medium transition"
            >
              Get Certified
            </Link>
            <Link
              to="/learning/subscribe"
              className="hover:text-[#1a504c] font-medium transition"
            >
              Subscribe
            </Link>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/learning/login"
                  className="text-slate-600 font-medium px-5 py-2.5 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/learning/register"
                  className="bg-[#1a504c] text-white font-medium px-5 py-2.5 rounded-xl shadow-sm hover:bg-[#143e3b] hover:shadow-md transition-all"
                >
                  Get started
                </Link>
              </>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-[#e5f9f8] transition"
                >
                  <div className="w-9 h-9 bg-[#1a504c] rounded-full flex items-center justify-center text-white font-bold">
                    {currentUser?.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-medium text-[#1a504c] hidden xl:block">
                    {currentUser?.name}
                  </span>
                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-lg z-50 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="font-semibold text-sm text-gray-800">
                        {currentUser?.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {currentUser?.email}
                      </p>
                    </div>
                    <Link
                      to="/learning/my-learning"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-[#e5f9f8] hover:text-[#1a504c] transition"
                    >
                      My Learning
                    </Link>
                    <Link
                      to="/learning/dashboard"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-[#e5f9f8] hover:text-[#1a504c] transition border-b border-gray-100"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={logout}
                      className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-3xl text-[#1a504c]"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t py-4 flex flex-col gap-4 font-medium">
            <Link
              to="/learning"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#1a504c]"
            >
              Home
            </Link>
            <Link
              to="/learning/find-course"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#1a504c]"
            >
              Find Course
            </Link>
            <Link
              to="/learning/certifications"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#1a504c]"
            >
              Get Certified
            </Link>
            <Link
              to="/learning/subscribe"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#1a504c]"
            >
              Subscribe
            </Link>

            <hr />

            {!isLoggedIn ? (
              <>
                <Link
                  to="/learning/login"
                  onClick={() => setIsOpen(false)}
                  className="text-slate-600 font-medium text-center py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/learning/register"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#1a504c] text-white font-medium text-center py-2.5 rounded-xl shadow-sm hover:bg-[#143e3b] transition-all"
                >
                  Get started
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 px-1">
                  <div className="w-9 h-9 bg-[#1a504c] rounded-full flex items-center justify-center text-white font-bold">
                    {currentUser?.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#1a504c]">
                      {currentUser?.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {currentUser?.email}
                    </p>
                  </div>
                </div>
                <Link
                  to="/learning/my-learning"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#1a504c]"
                >
                  My Learning
                </Link>
                <Link
                  to="/learning/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#1a504c]"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

