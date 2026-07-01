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
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-2xl
        px-5
        py-4
        shadow-xl
      "
    >
      <div className="flex items-center gap-4">

        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-blue-500/20
            flex
            items-center
            justify-center
            text-cyan-300
            text-xl
          "
        >
          {icon}
        </div>

        <div>

          <h3 className="text-2xl font-bold text-white">

            <CountUp
              end={value}
              duration={2}
            />

            {suffix}

          </h3>

          <p className="text-gray-300 text-sm">
            {label}
          </p>

        </div>

      </div>
    </motion.div>
  );
}