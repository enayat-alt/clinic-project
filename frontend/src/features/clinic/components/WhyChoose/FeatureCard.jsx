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
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition-all hover:shadow-2xl sm:p-6"
    >
      <div className="flex gap-5 items-start">

        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#081A33] text-xl text-white sm:h-14 sm:w-14 sm:text-2xl">
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