import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";
import { reviews } from "./reviewsData";

export default function PatientReviews() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >

          <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
            Patient Reviews
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081A33]">
            What Our Patients Say
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-8">
            The trust of our patients is our greatest achievement.
            Here's what they have to say about their experience.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}

        </div>

      </div>

    </section>
  );
}