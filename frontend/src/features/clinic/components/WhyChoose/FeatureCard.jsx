

import { motion } from "framer-motion";

export default function FeatureCard({ icon, count, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="flex h-[200px] w-[180px] shrink-0 flex-col items-start justify-between rounded-2xl bg-white p-4 shadow-xs font-jakarta border border-slate-100/80"
    >
      {/* Top Icon Area */}
      <div className="flex h-12 w-full items-center justify-center text-3xl text-[#0F8A79]">
        {icon}
      </div>

      {/* Content Area */}
      <div className="w-full">
        {/* Highlight Count Number */}
        <h3 className="text-base font-bold text-[#0F8A79] tracking-tight">
          {count || title}
        </h3>

        {/* Description Text */}
        <p className="mt-1 text-[11px] font-normal leading-snug text-slate-600 line-clamp-3">
          {description}
        </p>
      </div>
    </motion.div>
  );
}