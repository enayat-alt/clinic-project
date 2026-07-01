import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaVideo,
  FaFlask,
  FaAmbulance,
  FaUserMd,
  FaUsers,
  FaHospital,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

import FloatingBackground from "./FloatingBackground";
import FloatingCard from "./FloatingCard";
import TrustBadge from "./TrustBadge";
import AnimatedButton from "./AnimatedButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#081A33]">
      <FloatingBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 backdrop-blur-xl"
            >
              <FaCheckCircle className="text-cyan-300" />
              <span className="text-sm font-medium text-cyan-200">Trusted Healthcare in Odisha</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl"
            >
              Your <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Health</span>
              <br />
              Our Priority.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mx-auto mt-8 max-w-xl text-base leading-8 text-slate-300 md:text-lg lg:mx-0"
            >
              Experience compassionate healthcare with expert doctors,
              advanced diagnostics, online consultations, and personalized
              treatment plans — all under one trusted roof at Odisha Polyclinic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Link to="/appointment" className="w-full sm:w-auto">
                <AnimatedButton>Book Appointment</AnimatedButton>
              </Link>

              <Link to="/departments" className="w-full sm:w-auto">
                <AnimatedButton primary={false}>Explore Services</AnimatedButton>
              </Link>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 lg:grid-cols-4">
              <TrustBadge icon={<FaUsers />} value={5000} suffix="+" label="Patients" delay={0.2} />
              <TrustBadge icon={<FaUserMd />} value={15} suffix="+" label="Doctors" delay={0.4} />
              <TrustBadge icon={<FaHospital />} value={15} suffix="+" label="Departments" delay={0.6} />
              <TrustBadge icon={<FaStar />} value={4.9} label="Rating" delay={0.8} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative mt-8 flex items-center justify-center lg:mt-0"
          >
            <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px] sm:h-[420px] sm:w-[420px] lg:h-[500px] lg:w-[500px]" />

            <motion.img
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src="/doctor.png"
              alt="Doctor"
              className="relative z-20 w-full max-w-[280px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,.45)] sm:max-w-[360px] md:max-w-[430px] lg:max-w-[520px]"
            />

            <FloatingCard title="Online Consultation" subtitle="Consult our experts from home." icon={<FaVideo />} className="top-4 -left-6 lg:-left-16" delay={0.2} />
            <FloatingCard title="Emergency Care" subtitle="24×7 Medical Assistance" icon={<FaAmbulance />} className="top-24 -right-4 lg:-right-10" delay={0.4} />
            <FloatingCard title="NABL Certified Lab" subtitle="Fast & Accurate Reports" icon={<FaFlask />} className="bottom-24 -left-8 lg:-left-20" delay={0.6} />
            <FloatingCard title="Experienced Doctors" subtitle="15+ Medical Specialists" icon={<FaUserMd />} className="bottom-4 right-0 lg:-right-8" delay={0.8} />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent" />
    </section>
  );
}