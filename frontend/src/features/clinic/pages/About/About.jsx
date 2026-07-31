
import { Link } from "react-router-dom";
import { FaCheckCircle, FaCalendarCheck, FaArrowRight } from "react-icons/fa";

export default function About() {
  const services = [
    "Diabetes & Thyroid Management",
    "Blood Pressure Monitoring",
    "Skin & Hair Treatments",
    "Joint & Nerve Pain Care",
    "Headache & Migraine Treatment",
    "Digestive Disorders",
    "Fever & Infection Management",
    "Mental Health Consultations",
    "Women's Health Services",
    "Sexual Health Care",
    "Urine & Kidney Disorders",
    "Weight Loss Management",
    "Pre-Marriage Health Tests",
    "General Physician Consultation",
    "Preventive Health Checkups",
  ];

  // Soft pastel color themes matching the reference image palette
  const cardColorThemes = [
    {
      bg: "bg-blue-100/70 hover:bg-blue-100",
      border: "border-blue-200/80",
      text: "text-blue-900",
      icon: "text-blue-600",
      badgeBg: "bg-white/80",
    },
    {
      bg: "bg-pink-100/70 hover:bg-pink-100",
      border: "border-pink-200/80",
      text: "text-pink-900",
      icon: "text-pink-600",
      badgeBg: "bg-white/80",
    },
    {
      bg: "bg-purple-100/70 hover:bg-purple-100",
      border: "border-purple-200/80",
      text: "text-purple-900",
      icon: "text-purple-600",
      badgeBg: "bg-white/80",
    },
    {
      bg: "bg-amber-100/70 hover:bg-amber-100",
      border: "border-amber-200/80",
      text: "text-amber-900",
      icon: "text-amber-600",
      badgeBg: "bg-white/80",
    },
    {
      bg: "bg-teal-100/70 hover:bg-teal-100",
      border: "border-teal-200/80",
      text: "text-teal-900",
      icon: "text-teal-600",
      badgeBg: "bg-white/80",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen text-slate-800 antialiased pt-24 md:pt-28">
      {/* About Content Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Main Narrative Block */}
          <div className="mb-14 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2a687d] via-teal-600 to-emerald-500 px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-md shadow-teal-500/20 border border-white/20 mb-3">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              Welcome To Odisha Polyclinic
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              Your Trusted Healthcare Partner
            </h2>

            <p className="mt-4 text-sm sm:text-base font-normal tracking-tight text-slate-600 leading-relaxed">
              When it comes to health, trust and quality care are essential. At
              Odisha Polyclinic, we are committed to providing comprehensive,
              compassionate, and patient-centered healthcare services to
              individuals and families in our community.
            </p>

            <p className="mt-3 text-sm sm:text-base font-normal tracking-tight text-slate-600 leading-relaxed">
              We believe that every patient deserves personalized attention,
              accurate diagnosis, and effective treatment. Our experienced
              healthcare professionals work together to ensure that you receive
              the highest standard of medical care in a comfortable and
              supportive environment.
            </p>
          </div>

          {/* Healthcare Services Grid Container */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-medium tracking-wide text-slate-400 uppercase">
                  Comprehensive Care
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  Our Healthcare Services
                </h3>
              </div>
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#2a687d] hover:underline underline-offset-4 transition"
              >
                <span>Book a service</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>

            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const theme = cardColorThemes[index % cardColorThemes.length];
                return (
                  <div
                    key={service}
                    className={`group rounded-2xl border ${theme.border} ${theme.bg} p-4 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex items-center gap-3`}
                  >
                    <div
                      className={`p-2 rounded-full ${theme.badgeBg} shadow-2xs flex-shrink-0`}
                    >
                      <FaCheckCircle
                        className={`${theme.icon} text-sm group-hover:scale-110 transition-transform`}
                      />
                    </div>
                    <p
                      className={`text-xs sm:text-sm font-bold tracking-tight ${theme.text}`}
                    >
                      {service}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mission & Vision Cards (Standard White Cards) */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Mission Card */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-medium tracking-wide text-[#2a687d] bg-[#2a687d]/10 px-3 py-1 rounded-full border border-[#2a687d]/20 mb-3">
                  PURPOSE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
                  Our Mission
                </h3>

                <p className="text-sm sm:text-base font-normal tracking-tight text-slate-600 leading-relaxed">
                  To provide affordable, accessible, and high-quality healthcare
                  services that improve the health and quality of life of every
                  patient who walks through our doors.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-medium tracking-wide text-[#2a687d] bg-[#2a687d]/10 px-3 py-1 rounded-full border border-[#2a687d]/20 mb-3">
                  ASPIRATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
                  Our Vision
                </h3>

                <p className="text-sm sm:text-base font-normal tracking-tight text-slate-600 leading-relaxed">
                  To become Odisha's most trusted healthcare destination,
                  recognized for excellence in patient care, medical expertise,
                  and community well-being.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Call to Action Block */}
          <div className="mt-16 rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 text-center shadow-xs">
            <span className="inline-block text-xs font-medium tracking-wide text-[#2a687d] bg-[#2a687d]/10 border border-[#2a687d]/20 px-3.5 py-1 rounded-full mb-3">
              WE ARE HERE FOR YOU
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Your Health Is Our Priority
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base font-normal tracking-tight text-slate-600 leading-relaxed">
              Whether you need a routine checkup, specialist consultation,
              diagnostic tests, or preventive healthcare, Odisha Polyclinic is
              here to support your health journey with compassionate,
              affordable, and expert medical care.
            </p>

            <div className="mt-8">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center rounded-xl bg-[#2a687d] px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-tight text-white hover:bg-[#1c4b5c] transition shadow-xs"
              >
                <FaCalendarCheck className="mr-2.5 h-4 w-4 text-white" />
                Book an Appointment Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
