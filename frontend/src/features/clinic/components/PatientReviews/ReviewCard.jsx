import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

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
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl"
    >
      <FaQuoteLeft className="text-3xl text-blue-600 mb-5" />

      <p className="leading-8 text-slate-600 italic">
        "{review.review}"
      </p>

      <div className="flex items-center gap-4 mt-8">

        <img
          src={review.image}
          alt={review.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
        />

        <div>

          <h4 className="font-bold text-[#081A33]">
            {review.name}
          </h4>

          <p className="text-sm text-slate-500">
            {review.location}
          </p>

          <div className="flex mt-2">

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