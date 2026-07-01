import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function ServiceCard({
  icon,
  title,
  description,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="group relative overflow-hidden rounded-3xl bg-white p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative z-10">

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#081A33] text-2xl text-white transition duration-300 group-hover:rotate-6 sm:h-16 sm:w-16 sm:text-3xl">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-[#081A33] sm:text-2xl">
          {title}
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          {description}
        </p>

        <button className="mt-8 flex items-center gap-2 text-blue-700 font-semibold group-hover:gap-4 transition-all">
          Learn More
          <FaArrowRight />
        </button>

      </div>
    </motion.div>
  );
}