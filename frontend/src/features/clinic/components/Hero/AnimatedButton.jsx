import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function AnimatedButton({
  children,
  icon = true,
  primary = true,
  className = "",
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={`group relative w-full overflow-hidden rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-500 sm:w-auto sm:px-8 sm:py-4 sm:text-base ${className} ${
        primary
          ? "bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white shadow-[0_15px_40px_rgba(37,99,235,.35)]"
          : "border border-white/20 bg-white/10 text-white backdrop-blur-xl"
      }`}
      {...props}
    >
      <span
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
      />

      {primary && (
        <span className="absolute inset-0 rounded-2xl bg-cyan-400 opacity-0 blur-xl transition group-hover:opacity-40" />
      )}

      <span className="relative flex items-center justify-center gap-3">
        {children}

        {icon && (
          <motion.span initial={{ x: 0 }} whileHover={{ x: 6 }} transition={{ duration: 0.3 }}>
            <FaArrowRight />
          </motion.span>
        )}
      </span>
    </motion.button>
  );
}