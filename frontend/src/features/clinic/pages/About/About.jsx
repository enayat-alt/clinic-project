

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

  return (
    <main className="bg-white text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#081A33] pt-28 pb-20 md:pt-36 md:pb-24 text-white">
        {/* Subtle Ambient Glows */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full border border-white/10 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-sm">
              Odisha Polyclinic
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              About Our Clinic
            </h1>

            <p className="mt-4 mx-auto max-w-2xl text-base font-normal tracking-tight text-slate-300 sm:text-lg leading-relaxed">
              Trusted healthcare services dedicated to improving the health and
              well-being of individuals and families across Odisha.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Main Narrative Block */}
          <div className="mb-16 max-w-3xl">
            <span className="inline-block rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#0F4C81]">
              Welcome To Odisha Polyclinic
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#081A33] leading-tight">
              Your Trusted Healthcare Partner
            </h2>

            <p className="mt-5 text-base sm:text-lg font-normal tracking-tight text-slate-600 leading-relaxed">
              When it comes to health, trust and quality care are essential. At
              Odisha Polyclinic, we are committed to providing comprehensive,
              compassionate, and patient-centered healthcare services to
              individuals and families in our community.
            </p>

            <p className="mt-4 text-base sm:text-lg font-normal tracking-tight text-slate-600 leading-relaxed">
              We believe that every patient deserves personalized attention,
              accurate diagnosis, and effective treatment. Our experienced
              healthcare professionals work together to ensure that you receive
              the highest standard of medical care in a comfortable and
              supportive environment.
            </p>
          </div>

          {/* Healthcare Services Grid */}
          <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 sm:p-10 md:p-12 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200/60">
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-slate-400">
                  COMPREHENSIVE CARE
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[#081A33]">
                  Our Healthcare Services
                </h3>
              </div>
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#0F4C81] hover:text-[#081A33] transition"
              >
                <span>Book a service</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>

            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md flex items-center gap-3"
                >
                  <FaCheckCircle className="text-emerald-500 flex-shrink-0 text-sm group-hover:scale-110 transition-transform" />
                  <p className="text-xs sm:text-sm font-semibold tracking-tight text-slate-700 group-hover:text-[#081A33]">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {/* Mission Card */}
            <div className="rounded-3xl bg-[#081A33] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-2xl" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                PURPOSE
              </span>
              <h3 className="mt-4 mb-3 text-2xl sm:text-3xl font-bold tracking-tight">
                Our Mission
              </h3>

              <p className="text-sm sm:text-base font-normal tracking-tight text-slate-300 leading-relaxed">
                To provide affordable, accessible, and high-quality healthcare
                services that improve the health and quality of life of every
                patient who walks through our doors.
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 text-slate-800 shadow-sm relative overflow-hidden">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0F4C81] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                ASPIRATION
              </span>
              <h3 className="mt-4 mb-3 text-2xl sm:text-3xl font-bold tracking-tight text-[#081A33]">
                Our Vision
              </h3>

              <p className="text-sm sm:text-base font-normal tracking-tight text-slate-600 leading-relaxed">
                To become Odisha's most trusted healthcare destination,
                recognized for excellence in patient care, medical expertise,
                and community well-being.
              </p>
            </div>
          </div>

          {/* Bottom Call to Action Block */}
          <div className="mt-20 rounded-3xl border border-slate-100 bg-slate-50/50 p-8 sm:p-12 text-center">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0F4C81] bg-blue-50/80 border border-blue-100 px-3.5 py-1 rounded-full">
              WE ARE HERE FOR YOU
            </span>

            <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#081A33]">
              Your Health Is Our Priority
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base font-normal tracking-tight text-slate-600 leading-relaxed">
              Whether you need a routine checkup, specialist consultation,
              diagnostic tests, or preventive healthcare, Odisha Polyclinic is
              here to support your health journey with compassionate,
              affordable, and expert medical care.
            </p>

            <div className="mt-8">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center rounded-2xl bg-[#081A33] px-8 py-4 text-xs sm:text-sm font-semibold tracking-wide text-white shadow-xl shadow-[#081A33]/15 transition-all duration-300 hover:bg-[#0F4C81] hover:shadow-2xl active:scale-[0.99]"
              >
                <FaCalendarCheck className="mr-2.5 h-4 w-4 text-cyan-300" />
                Book an Appointment Today
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}