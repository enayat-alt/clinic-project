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
      className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-700 mb-6">
        {icon}
      </div>

      <h3 className="text-4xl font-bold text-[#081A33]">
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