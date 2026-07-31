
import {
  FaUserMd,
  FaFlask,
  FaHeartbeat,
  FaHospital,
  FaClock,
} from "react-icons/fa";
import FeatureCard from "./FeatureCard";

export default function WhyChoose() {
  const trustStats = [
    { label: "100% NABL", sub: "Certified Labs" },
    { label: "50,000+", sub: "Happy Patients" },
    { label: "15 YEARS+", sub: "Medical Expertise" },
  ];

  const features = [
    {
      icon: <FaUserMd />,
      count: "50+",
      description: "Expert Doctors & Specialists",
    },
    {
      icon: <FaFlask />,
      count: "1,000+",
      description: "Diagnostic Tests & Scans Daily",
    },
    {
      icon: <FaHeartbeat />,
      count: "100%",
      description: "NABL & ISO Quality Standard",
    },
    {
      icon: <FaHospital />,
      count: "10+",
      description: "Specialized Departments",
    },
    {
      icon: <FaClock />,
      count: "24/7",
      description: "Emergency & Support Care",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 font-jakarta antialiased">
      {/* Plus Jakarta Sans Import */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }`}
      </style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] tracking-tight">
            Why trust Odisha Polyclinic?
          </h2>

          <p className="mt-2 text-xs sm:text-sm font-bold tracking-wider text-[#0F8A79] uppercase">
            # ONE OF ODISHA'S MOST TRUSTED HEALTHCARE PLATFORMS
          </p>
        </div>

        {/* Laurel Wreath Badges Header Row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {trustStats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-center">
              {/* Left Laurel Leaves */}
              <span className="text-2xl text-teal-300 opacity-80 select-none">🌿</span>
              
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#1E293B] tracking-tight">
                  {stat.label}
                </div>
                <div className="text-[11px] font-medium text-slate-500">
                  {stat.sub}
                </div>
              </div>

              {/* Right Laurel Leaves */}
              <span className="text-2xl text-teal-300 opacity-80 select-none scale-x-[-1]">🌿</span>
            </div>
          ))}
        </div>

        {/* Light Mint Background Outer Container */}
        <div className="mt-10 rounded-2xl bg-[#EAF7F5] p-4 sm:p-6">
          {/* Scrollable Single Line Horizontal Row */}
          <div className="w-full overflow-x-auto pb-2 scrollbar-none">
            <div className="flex flex-nowrap items-center justify-start md:justify-center gap-4">
              {features.map((item, index) => (
                <FeatureCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}