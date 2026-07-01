import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function StatCard({
  icon,
  value,
  suffix = "",
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
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl sm:p-8"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-700 sm:h-16 sm:w-16 sm:text-3xl">
        {icon}
      </div>

      <h3 className="text-3xl font-bold text-[#081A33] sm:text-4xl">
        <CountUp end={value} duration={2.5} />
        {suffix}
      </h3>

      <h4 className="mt-3 text-xl font-semibold text-slate-800">
        {title}
      </h4>

      <p className="mt-2 text-slate-500 leading-7">
        {description}
      </p>
    </motion.div>
  );
}