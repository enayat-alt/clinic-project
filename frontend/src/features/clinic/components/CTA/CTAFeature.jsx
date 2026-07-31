

import { motion } from "framer-motion";

export default function CTAFeature({ icon, title }) {
  return (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.01,
      }}
      transition={{
        duration: 0.2,
      }}
      className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs font-jakarta"
    >
      {/* Icon Badge Container */}
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs text-[#0F4C81]">
        {icon}
      </div>

      {/* Feature Title */}
      <h4 className="text-xs font-semibold text-[#1E293B] tracking-tight">
        {title}
      </h4>
    </motion.div>
  );
}