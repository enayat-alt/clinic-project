
import { motion } from "framer-motion";

export default function ServiceCard({
  icon,
  title,
  bgColor = "bg-blue-100/70",
  textColor = "text-[#103B70]",
  circleBg = "bg-white/80",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`group relative flex h-48 w-32 shrink-0 flex-col justify-between overflow-hidden rounded-2xl p-3.5 transition-all duration-300 ${bgColor} font-jakarta cursor-pointer shadow-xs`}
    >
      {/* Title at the Top */}
      <h3 className={`text-xs font-bold tracking-tight ${textColor}`}>
        {title}
      </h3>

      {/* Centered Circular Background for React Icons */}
      <div className="flex flex-1 items-center justify-center">
        <div
          className={`flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 ${circleBg} shadow-xs`}
        >
          <div className={`text-2xl ${textColor}`}>
            {icon}
          </div>
        </div>
      </div>
    </motion.div>
  );
}