
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaStar, FaChevronRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ReviewCard from "./ReviewCard";
import { reviews } from "./reviewsData";

export default function PatientReviews() {
  const scrollRef = useRef(null);

  const handleNextScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-12 md:py-16 antialiased font-jakarta">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }`}
      </style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Light Mint Container */}
        <div className="relative overflow-hidden rounded-2xl bg-[#E8F8F5] p-6 sm:p-10">
          
          {/* Top Rating Header */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-800">
            <FcGoogle className="text-base shrink-0" />
            <span className="font-bold text-slate-900">4.6 Stars</span>
            
            {/* Stars */}
            <div className="flex items-center text-amber-400 gap-0.5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              {/* Half star effect */}
              <div className="relative text-slate-300">
                <FaStar />
                <div className="absolute inset-0 overflow-hidden w-[50%] text-amber-400">
                  <FaStar />
                </div>
              </div>
            </div>

            <span className="text-slate-300 mx-1">|</span>
            <span className="text-slate-600 font-medium">
              7+ Lakhs Ratings & Reviews
            </span>
          </div>

          {/* Heading Row with Overlapping Avatars */}
          <div className="mt-5 flex items-center gap-3">
            {/* Overlapping User Avatars */}
            <div className="flex -space-x-2 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&auto=format&fit=crop&q=80"
                alt="Doctor avatar"
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                alt="User avatar"
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
              />
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-slate-900">
              <span className="text-[#0D8274]">Over 10 million happy users</span>{" "}
              Odisha Polyclinic
            </h2>
          </div>

          {/* Reviews Carousel Wrapper */}
          <div className="relative mt-8">
            {/* Giant Quotation Mark Watermark */}
            <div className="absolute -top-12 -left-2 select-none text-[120px] font-serif font-black leading-none text-[#C4ECE5] opacity-60 pointer-events-none">
              “
            </div>

            {/* Scrollable Container */}
            <div
              ref={scrollRef}
              className="relative z-10 flex w-full overflow-x-auto pb-2 scrollbar-none gap-4 scroll-smooth"
            >
              {reviews.map((review) => (
                <ReviewCard key={review.id || review.name} review={review} />
              ))}
            </div>

            {/* Right Arrow Navigation Button */}
            <button
              onClick={handleNextScroll}
              aria-label="Scroll next"
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-700/70 text-white shadow-md transition-all hover:bg-slate-800 active:scale-95"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}