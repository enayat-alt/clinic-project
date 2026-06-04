
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LearningNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");

    navigate("/learning");
    window.location.reload();
  };

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
          <div className="hidden lg:flex items-center gap-4">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/learning/login"
                  className="border border-[#1a504c] text-[#1a504c] px-5 py-2 rounded-xl hover:bg-[#e5f9f8] transition"
                >
                  Login
                </Link>

                <Link
                  to="/learning/register"
                  className="bg-[#1a504c] text-white px-5 py-2 rounded-xl hover:bg-black transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/learning/my-learning"
                  className="hover:text-[#1a504c] font-medium"
                >
                  My Learning
                </Link>

                <Link
                  to="/learning/dashboard"
                  className="hover:text-[#1a504c] font-medium"
                >
                  Dashboard
                </Link>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1a504c] rounded-full flex items-center justify-center text-white font-bold">
                    {currentUser?.name?.charAt(0).toUpperCase()}
                  </div>

                  <span className="font-medium text-[#1a504c]">
                    {currentUser?.name}
                  </span>

                  <button
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                  >
                    Logout
                  </button>
                </div>
              </>
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
                  className="border border-[#1a504c] text-[#1a504c] text-center py-2 rounded-xl"
                >
                  Login
                </Link>

                <Link
                  to="/learning/register"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#1a504c] text-white text-center py-2 rounded-xl"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/learning/my-learning"
                  onClick={() => setIsOpen(false)}
                >
                  My Learning
                </Link>

                <Link to="/learning/dashboard" onClick={() => setIsOpen(false)}>
                  Dashboard
                </Link>

                <div className="text-[#1a504c] font-semibold">
                  {currentUser?.name}
                </div>

                <button
                  onClick={logout}
                  className="bg-red-500 text-white py-2 rounded-xl"
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
