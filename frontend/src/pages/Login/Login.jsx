import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#e5f9f8] flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-3xl w-full max-w-md p-8 border border-[#cdebea]">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#1a504c]">
            Odisha Polyclinic
          </h1>

          <p className="text-gray-600 mt-2">
            Login to your account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" />
              Remember Me
            </label>

            <Link
              to="/forgot-password"
              className="text-[#1a504c] text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1a504c] text-white py-3 rounded-xl font-semibold hover:bg-[#143d3a] transition"
          >
            Login
          </button>

        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>

          <span className="px-3 text-gray-400 text-sm">
            OR
          </span>

          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          className="w-full border border-[#cdebea] py-3 rounded-xl hover:bg-[#e5f9f8] transition"
        >
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#1a504c] font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}