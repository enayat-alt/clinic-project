import { motion } from "framer-motion";
import {
  FaUsers,
  FaUserMd,
  FaHospital,
  FaAward,
} from "react-icons/fa";

import StatCard from "./StatCard";

export default function Statistics() {
  return (
    <section className="bg-[#F8FAFC] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="text-blue-700 font-semibold uppercase tracking-widest">
            WHY CHOOSE US
          </span>

          <h2 className="text-5xl font-bold mt-4 text-[#081A33]">
            Trusted By Thousands Of Patients
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            We combine compassionate healthcare, experienced doctors,
            advanced diagnostics, and modern medical facilities to provide
            exceptional care for every patient.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

          <StatCard
            icon={<FaUsers />}
            value={5000}
            suffix="+"
            title="Happy Patients"
            description="Thousands of satisfied patients trust Odisha Polyclinic every year."
            delay={0.1}
          />

          <StatCard
            icon={<FaUserMd />}
            value={15}
            suffix="+"
            title="Expert Doctors"
            description="Highly experienced specialists across multiple medical departments."
            delay={0.2}
          />

          <StatCard
            icon={<FaHospital />}
            value={15}
            suffix="+"
            title="Departments"
            description="Comprehensive healthcare services under one roof."
            delay={0.3}
          />

          <StatCard
            icon={<FaAward />}
            value={98}
            suffix="%"
            title="Patient Satisfaction"
            description="Delivering quality healthcare with compassion and excellence."
            delay={0.4}
          />

        </div>

      </div>

    </section>
  );
}