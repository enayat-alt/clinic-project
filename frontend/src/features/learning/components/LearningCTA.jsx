// import React from "react";
// import { Link } from "react-router-dom";

// export default function LearningCTA() {
//   return (
//     <section className="py-24 bg-[#1a504c]">
//       <div className="max-w-5xl mx-auto px-6 text-center">
//         <h2 className="text-4xl md:text-5xl font-bold text-white">
//           Start Your Medical Learning Journey Today
//         </h2>

//         <p className="text-gray-200 mt-6 text-lg max-w-2xl mx-auto">
//           Join Odisha Polyclinic's learning platform and gain access to
//           comprehensive healthcare education, expert guidance, and practical
//           training resources.
//         </p>

//         <div className="flex flex-wrap justify-center gap-4 mt-10">
//           <Link
//             to="/learning/find-course"
//             className="bg-white text-[#1a504c] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
//           >
//             Browse Courses
//           </Link>

//           <Link
//             to="/learning/register"
//             className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1a504c] transition"
//           >
//             Create Account
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function LearningFooter() {
  return (
    <footer className="bg-[#1a504c] text-white pt-20 pb-10 border-t border-teal-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: CTA Banner */}
        <div className="max-w-4xl mx-auto text-center mb-16 border-b border-teal-700/60 pb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Start Your Medical Learning Journey Today
          </h2>

          <p className="text-gray-200 mt-6 text-base md:text-lg max-w-2xl mx-auto">
            Join Odisha Polyclinic's learning platform and gain access to
            comprehensive healthcare education, expert guidance, and practical
            training resources.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/learning/find-course"
              className="bg-white text-[#1a504c] px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition shadow"
            >
              Browse Courses
            </Link>

            <Link
              to="/learning/register"
              className="border border-white text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white hover:text-[#1a504c] transition"
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* Middle Section: Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-gray-200">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              Odisha Polyclinic LMS
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering healthcare professionals with expert clinical courses,
              FMGE preparation, and modern medical education.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/learning/find-course" className="hover:text-white transition">
                  Browse Courses
                </Link>
              </li>
              <li>
                <Link to="/learning/login" className="hover:text-white transition">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Clinical Medicine</li>
              <li>Diagnostics & Pathology</li>
              <li>FMGE Preparation</li>
              <li>Physiotherapy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <p className="text-sm text-gray-300">Bhubaneswar, Odisha, India</p>
            <p className="text-sm text-gray-300 mt-1">
              info@odishapolyclinic.com
            </p>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-teal-800/80 text-xs text-center text-gray-300">
          © {new Date().getFullYear()} Odisha Polyclinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}