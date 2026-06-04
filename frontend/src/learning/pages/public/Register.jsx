import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LearningRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("learningUsers")) || [];

    const existingUser = users.find(
      (user) => user.email === formData.email
    );

    if (existingUser) {
      alert("Email already registered");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);

    localStorage.setItem(
      "learningUsers",
      JSON.stringify(users)
    );

    alert("Registration Successful");

    navigate("/learning/login");
  };

  return (
    <div className="min-h-screen bg-[#e5f9f8] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl border border-[#cdebea] p-8">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#1a504c] rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            L
          </div>

          <h1 className="text-3xl font-bold text-[#1a504c]">
            Create Account
          </h1>

          <p className="text-gray-600 mt-2">
            Join Odisha Learning Platform
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
            />
          </div>

          {/* Email */}
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
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2">
            <input type="checkbox" required className="mt-1" />

            <label className="text-sm text-gray-600">
              I agree to the Terms & Conditions and Privacy Policy.
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#1a504c] text-white py-3 rounded-xl font-semibold hover:bg-black transition"
          >
            Create Account
          </button>

        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>

          <span className="px-3 text-gray-500 text-sm">
            OR
          </span>

          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Google Register */}
        <button className="w-full border border-[#cdebea] py-3 rounded-xl hover:bg-[#e5f9f8] transition">
          Continue with Google
        </button>

        {/* Login */}
        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/learning/login"
            className="text-[#1a504c] font-semibold hover:underline"
          >
            Login
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