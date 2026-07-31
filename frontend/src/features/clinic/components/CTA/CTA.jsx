
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCalendarCheck,
  FaWhatsapp,
  FaClock,
  FaUserMd,
  FaShieldAlt,
} from "react-icons/fa";

import CTAFeature from "./CTAFeature";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 font-sans antialiased">
      {/* Plus Jakarta Sans Font Style */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }`}
      </style>

      {/* Subtle Background Glows for Depth on White */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-50/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-emerald-50/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 font-jakarta sm:px-6 lg:px-8">
        
        {/* Main Content Box with Light Border */}
        <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 text-center shadow-sm backdrop-blur-sm sm:p-12">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {/* Pill Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0F4C81]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0F4C81] animate-pulse" />
              Book Your Appointment
            </span>

            {/* Headline - Modern Compact Sizing */}
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#1E293B] sm:text-3xl lg:text-4xl leading-tight">
              Your Health Deserves <br className="hidden sm:inline" />
              The Best Care
            </h2>

            {/* Paragraph - Clean Muted Gray */}
            <p className="mx-auto mt-3 max-w-2xl text-xs font-normal leading-relaxed text-[#64748B] sm:text-sm">
              Schedule your appointment today and receive trusted healthcare from Odisha Polyclinic. Our experienced doctor is ready to help you and your family.
            </p>
          </motion.div>

          {/* Small Modern Buttons with Original Colors */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2.5"
          >
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center rounded-xl bg-[#081A33] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-[#081A33]/15 transition-all duration-300 hover:bg-[#0F4C81] hover:shadow-lg active:scale-[0.98]"
            >
              <FaCalendarCheck className="mr-1.5 h-3 w-3" />
              Book Appointment
            </Link>

            <a
              href="https://wa.me/919124508591"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/15 transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg active:scale-[0.98]"
            >
              <FaWhatsapp className="mr-1.5 h-3.5 w-3.5" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Features Grid */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <CTAFeature
              icon={<FaUserMd className="text-[#0F4C81]" />}
              title="Experienced Doctor"
            />

            <CTAFeature
              icon={<FaClock className="text-[#0F4C81]" />}
              title="Quick Appointment"
            />

            <CTAFeature
              icon={<FaShieldAlt className="text-[#0F4C81]" />}
              title="Trusted Healthcare"
            />
          </div>

        </div>

      </div>
    </section>
  );
}