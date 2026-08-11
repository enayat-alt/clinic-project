import {
  Activity,
  Baby,
  Bone,
  Brain,
  Eye,
  FlaskConical,
  Smile,
  Stethoscope,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

export default function Departments() {
  const services = [
    {
      icon: <Activity />,
      title: "Cardiology",
      description:
        "Comprehensive heart care with advanced diagnostics and treatment.",
      bgColor: "bg-[#D0E2FF]",
      textColor: "text-[#103B70]",
      circleBg: "bg-[#EBF2FF]",
    },
    {
      icon: <Smile />,
      title: "Dental Care",
      description:
        "Complete dental solutions for healthy smiles and oral hygiene.",
      bgColor: "bg-[#FCE2EC]",
      textColor: "text-[#701A33]",
      circleBg: "bg-[#FFF0F5]",
    },
    {
      icon: <Baby />,
      title: "Pediatrics",
      description:
        "Specialized healthcare for infants, children, and adolescents.",
      bgColor: "bg-[#FBF1C9]",
      textColor: "text-[#5E4E0A]",
      circleBg: "bg-[#FFFCE8]",
    },
    {
      icon: <Brain />,
      title: "Neurology",
      description:
        "Diagnosis and treatment of brain and nervous system disorders.",
      bgColor: "bg-[#E0D8F6]",
      textColor: "text-[#3B2570]",
      circleBg: "bg-[#F2EDFD]",
    },
    {
      icon: <Bone />,
      title: "Orthopedics",
      description:
        "Expert care for bones, joints, muscles, and sports injuries.",
      bgColor: "bg-[#D8E6FE]",
      textColor: "text-[#123875]",
      circleBg: "bg-[#EEF4FF]",
    },
    {
      icon: <Eye />,
      title: "Ophthalmology",
      description:
        "Advanced eye care and vision correction services.",
      bgColor: "bg-[#E3D5F7]",
      textColor: "text-[#421D70]",
      circleBg: "bg-[#F4ECFC]",
    },
    {
      icon: <FlaskConical />,
      title: "Diagnostics",
      description:
        "Accurate laboratory testing with fast and reliable reports.",
      bgColor: "bg-[#F7EBB8]",
      textColor: "text-[#524408]",
      circleBg: "bg-[#FFF9E6]",
    },
    {
      icon: <Stethoscope />,
      title: "General Medicine",
      description:
        "Primary healthcare and preventive medicine for all ages.",
      bgColor: "bg-[#D0E2FF]",
      textColor: "text-[#103B70]",
      circleBg: "bg-[#EBF2FF]",
    },
  ];

  return (
    <section className="bg-white py-12 font-sans antialiased md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0F4C81]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0F4C81]" />
            Our Services
          </div>

          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#1E293B] sm:text-3xl lg:text-4xl">
            Healthcare Services Designed Around You
          </h2>

          <p className="mt-3 text-xs font-normal leading-relaxed text-[#64748B] sm:text-sm">
            From routine checkups to specialized treatments, Odisha Polyclinic
            offers a wide range of healthcare services under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>

      </div>
    </section>
  );
}