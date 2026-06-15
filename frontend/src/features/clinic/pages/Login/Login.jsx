
// import { useState } from "react";
// import {
//   Link,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";

// import { useLoginMutation } from "../../../../services/authApi";

// export default function Login() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [login, { isLoading }] =
//     useLoginMutation();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const params = new URLSearchParams(
//     location.search
//   );

//   const redirect = params.get("redirect");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await login({
//         email: formData.email,
//         password: formData.password,
//       }).unwrap();

//       localStorage.setItem(
//         "token",
//         res.accessToken
//       );

//       localStorage.setItem(
//         "user",
//         JSON.stringify(res.user)
//       );

//       // If user came from Enroll Now button
//       if (redirect) {
//         navigate(redirect);
//       } else {
//   navigate("/learning/dashboard");
// }
//     } catch (error) {
//       console.log(error);

//       alert(
//         error?.data?.message ||
//           "Login failed"
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#e5f9f8] flex items-center justify-center px-4">
//       <div className="bg-white shadow-xl rounded-3xl w-full max-w-md p-6 md:p-8 border border-[#cdebea]">

//         {/* Logo */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-[#1a504c]">
//             Odisha Polyclinic
//           </h1>

//           <p className="text-gray-600 mt-2">
//             Login to your account
//           </p>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="space-y-5"
//         >
//           <div>
//             <label className="block text-sm font-medium mb-2 text-gray-700">
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
//             <label className="block text-sm font-medium mb-2 text-gray-700">
//               Password
//             </label>

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

//           <div className="flex justify-between items-center">
//             <label className="flex items-center gap-2 text-sm text-gray-700">
//               <input type="checkbox" />
//               Remember Me
//             </label>

//             <Link
//               to="/forgot-password"
//               className="text-[#1a504c] text-sm hover:underline"
//             >
//               Forgot Password?
//             </Link>
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-[#1a504c] text-white py-3 rounded-xl font-semibold hover:bg-[#143d3a] transition disabled:opacity-50"
//           >
//             {isLoading
//               ? "Logging in..."
//               : "Login"}
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="my-6 flex items-center">
//           <div className="flex-1 border-t border-gray-300"></div>

//           <span className="px-3 text-gray-400 text-sm">
//             OR
//           </span>

//           <div className="flex-1 border-t border-gray-300"></div>
//         </div>

//         {/* Google Login */}
//         <button className="w-full border border-[#cdebea] py-3 rounded-xl hover:bg-[#e5f9f8] transition">
//           Continue with Google
//         </button>

//         {/* Register Link */}
//         <p className="text-center text-gray-600 mt-6">
//           Don't have an account?{" "}
//           <Link
//             to="/learning/register"
//             className="text-[#1a504c] font-semibold hover:underline"
//           >
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }