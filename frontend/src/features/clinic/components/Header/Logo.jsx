
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";

export default function Logo({ scrolled }) {
  return (
    <Link to="/" className="flex items-center gap-3 select-none">
      {/* Logo Icon */}
      <motion.div
        whileHover={{
          rotate: 360,
          scale: 1.1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative"
      >
        {/* Glow */}
        <div
          className={`absolute inset-0 rounded-full blur-xl transition-all duration-300 ${
            scrolled
              ? "bg-cyan-400 opacity-40"
              : "bg-white opacity-30"
          }`}
        />

        {/* Logo */}
        <div
          className={`relative flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg transition-all duration-300 ${
            scrolled
              ? "bg-gradient-to-br from-[#0F4C81] to-[#081A33]"
              : "bg-white/20 backdrop-blur-md border border-white/20"
          }`}
        >
          <FaHeartbeat
            className={`text-xl transition-colors duration-300 ${
              scrolled ? "text-white" : "text-white"
            }`}
          />
        </div>
      </motion.div>

      {/* Text */}
      <div className="leading-tight">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-2xl font-extrabold tracking-wide transition-colors duration-300 ${
            scrolled ? "text-[#081A33]" : "text-white"
          }`}
        >
          Odisha
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`text-xs uppercase tracking-[4px] transition-colors duration-300 ${
            scrolled ? "text-slate-500" : "text-white/70"
          }`}
        >
          POLYCLINIC
        </motion.p>
      </div>
    </Link>
  );
}