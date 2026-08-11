// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setCredentials } from "../../../../app/authSlice";
// import { useLoginMutation } from "../../../../services/authApi";

// export default function LearningLogin() {
//   const navigate = useNavigate();
//   //const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const redirect = new URLSearchParams(location.search).get("redirect");

//   const [loginUser, { isLoading }] = useLoginMutation();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await loginUser({
//         email: formData.email,
//         password: formData.password,
//       }).unwrap();

//       // localStorage.setItem("accessToken", response.accessToken);

//       // localStorage.setItem("user", JSON.stringify(response.user));
//       dispatch(
//         setCredentials({
//           accessToken: response.accessToken,
//           user: response.user,
//         }),
//       );

//       const user = response.user;

//       // If user came from another page
//       if (redirect) {
//         navigate(redirect);
//         return;
//       }

//       // Normal login flow
//       if (user.role === "admin") {
//         navigate("/admin/dashboard");
//       } else if (user.role === "student") {
//         navigate("/learning/dashboard");
//       } else {
//         navigate("/");
//       }
//     } catch (error) {
//       setError(error?.data?.message || "Invalid email or password");

//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#e5f9f8] flex items-center justify-center px-6 py-12">
//       <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-[#cdebea] p-8">
//         {/* Logo */}
//         <div className="text-center mb-8">
//           <div className="w-16 h-16 bg-[#1a504c] rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
//             L
//           </div>

//           <h1 className="text-3xl font-bold text-[#1a504c]">Learning Portal</h1>

//           <p className="text-gray-600 mt-2">
//             Continue your medical learning journey
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium mb-2">
//               Email Address
//             </label>

//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-2">Password</label>

//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
//               required
//             />
//           </div>

//           {error && (
//             <div className="bg-red-100 text-red-600 p-3 rounded-xl text-sm">
//               {error}
//             </div>
//           )}

//           <div className="flex justify-between items-center">
//             <label className="flex items-center gap-2 text-sm">
//               <input type="checkbox" />
//               Remember Me
//             </label>

//             <Link
//               to="/learning/forgot-password"
//               className="text-[#1a504c] text-sm hover:underline"
//             >
//               Forgot Password?
//             </Link>
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-[#1a504c] text-white py-3 rounded-xl font-semibold hover:bg-black transition disabled:opacity-50"
//           >
//             {isLoading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="my-6 flex items-center">
//           <div className="flex-1 border-t border-gray-300"></div>

//           <span className="px-3 text-gray-500 text-sm">OR</span>

//           <div className="flex-1 border-t border-gray-300"></div>
//         </div>

//         {/* Google Login */}
//         <button className="w-full border border-[#cdebea] py-3 rounded-xl hover:bg-[#e5f9f8] transition">
//           Continue with Google
//         </button>

//         {/* Register Link */}
//         <p className="text-center mt-6 text-gray-600">
//           Don't have an account?{" "}
//           <Link
//             to="/learning/register"
//             className="text-[#1a504c] font-semibold hover:underline"
//           >
//             Create Account
//           </Link>
//         </p>

//         {/* Back */}
//         <div className="text-center mt-6">
//           <Link
//             to="/learning"
//             className="text-[#1a504c] hover:underline text-sm"
//           >
//             ← Back to Learning Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }



import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../../app/authSlice";
import { useLoginMutation } from "../../../../services/authApi";

export default function LearningLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const redirect = new URLSearchParams(location.search).get("redirect");

  const [loginUser, { isLoading }] = useLoginMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

      dispatch(
        setCredentials({
          accessToken: response.accessToken,
          user: response.user,
        })
      );

      const user = response.user;

      if (redirect) {
        navigate(redirect);
        return;
      }

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
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12 font-sans">
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Illustration / Banner (Hidden on small screens) */}
        <div className="hidden lg:flex flex-col items-center justify-center bg-[#e5f9f8] rounded-3xl p-12 relative overflow-hidden min-h-[550px]">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1a504c_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative z-10 text-center max-w-md">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-[#1a504c]/20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600"
                alt="Medical Education"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-[#1a504c] tracking-tight">
              Odisha Polyclinic Medical Academy
            </h2>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              Log in to access your enrolled medical courses, continue your lessons, and track your clinical training progress.
            </p>
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="w-full max-w-md mx-auto bg-white p-6 md:p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Log in with email
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#1a504c] transition"
                required
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#1a504c] transition"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-xl text-xs border border-red-100">
                {error}
              </div>
            )}

            <div className="flex justify-between items-center text-xs pt-1">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#1a504c] focus:ring-[#1a504c] accent-[#1a504c]" />
                Remember Me
              </label>

              <Link
                to="/learning/forgot-password"
                className="text-[#1a504c] font-medium hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1a504c] text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-black transition shadow-sm mt-2 disabled:opacity-50"
            >
              {isLoading ? "Logging in..." : "Continue"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-gray-400 text-xs uppercase tracking-wider">Other login options</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Social Icons row */}
          <div className="flex justify-center gap-4">
            <button className="w-12 h-12 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-50 transition">
              <span className="text-lg font-bold text-red-500">G</span>
            </button>
            <button className="w-12 h-12 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-50 transition">
              <span className="text-lg font-bold text-blue-600">f</span>
            </button>
            <button className="w-12 h-12 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-50 transition">
              <span className="text-lg font-bold text-gray-900"></span>
            </button>
          </div>

          {/* Create Account card box */}
          <div className="mt-8 bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/learning/register"
                className="text-[#1a504c] font-bold hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>

          {/* Back link */}
          <div className="text-center mt-4">
            <Link
              to="/learning"
              className="text-xs text-gray-500 hover:text-[#1a504c] transition"
            >
              ← Back to Learning Home
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
