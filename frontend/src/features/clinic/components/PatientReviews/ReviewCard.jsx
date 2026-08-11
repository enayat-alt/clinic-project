import { FaRegUser } from "react-icons/fa";

export default function ReviewCard({ review }) {
  const reviewText =
    review.comment ||
    review.text ||
    review.review ||
    review.content ||
    review.description ||
    "No review text provided.";

  const authorName =
    review.name ||
    review.author ||
    review.user ||
    "Patient";

  return (
    <div
      className="
        review-card
        flex
        h-[210px]
        w-[260px]
        shrink-0
        flex-col
        justify-between
        overflow-hidden
        rounded-xl
        bg-white
        p-5
        font-jakarta
        shadow-xs
      "
    >
      {/* Review Text */}
      <div className="scrollbar-none overflow-y-auto pr-1">
        <p className="text-[13px] font-normal leading-relaxed text-slate-700">
          "{reviewText}"
        </p>
      </div>

      {/* Footer */}
      <div className="flex shrink-0 items-center gap-1.5 border-t border-slate-100 pt-3 text-xs text-slate-500">
        <FaRegUser className="shrink-0 text-[11px] text-slate-400" />

        <span className="truncate font-semibold text-slate-800">
          {authorName}
        </span>

        {review.date && (
          <span className="ml-auto shrink-0 text-[11px] font-normal text-slate-400">
            {review.date}
          </span>
        )}
      </div>
    </div>
  );
}