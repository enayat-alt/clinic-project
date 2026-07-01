import { motion } from "framer-motion";

export default function InfoCard({
  icon,
  title,
  subtitle,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:gap-4 sm:p-5"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#081A33] text-xl text-white sm:h-14 sm:w-14 sm:text-2xl">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-[#081A33]">{title}</h4>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
    </motion.div>
  );
}