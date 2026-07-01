import { motion } from "framer-motion";

export default function CTAFeature({ icon, title }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-lg"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 text-xl">
        {icon}
      </div>

      <h4 className="font-semibold text-white">
        {title}
      </h4>
    </motion.div>
  );
}