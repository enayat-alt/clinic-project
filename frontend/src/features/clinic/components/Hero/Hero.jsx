

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
    <section className="relative min-h-[100svh] overflow-x-hidden bg-[#081A33] pt-20 sm:pt-24 lg:pt-28">
      <FloatingBackground />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-80px)] w-full max-w-7xl items-center px-5 pt-10 pb-28 sm:px-6 sm:pt-14 sm:pb-32 lg:px-8 lg:pt-16 lg:pb-40">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 backdrop-blur-xl">
              <FaCheckCircle className="text-cyan-300" />

              <span className="text-sm font-medium text-cyan-200">
                Trusted Healthcare in Odisha
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Your{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Health
              </span>

              <br />

              Our Priority.
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
              Experience compassionate healthcare with expert doctors,
              advanced diagnostics, online consultations, and personalized
              treatment plans—all under one trusted roof at Odisha
              Polyclinic.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link to="/appointment" className="w-full sm:w-auto">
                <AnimatedButton>
                  Book Appointment
                </AnimatedButton>
              </Link>

              <Link to="/departments" className="w-full sm:w-auto">
                <AnimatedButton primary={false}>
                  Explore Services
                </AnimatedButton>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-5 lg:mt-16 lg:grid-cols-4 lg:gap-6">
              <TrustBadge
                icon={<FaUsers />}
                value={5000}
                suffix="+"
                label="Patients"
              />

              <TrustBadge
                icon={<FaUserMd />}
                value={15}
                suffix="+"
                label="Doctors"
              />

              <TrustBadge
                icon={<FaHospital />}
                value={15}
                suffix="+"
                label="Departments"
              />

              <TrustBadge
                icon={<FaStar />}
                value={5}
                label="Rating"
              />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="relative flex items-center justify-center"
          >
            {/* Glow */}
            <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]" />

            {/* Doctor */}
            <motion.img
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="/doctor.webp"
              alt="Doctor"
              className="relative z-20 w-full max-w-[260px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,.45)] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[500px] xl:max-w-[560px]"
            />

            {/* Floating Cards */}
            <FloatingCard
              title="Online Consultation"
              subtitle="Consult our experts from home."
              icon={<FaVideo />}
              className="top-4 -left-4 lg:-left-16"
            />

            <FloatingCard
              title="Emergency Care"
              subtitle="24×7 Medical Assistance"
              icon={<FaAmbulance />}
              className="top-24 -right-2 lg:-right-10"
            />

            <FloatingCard
              title="NABL Certified Lab"
              subtitle="Fast & Accurate Reports"
              icon={<FaFlask />}
              className="bottom-24 -left-4 lg:-left-20"
            />

            <FloatingCard
              title="Experienced Doctors"
              subtitle="15+ Medical Specialists"
              icon={<FaUserMd />}
              className="bottom-6 right-0 lg:-right-8"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent sm:h-28 lg:h-36" />
    </section>
  );
}

