
import { motion } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaUserCircle,
} from "react-icons/fa";

export default function ReviewCard({ review }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all hover:shadow-2xl sm:p-8"
    >
      <FaQuoteLeft className="mb-5 text-3xl text-[#0F4C81]" />

      <p className="italic leading-8 text-slate-600">
        "{review.review}"
      </p>

      <div className="mt-8 flex items-center gap-4">
        {/* Avatar */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0F4C81] to-[#38BDF8] shadow-md">
          <FaUserCircle className="text-4xl text-white" />
        </div>

        {/* User Info */}
        <div className="flex-1">
          <h4 className="font-bold text-[#081A33]">
            {review.name}
          </h4>

          <p className="text-sm text-slate-500">
            {review.location}
          </p>

          <div className="mt-2 flex gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <FaStar
                key={i}
                className="text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}