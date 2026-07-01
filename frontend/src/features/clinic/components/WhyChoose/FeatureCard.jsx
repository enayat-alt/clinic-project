import { motion } from "framer-motion";

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -8,
      }}
      className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-2xl transition-all"
    >
      <div className="flex gap-5 items-start">

        <div className="w-14 h-14 rounded-2xl bg-[#081A33] text-white flex items-center justify-center text-2xl flex-shrink-0">
          {icon}
        </div>

        <div>

          <h3 className="text-xl font-semibold text-[#081A33]">
            {title}
          </h3>

          <p className="mt-2 text-slate-600 leading-7">
            {description}
          </p>

        </div>

      </div>
    </motion.div>
  );
}