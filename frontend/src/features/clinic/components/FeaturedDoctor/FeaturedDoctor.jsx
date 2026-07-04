
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaUserMd,
  FaAward,
  FaUsers,
  FaWhatsapp,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";

import InfoCard from "./InfoCard";

export default function FeaturedDoctor() {
  return (
    <section className="overflow-hidden bg-[#F8FAFC] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="font-semibold uppercase tracking-[4px] text-blue-700">
              Meet Our Doctor
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#081A33] sm:text-4xl lg:text-5xl">
              Compassionate Healthcare
              <br />
              From A Trusted Expert
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              Our lead physician is committed to providing compassionate,
              patient-focused healthcare with modern diagnostics and
              evidence-based treatment.
            </p>

            <div className="mt-10">
              <h3 className="text-3xl font-bold text-[#081A33]">
                Dr. Shaik Faraz Ahmmed
              </h3>

              <p className="mt-2 font-semibold text-blue-700">
                MBBS • MD • General Physician
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-1 lg:justify-start">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className="text-yellow-500"
                />
              ))}

              <span className="ml-2 text-slate-600">
                4.9 (500+ Reviews)
              </span>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="/appointment"
                className="rounded-xl bg-[#081A33] px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                <FaCalendarAlt className="mr-2 inline" />
                Book Appointment
              </Link>

              <a
                href="https://wa.me/919124508591"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-green-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-600"
              >
                <FaWhatsapp className="mr-2 inline" />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto flex w-full max-w-[700px] items-center justify-center"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[320px] w-[320px] rounded-full bg-blue-500/15 blur-[120px] sm:h-[420px] sm:w-[420px]" />
            </div>

            {/* Doctor */}
            <img
              src="/doctor.png"
              alt="Doctor"
              className="relative z-10 w-full max-w-[260px] object-contain sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]"
            />

            {/* Left Cards */}
            <div className="absolute left-0 top-6 z-20 hidden space-y-5 md:block lg:left-4">
              <InfoCard
                icon={<FaAward />}
                title="15+ Years"
                subtitle="Experience"
                delay={0.2}
              />

              <InfoCard
                icon={<FaUsers />}
                title="5000+"
                subtitle="Patients Treated"
                delay={0.4}
              />
            </div>

            {/* Right Card */}
            <div className="absolute bottom-8 right-0 z-20 hidden md:block lg:right-4">
              <InfoCard
                icon={<FaUserMd />}
                title="General Physician"
                subtitle="Available Today"
                delay={0.6}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}