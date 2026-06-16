import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useLoginMutation } from "../../../../services/authApi";

export default function LearningLogin() {
  const navigate = useNavigate();
  //const navigate = useNavigate();
  const location = useLocation();

  const redirect = new URLSearchParams(location.search).get("redirect");

  const [loginUser, { isLoading }] = useLoginMutation();

  const [formData, setFormData] = useState({
    email: "admin1@gmail.com",
    password: "admin1",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      }).unwrap();

      localStorage.setItem("accessToken", response.accessToken);

      localStorage.setItem("refreshToken", response.refreshToken);

      localStorage.setItem("user", JSON.stringify(response.user));

      const user = response.user;

      // If user came from another page
      if (redirect) {
        navigate(redirect);
        return;
      }

      // Normal login flow
      if (user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (user.role === "student") {
        navigate("/learning/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error?.data?.message || "Invalid email or password");

      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#e5f9f8] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-[#cdebea] p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#1a504c] rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            L
          </div>

          <h1 className="text-3xl font-bold text-[#1a504c]">Learning Portal</h1>

          <p className="text-gray-600 mt-2">
            Continue your medical learning journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              required
            />
          </div>

          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              Remember Me
            </label>

            <Link
              to="/learning/forgot-password"
              className="text-[#1a504c] text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#1a504c] text-white py-3 rounded-xl font-semibold hover:bg-black transition disabled:opacity-50"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>

          <span className="px-3 text-gray-500 text-sm">OR</span>

          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button className="w-full border border-[#cdebea] py-3 rounded-xl hover:bg-[#e5f9f8] transition">
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/learning/register"
            className="text-[#1a504c] font-semibold hover:underline"
          >
            Create Account
          </Link>
        </p>

        {/* Back */}
        <div className="text-center mt-6">
          <Link
            to="/learning"
            className="text-[#1a504c] hover:underline text-sm"
          >
            ← Back to Learning Home
          </Link>
        </div>
      </div>
    </div>
  );
}
