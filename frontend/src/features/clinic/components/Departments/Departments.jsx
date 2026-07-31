
import { motion } from "framer-motion";

import {
  FaHeartbeat,
  FaTooth,
  FaBaby,
  FaBrain,
  FaBone,
  FaEye,
  FaFlask,
  FaUserMd,
} from "react-icons/fa";

import ServiceCard from "./ServiceCard";

export default function Departments() {
  const services = [
    {
      icon: <FaHeartbeat />,
      title: "Cardiology",
      description: "Comprehensive heart care with advanced diagnostics and treatment.",
      bgColor: "bg-[#D0E2FF]",
      textColor: "text-[#103B70]",
      circleBg: "bg-[#EBF2FF]",
    },
    {
      icon: <FaTooth />,
      title: "Dental Care",
      description: "Complete dental solutions for healthy smiles and oral hygiene.",
      bgColor: "bg-[#FCE2EC]",
      textColor: "text-[#701A33]",
      circleBg: "bg-[#FFF0F5]",
    },
    {
      icon: <FaBaby />,
      title: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents.",
      bgColor: "bg-[#FBF1C9]",
      textColor: "text-[#5E4E0A]",
      circleBg: "bg-[#FFFCE8]",
    },
    {
      icon: <FaBrain />,
      title: "Neurology",
      description: "Diagnosis and treatment of brain and nervous system disorders.",
      bgColor: "bg-[#E0D8F6]",
      textColor: "text-[#3B2570]",
      circleBg: "bg-[#F2EDFD]",
    },
    {
      icon: <FaBone />,
      title: "Orthopedics",
      description: "Expert care for bones, joints, muscles, and sports injuries.",
      bgColor: "bg-[#D8E6FE]",
      textColor: "text-[#123875]",
      circleBg: "bg-[#EEF4FF]",
    },
    {
      icon: <FaEye />,
      title: "Ophthalmology",
      description: "Advanced eye care and vision correction services.",
      bgColor: "bg-[#E3D5F7]",
      textColor: "text-[#421D70]",
      circleBg: "bg-[#F4ECFC]",
    },
    {
      icon: <FaFlask />,
      title: "Diagnostics",
      description: "Accurate laboratory testing with fast and reliable reports.",
      bgColor: "bg-[#F7EBB8]",
      textColor: "text-[#524408]",
      circleBg: "bg-[#FFF9E6]",
    },
    {
      icon: <FaUserMd />,
      title: "General Medicine",
      description: "Primary healthcare and preventive medicine for all ages.",
      bgColor: "bg-[#D0E2FF]",
      textColor: "text-[#103B70]",
      circleBg: "bg-[#EBF2FF]",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 font-sans antialiased">
      {/* Plus Jakarta Sans Import */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }`}
      </style>

      <div className="mx-auto max-w-7xl px-4 font-jakarta sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0F4C81]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0F4C81] animate-pulse" />
            Our Services
          </div>

          {/* Heading - Modern Tight Typography */}
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#1E293B] sm:text-3xl lg:text-4xl leading-tight">
            Healthcare Services Designed Around You
          </h2>

          {/* Subtitle - Clean muted text */}
          <p className="mt-3 text-xs leading-relaxed text-[#64748B] sm:text-sm font-normal">
            From routine checkups to specialized treatments, Odisha Polyclinic offers a wide range of healthcare services under one roof.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.04}
            />
          ))}
        </div>
      </div>
    </section>
  );
}