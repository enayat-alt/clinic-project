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
    },
    {
      icon: <FaTooth />,
      title: "Dental Care",
      description: "Complete dental solutions for healthy smiles and oral hygiene.",
    },
    {
      icon: <FaBaby />,
      title: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents.",
    },
    {
      icon: <FaBrain />,
      title: "Neurology",
      description: "Diagnosis and treatment of brain and nervous system disorders.",
    },
    {
      icon: <FaBone />,
      title: "Orthopedics",
      description: "Expert care for bones, joints, muscles, and sports injuries.",
    },
    {
      icon: <FaEye />,
      title: "Ophthalmology",
      description: "Advanced eye care and vision correction services.",
    },
    {
      icon: <FaFlask />,
      title: "Diagnostics",
      description: "Accurate laboratory testing with fast and reliable reports.",
    },
    {
      icon: <FaUserMd />,
      title: "General Medicine",
      description: "Primary healthcare and preventive medicine for all ages.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="text-blue-700 uppercase tracking-widest font-semibold">
            OUR SERVICES
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#081A33] sm:text-4xl lg:text-5xl">
            Healthcare Services Designed Around You
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            From routine checkups to specialized treatments, Odisha Polyclinic
            offers a wide range of healthcare services under one roof.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
            />
          ))}

        </div>

      </div>

    </section>
  );
}