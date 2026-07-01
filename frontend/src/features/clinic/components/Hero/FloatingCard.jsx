import { motion } from "framer-motion";

export default function FloatingCard({
  icon,
  title,
  subtitle,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ scale: 1.05, y: -8 }}
      className={`absolute hidden md:block ${className}`}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-56 rounded-3xl border border-white/20 bg-white/10 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:w-64"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-2xl text-cyan-300">
            {icon}
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            <p className="mt-1 text-sm text-gray-300">{subtitle}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}