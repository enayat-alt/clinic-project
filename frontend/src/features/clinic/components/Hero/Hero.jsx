

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// import {
//   FaVideo,
//   FaFlask,
//   FaAmbulance,
//   FaUserMd,
//   FaUsers,
//   FaHospital,
//   FaStar,
//   FaCheckCircle,
// } from "react-icons/fa";

// import FloatingBackground from "./FloatingBackground";
// import FloatingCard from "./FloatingCard";
// import TrustBadge from "./TrustBadge";
// import AnimatedButton from "./AnimatedButton";

// export default function Hero() {
//   return (
//     <section className="relative min-h-[100svh] overflow-x-hidden bg-[#081A33] pt-20 sm:pt-24 lg:pt-28">
//       <FloatingBackground />

//       <div className="relative z-10 mx-auto flex min-h-[calc(100svh-80px)] w-full max-w-7xl items-center px-5 pt-10 pb-28 sm:px-6 sm:pt-14 sm:pb-32 lg:px-8 lg:pt-16 lg:pb-40">
//         <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">
//           {/* LEFT */}
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.5,
//               ease: "easeOut",
//             }}
//             className="text-center lg:text-left"
//           >
//             <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 backdrop-blur-xl">
//               <FaCheckCircle className="text-cyan-300" />

//               <span className="text-sm font-medium text-cyan-200">
//                 Trusted Healthcare in Odisha
//               </span>
//             </div>

//             <h1 className="mt-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
//               Your{" "}
//               <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
//                 Health
//               </span>

//               <br />

//               Our Priority.
//             </h1>

//             <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
//               Experience compassionate healthcare with expert doctors,
//               advanced diagnostics, online consultations, and personalized
//               treatment plans—all under one trusted roof at Odisha
//               Polyclinic.
//             </p>

//             {/* Buttons */}
//             <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
//               <Link to="/appointment" className="w-full sm:w-auto">
//                 <AnimatedButton>
//                   Book Appointment
//                 </AnimatedButton>
//               </Link>

//               <Link to="/departments" className="w-full sm:w-auto">
//                 <AnimatedButton primary={false}>
//                   Explore Services
//                 </AnimatedButton>
//               </Link>
//             </div>

//             {/* Trust Badges */}
//             <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-5 lg:mt-16 lg:grid-cols-4 lg:gap-6">
//               <TrustBadge
//                 icon={<FaUsers />}
//                 value={5000}
//                 suffix="+"
//                 label="Patients"
//               />

//               <TrustBadge
//                 icon={<FaUserMd />}
//                 value={15}
//                 suffix="+"
//                 label="Doctors"
//               />

//               <TrustBadge
//                 icon={<FaHospital />}
//                 value={15}
//                 suffix="+"
//                 label="Departments"
//               />

//               <TrustBadge
//                 icon={<FaStar />}
//                 value={5}
//                 label="Rating"
//               />
//             </div>
//           </motion.div>

//           {/* RIGHT */}
//           <motion.div
//             initial={{ opacity: 0, x: 15 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 0.6,
//               ease: "easeOut",
//             }}
//             className="relative flex items-center justify-center"
//           >
//             {/* Glow */}
//             <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]" />

//             {/* Doctor */}
//             <motion.img
//               animate={{
//                 y: [0, -8, 0],
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               src="/doctor.webp"
//               alt="Doctor"
//               className="relative z-20 w-full max-w-[260px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,.45)] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[500px] xl:max-w-[560px]"
//             />

//             {/* Floating Cards */}
//             <FloatingCard
//               title="Online Consultation"
//               subtitle="Consult our experts from home."
//               icon={<FaVideo />}
//               className="top-4 -left-4 lg:-left-16"
//             />

//             <FloatingCard
//               title="Emergency Care"
//               subtitle="24×7 Medical Assistance"
//               icon={<FaAmbulance />}
//               className="top-24 -right-2 lg:-right-10"
//             />

//             <FloatingCard
//               title="NABL Certified Lab"
//               subtitle="Fast & Accurate Reports"
//               icon={<FaFlask />}
//               className="bottom-24 -left-4 lg:-left-20"
//             />

//             <FloatingCard
//               title="Experienced Doctors"
//               subtitle="15+ Medical Specialists"
//               icon={<FaUserMd />}
//               className="bottom-6 right-0 lg:-right-8"
//             />
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom Fade */}
//       <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent sm:h-28 lg:h-36" />
//     </section>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaWhatsapp,
  FaPhoneAlt,
  FaUserMd,
  FaMicroscope,
  FaCalendarCheck,
  FaClock,
  FaShieldAlt,
  FaPercent,
} from "react-icons/fa";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#081A33] text-white overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Main Centered Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight max-w-3xl leading-snug"
        >
          <span className="text-amber-400 font-medium">Get Healthcare Fast</span>{" "}
          with Expert Consultation in your city
        </motion.h1>

        {/* Badge Pill Divider */}
        <div className="my-6 flex items-center justify-center gap-3 w-full max-w-xs">
          <div className="h-[1px] bg-white/10 flex-1" />
          <span className="text-[11px] font-normal tracking-tight uppercase text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            ONLY AT ODISHA POLYCLINIC
          </span>
          <div className="h-[1px] bg-white/10 flex-1" />
        </div>

        {/* Feature Cards Row */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mb-8"
        >
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between text-left backdrop-blur-md">
            <div>
              <h3 className="text-[13px] font-normal tracking-tight text-white">Same Day Booking</h3>
              <p className="text-[11px] font-normal tracking-tight text-slate-300">For all specialist doctors</p>
            </div>
            <div className="h-10 w-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 ml-2">
              <FaCalendarCheck size={18} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between text-left backdrop-blur-md">
            <div>
              <h3 className="text-[13px] font-normal tracking-tight text-white">Express Diagnostics</h3>
              <p className="text-[11px] font-normal tracking-tight text-slate-300">Fast & accurate lab reports</p>
            </div>
            <div className="h-10 w-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 ml-2">
              <FaMicroscope size={18} />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between text-left backdrop-blur-md">
            <div>
              <h3 className="text-[13px] font-normal tracking-tight text-white">24/7 Patient Support</h3>
              <p className="text-[11px] font-normal tracking-tight text-slate-300">No long waiting time</p>
            </div>
            <div className="h-10 w-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 ml-2">
              <FaClock size={18} />
            </div>
          </div>
        </motion.div>

        {/* Tagline Divider */}
        <div className="flex items-center justify-center gap-3 w-full max-w-sm mb-6">
          <div className="h-[1px] bg-white/10 flex-1" />
          <span className="text-[11px] font-normal tracking-tight uppercase text-slate-400">
            BOOK & AVAIL CLINIC DISCOUNTS
          </span>
          <div className="h-[1px] bg-white/10 flex-1" />
        </div>

        {/* Main White Search / Booking Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-3xl bg-white rounded-3xl p-5 sm:p-6 text-slate-800 shadow-2xl border border-slate-100 text-left"
        >
          {/* Search Bar Input */}
          <div className="relative flex items-center rounded-2xl border border-slate-200 bg-slate-50 p-1.5 focus-within:border-cyan-600 transition">
            <FaSearch className="text-slate-400 ml-3 mr-2 text-xs" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for Doctors, Specialties, or Lab Tests..."
              className="w-full bg-transparent text-[13px] font-normal tracking-tight text-slate-700 outline-none placeholder:text-slate-400 py-2"
            />
            <button
              type="button"
              className="rounded-xl bg-[#081A33] hover:bg-[#0F2D56] text-white px-6 py-2.5 text-[13px] font-normal tracking-tight transition flex items-center justify-center"
            >
              Search
            </button>
          </div>

          {/* "OR YOU CAN ORDER VIA" section */}
          <div className="my-6 flex items-center justify-center gap-3">
            <div className="h-[1px] bg-slate-200 flex-1" />
            <span className="text-[11px] font-normal tracking-tight uppercase text-slate-400">
              OR YOU CAN BOOK VIA
            </span>
            <div className="h-[1px] bg-slate-200 flex-1" />
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 py-3 px-4 text-[13px] font-normal tracking-tight text-slate-700 hover:bg-slate-50 transition"
            >
              <FaWhatsapp className="text-emerald-500 text-sm" />
              <span>Book with WhatsApp</span>
            </a>

            <Link
              to="/doctor"
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 py-3 px-4 text-[13px] font-normal tracking-tight text-slate-700 hover:bg-slate-50 transition"
            >
              <FaUserMd className="text-cyan-600 text-sm" />
              <span>Find Specialist</span>
            </Link>

            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 py-3 px-4 text-[13px] font-normal tracking-tight text-slate-700 hover:bg-slate-50 transition"
            >
              <FaPhoneAlt className="text-slate-600 text-xs" />
              <span>Call us to Book</span>
            </a>
          </div>

          {/* Offer Banner Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100">
            {/* Offer Card 1 */}
            <div className="rounded-2xl border border-sky-100 bg-sky-50/50 p-4 relative flex items-center justify-between">
              <div>
                <span className="text-[11px] font-normal tracking-tight uppercase text-sky-700 bg-sky-100 px-2 py-0.5 rounded-md">
                  FIRST VISIT OFFER
                </span>
                <p className="text-[13px] font-normal tracking-tight text-slate-800 mt-2">
                  Get 25% OFF on Health Checkups
                </p>
                <p className="text-[11px] font-normal tracking-tight text-slate-500">
                  On pathology & lab diagnostics
                </p>
                <Link
                  to="/appointment"
                  className="inline-block mt-3 rounded-lg bg-[#081A33] text-white px-3 py-1.5 text-[11px] font-normal tracking-tight hover:bg-[#0F2D56] transition"
                >
                  Book Checkup
                </Link>
              </div>
              <div className="h-10 w-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center">
                <FaPercent size={14} />
              </div>
            </div>

            {/* Offer Card 2 */}
            <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-4 relative flex items-center justify-between">
              <div>
                <span className="text-[11px] font-normal tracking-tight uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                  SPECIALIST CONSULTATION
                </span>
                <p className="text-[13px] font-normal tracking-tight text-slate-800 mt-2">
                  Free Follow-up within 7 Days
                </p>
                <p className="text-[11px] font-normal tracking-tight text-slate-500">
                  Valid with code: <span className="font-medium text-slate-700">POLY2026</span>
                </p>
                <Link
                  to="/appointment"
                  className="inline-block mt-3 rounded-lg bg-[#081A33] text-white px-3 py-1.5 text-[11px] font-normal tracking-tight hover:bg-[#0F2D56] transition"
                >
                  Claim Offer
                </Link>
              </div>
              <div className="h-10 w-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                <FaShieldAlt size={14} />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

