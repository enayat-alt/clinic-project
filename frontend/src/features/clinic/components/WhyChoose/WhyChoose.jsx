import { motion } from "framer-motion";

import {
  FaUserMd,
  FaHeartbeat,
  FaFlask,
  FaHospital,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";

export default function WhyChoose() {

  const features = [
    {
      icon: <FaUserMd />,
      title: "Experienced Doctors",
      description:
        "Highly qualified specialists providing expert diagnosis and treatment.",
    },
    {
      icon: <FaFlask />,
      title: "Advanced Diagnostics",
      description:
        "Modern laboratory and diagnostic services with fast, accurate reports.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Comprehensive Care",
      description:
        "From preventive care to specialized treatments—all under one roof.",
    },
    {
      icon: <FaHospital />,
      title: "Modern Infrastructure",
      description:
        "Comfortable patient experience with advanced medical facilities.",
    },
    {
      icon: <FaClock />,
      title: "Quick Appointments",
      description:
        "Easy online appointment booking with minimal waiting time.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted Healthcare",
      description:
        "Committed to safe, ethical, and patient-centered medical care.",
    },
  ];

  return (
    <section className="py-28 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-widest text-blue-700 font-semibold">
              WHY CHOOSE US
            </span>

            <h2 className="text-5xl font-bold mt-5 text-[#081A33] leading-tight">
              Exceptional Healthcare with Compassion & Excellence
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Odisha Polyclinic combines experienced doctors, advanced
              diagnostics, and patient-focused care to deliver quality
              healthcare services for every family.
            </p>

            <motion.img
              whileHover={{
                scale: 1.03,
              }}
              src="/doctor-team.png"
              alt="Doctor Team"
              className="mt-12 rounded-3xl shadow-2xl"
            />

          </motion.div>

          {/* Right */}

          <div className="grid gap-6">

            {features.map((item, index) => (
              <FeatureCard
                key={item.title}
                {...item}
                delay={index * 0.1}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}