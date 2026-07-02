import { motion } from "framer-motion";
import {
  FaUserMd,
  FaAward,
  FaUsers,
  FaWhatsapp,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import InfoCard from "./InfoCard";

export default function FeaturedDoctor() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
              MEET OUR DOCTOR
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

              <p className="mt-2 text-blue-700 font-semibold">
                MBBS • MD • General Physician
              </p>

            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">

              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />

              <span className="ml-2 text-slate-600">
                4.9 (500+ Reviews)
              </span>

            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/appointment"
                className="rounded-xl bg-[#081A33] px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700 sm:px-8"
              >
                <FaCalendarAlt className="inline mr-2" />
                Book Appointment
              </Link>

              <a
                href="https://wa.me/919124508591"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-green-500 px-6 py-4 text-center font-semibold text-white transition hover:bg-green-600 sm:px-8"
              >
                <FaWhatsapp className="inline mr-2" />
                WhatsApp
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Glow */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

            </div>

            <img
              src="/doctor.png"
              alt="Doctor"
              className="relative z-10 mx-auto w-full max-w-[280px] object-contain sm:max-w-[360px] lg:max-w-[420px]"
            />

            <div className="absolute -left-2 top-4 space-y-3 sm:-left-8 sm:top-12 sm:space-y-5">

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

            <div className="absolute -right-2 bottom-4 sm:-right-8 sm:bottom-12">

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