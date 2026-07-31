
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function TrustBadge({
  value,
  suffix = "",
  label,
  icon,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{
        y: -5,
      }}
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-white/15
        bg-white/10
        backdrop-blur-xl
        p-4
        shadow-lg
        transition-all
        duration-300
        hover:bg-white/15
        min-h-[150px]
      "
    >
      {/* Icon */}
      <div
        className="
          mb-4
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-blue-500/20
          text-2xl
          text-cyan-300
        "
      >
        {icon}
      </div>

      {/* Number */}
      <h3 className="text-2xl font-bold text-white sm:text-3xl">
        <CountUp end={value} duration={2} />
        {suffix}
      </h3>

      {/* Label */}
      <p className="mt-2 text-center text-sm font-medium text-slate-300 sm:text-base">
        {label}
      </p>
    </motion.div>
  );
}