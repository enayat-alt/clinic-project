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
    <section className="bg-[#F8FAFC] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
              MEET OUR DOCTOR
            </span>

            <h2 className="text-5xl font-bold text-[#081A33] mt-5 leading-tight">
              Compassionate Healthcare
              <br />
              From A Trusted Expert
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
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

            <div className="flex items-center gap-2 mt-6">

              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />

              <span className="ml-2 text-slate-600">
                4.9 (500+ Reviews)
              </span>

            </div>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/appointment"
                className="rounded-xl bg-[#081A33] px-8 py-4 text-white font-semibold hover:bg-blue-700 transition"
              >
                <FaCalendarAlt className="inline mr-2" />
                Book Appointment
              </Link>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-green-500 px-8 py-4 text-white font-semibold hover:bg-green-600 transition"
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
              className="relative z-10 mx-auto w-[420px]"
            />

            <div className="absolute -left-8 top-12 space-y-5">

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

            <div className="absolute -right-8 bottom-12">

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