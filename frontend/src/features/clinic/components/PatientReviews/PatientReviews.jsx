import { useRef } from "react";
import { FaStar, FaChevronRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import ReviewCard from "./ReviewCard";
import { reviews } from "./reviewsData";

export default function PatientReviews() {
  const scrollRef = useRef(null);

  const handleNextScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 280,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-12 font-jakarta antialiased md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#E8F8F5] p-6 sm:p-10">

          {/* Rating Header */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-800">
            <FcGoogle className="shrink-0 text-base" />

            <span className="font-bold text-slate-900">
              4.6 Stars
            </span>

            {/* Stars */}
            <div className="flex items-center gap-0.5 text-amber-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

              {/* Half Star */}
              <div className="relative text-slate-300">
                <FaStar />

                <div className="absolute inset-0 w-1/2 overflow-hidden text-amber-400">
                  <FaStar />
                </div>
              </div>
            </div>

            <span className="mx-1 text-slate-300">
              |
            </span>

            <span className="font-medium text-slate-600">
              7+ Lakhs Ratings & Reviews
            </span>
          </div>

          {/* Heading */}
          <div className="mt-5 flex items-center gap-3">

            {/* Avatars */}
            <div className="flex shrink-0 -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&auto=format&fit=crop&q=80"
                alt="Doctor avatar"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                alt="User avatar"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
              />
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
              <span className="text-[#0D8274]">
                Over 10 million happy users
              </span>{" "}
              Odisha Polyclinic
            </h2>
          </div>

          {/* Reviews */}
          <div className="relative mt-8">

            {/* Quote */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-2 -top-12 select-none font-serif text-[120px] font-black leading-none text-[#C4ECE5] opacity-60"
            >
              “
            </div>

            {/* Scroll Container */}
            <div
              ref={scrollRef}
              className="scrollbar-none relative z-10 flex w-full gap-4 overflow-x-auto scroll-smooth pb-2"
            >
              {reviews.map((review) => (
                <ReviewCard
                  key={review.id || review.name}
                  review={review}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNextScroll}
              aria-label="Scroll next"
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-700/70 text-white shadow-md transition-colors hover:bg-slate-800 active:scale-95"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}