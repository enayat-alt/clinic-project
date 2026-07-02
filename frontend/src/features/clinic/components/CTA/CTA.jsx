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
    <section className="relative overflow-hidden py-16 md:py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#081A33] via-[#102B52] to-[#163A63]" />

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <span className="uppercase tracking-[4px] text-cyan-300 font-semibold">
            BOOK YOUR APPOINTMENT
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
            Your Health Deserves
            <br />
            The Best Care
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-8">
            Schedule your appointment today and receive trusted healthcare
            from Odisha Polyclinic. Our experienced doctor is ready to help
            you and your family.
          </p>

        </motion.div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
        >

          <Link
            to="/appointment"
            className="rounded-2xl bg-white px-8 py-4 text-center font-semibold text-[#081A33] transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <FaCalendarCheck className="inline mr-2" />
            Book Appointment
          </Link>

          <a
            href="https://wa.me/919124508591"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-green-500 px-8 py-4 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-green-600 hover:shadow-2xl"
          >
            <FaWhatsapp className="inline mr-2" />
            Chat on WhatsApp
          </a>

        </motion.div>

        {/* Features */}

        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">

          <CTAFeature
            icon={<FaUserMd />}
            title="Experienced Doctor"
          />

          <CTAFeature
            icon={<FaClock />}
            title="Quick Appointment"
          />

          <CTAFeature
            icon={<FaShieldAlt />}
            title="Trusted Healthcare"
          />

        </div>

      </div>

    </section>
  );
}