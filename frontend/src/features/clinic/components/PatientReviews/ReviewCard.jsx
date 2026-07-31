
import { motion } from "framer-motion";
import { FaRegUser } from "react-icons/fa";

export default function ReviewCard({ review }) {
  // Safely extract text across common data property names
  const reviewText =
    review.comment ||
    review.text ||
    review.review ||
    review.content ||
    review.description ||
    "No review text provided.";

  // Safely extract author name
  const authorName = review.name || review.author || review.user || "Patient";

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="flex h-[210px] w-[260px] shrink-0 flex-col justify-between rounded-xl bg-white p-5 shadow-xs font-jakarta overflow-hidden"
    >
      {/* Review Text */}
      <div className="overflow-y-auto pr-1 scrollbar-none">
        <p className="text-[13px] font-normal leading-relaxed text-slate-700">
          "{reviewText}"
        </p>
      </div>

      {/* Footer Author & Date */}
      <div className="border-t border-slate-100 pt-3 flex items-center gap-1.5 text-xs text-slate-500 shrink-0">
        <FaRegUser className="text-slate-400 text-[11px] shrink-0" />
        <span className="font-semibold text-slate-800 truncate">
          {authorName}
        </span>
        {review.date && (
          <span className="text-slate-400 font-normal shrink-0 ml-auto text-[11px]">
            {review.date}
          </span>
        )}
      </div>
    </motion.div>
  );
}