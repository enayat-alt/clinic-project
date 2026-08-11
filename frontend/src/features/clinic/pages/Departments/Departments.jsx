

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserNurse,
  FaCheckCircle,
  FaStar,
  FaShieldAlt,
  FaClock,
  FaHeartbeat,
  FaPhoneAlt,
} from "react-icons/fa";

const departments = [
  {
    title: "Physiotherapy",
    description:
      "Personalized rehabilitation, pain management, post-surgical recovery, and mobility improvement programs delivered by experienced physiotherapists.",
  },
  {
    title: "General Medicine",
    description:
      "Comprehensive diagnosis, treatment, preventive care, and routine health checkups for patients of all age groups.",
  },
  {
    title: "Chest Medicine (Pulmonologist)",
    description:
      "Expert diagnosis and treatment for asthma, COPD, pneumonia, lung infections, allergies, and other respiratory disorders.",
  },
  {
    title: "Gastrology",
    description:
      "Specialized care for digestive disorders, acidity, ulcers, liver diseases, constipation, and gastrointestinal conditions.",
  },
  {
    title: "Diabetes / Thyroid Specialist",
    description:
      "Advanced management of diabetes, thyroid disorders, hormonal imbalance, and lifestyle-related metabolic diseases.",
  },
  {
    title: "Skin Department",
    description:
      "Treatment for acne, eczema, psoriasis, allergies, fungal infections, pigmentation, and various skin and hair conditions.",
  },
  {
    title: "Ear, Nose & Throat (ENT)",
    description:
      "Complete ENT care for sinus problems, hearing loss, throat infections, nasal disorders, and voice-related conditions.",
  },
  {
    title: "Orthopedics",
    description:
      "Diagnosis and treatment of fractures, arthritis, joint pain, sports injuries, spine disorders, and bone-related conditions.",
  },
  {
    title: "Neurology",
    description:
      "Expert neurological care for migraines, epilepsy, stroke, nerve disorders, Parkinson's disease, and other neurological conditions.",
  },
  {
    title: "Pediatrics",
    description:
      "Dedicated healthcare for infants, children, and adolescents including growth monitoring, vaccinations, and illness management.",
  },
  {
    title: "Gynaecology",
    description:
      "Comprehensive women's healthcare including pregnancy care, menstrual disorders, infertility consultation, and reproductive health.",
  },
  {
    title: "Eye Care",
    description:
      "Comprehensive eye examinations, vision correction, cataract evaluation, glaucoma screening, and treatment of eye diseases.",
  },
  {
    title: "Minor Surgery",
    description:
      "Safe outpatient surgical procedures including wound care, cyst removal, abscess drainage, and minor surgical treatments.",
  },
  {
    title: "Psychiatry",
    description:
      "Professional mental healthcare for anxiety, depression, stress, sleep disorders, emotional well-being, and behavioral conditions.",
  },
  {
    title: "Blood, Urine, Sputum & Semen Tests",
    description:
      "Accurate laboratory investigations with modern diagnostic equipment and timely reporting for comprehensive health assessment.",
  },
  {
    title: "X-Ray, CT Scan, Ultrasound & MRI",
    description:
      "Advanced diagnostic imaging services using modern equipment for accurate diagnosis and effective treatment planning.",
  },
  {
    title: "Scrape Cytology",
    description:
      "Microscopic examination of cells for early disease detection, cancer screening, and accurate pathological diagnosis.",
  },
];

export default function Departments() {
  const [searchQuery] = useState("");

  // Filter departments dynamically based on search
  const filteredDepartments = departments.filter(
    (dept) =>
      dept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased">
      
      {/* Colorful Accent Highlight Banner */}
      <section className="pt-28 pb-6 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2a687d] via-[#205263] to-[#173d4a] p-6 sm:p-8 text-white shadow-lg">
            {/* Background pattern circles */}
            <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"></div>
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-teal-300/10 blur-2xl"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
              <div>
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide text-teal-100 backdrop-blur-md mb-2">
                  Comprehensive Healthcare Services
                </span>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Specialized Medical Departments Under One Roof
                </h1>
                <p className="mt-1 text-xs sm:text-sm text-teal-100 max-w-xl">
                  Explore our extensive medical disciplines and connect with expert practitioners dedicated to your overall health and wellness.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs sm:text-sm font-bold text-[#2a687d] shadow-md hover:bg-teal-50 transition"
                >
                  <FaPhoneAlt className="h-3.5 w-3.5" /> Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments & Services Grid Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Specialized Departments & Services
            </h2>
            <p className="mt-2 text-[13px] font-normal tracking-tight text-slate-500">
              Explore our wide range of medical disciplines designed to give you complete healthcare under one roof.
            </p>
          </div>

          {/* Department Cards Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDepartments.length > 0 ? (
              filteredDepartments.map((dept, index) => (
                <div
                  key={dept.title}
                  className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-medium tracking-tight text-[#2a687d] bg-[#2a687d]/10 border border-[#2a687d]/20 px-2.5 py-1 rounded-full">
                        Department #{String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="h-8 w-8 rounded-full bg-teal-50 text-[#2a687d] flex items-center justify-center text-xs border border-teal-100">
                        <FaUserNurse />
                      </div>
                    </div>

                    <h3 className="text-base font-semibold tracking-tight text-slate-900">
                      {dept.title}
                    </h3>

                    <p className="mt-2 text-[13px] font-normal tracking-tight text-slate-600 leading-relaxed">
                      {dept.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium tracking-tight text-emerald-600 flex items-center gap-1">
                      <FaCheckCircle className="text-[10px]" /> Doctors Available
                    </span>
                    <Link
                      to="/appointment"
                      className="text-[12px] font-semibold tracking-tight text-[#2a687d] hover:underline underline-offset-4"
                    >
                      Book Dept &rarr;
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-[13px] font-normal tracking-tight text-slate-500">
                No matching departments found for "{searchQuery}".
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Banner with Soft Mint/Teal Gradient Background */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-emerald-100/70 via-teal-100/60 to-cyan-100/70 p-6 sm:p-10 border border-teal-200/60 shadow-xs relative overflow-hidden">
            
            {/* Header Badge & Rating Row */}
            <div className="flex flex-wrap items-center gap-3 mb-6 text-slate-700 text-xs sm:text-sm font-semibold">
              <span className="inline-flex items-center gap-1 bg-white/90 px-3 py-1 rounded-full border border-teal-200/80 text-amber-500 shadow-2xs">
                <FaStar /> 4.8 Rating
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-700 font-medium">10,000+ Satisfied Patients Served</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
              Why Patients Trust <span className="text-[#2a687d]">Odisha Polyclinic</span>
            </h3>

            {/* Sub-cards on Top of Soft Gradient */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white/90 backdrop-blur-xs p-5 border border-white/80 shadow-xs">
                <div className="h-9 w-9 rounded-xl bg-teal-50 text-[#2a687d] flex items-center justify-center mb-3">
                  <FaUserNurse />
                </div>
                <h4 className="text-sm font-semibold text-slate-900 mb-1">Expert Doctors</h4>
                <p className="text-[12px] text-slate-600 leading-relaxed">
                  Highly experienced specialists dedicated to quality medical care.
                </p>
              </div>

              <div className="rounded-2xl bg-white/90 backdrop-blur-xs p-5 border border-white/80 shadow-xs">
                <div className="h-9 w-9 rounded-xl bg-teal-50 text-[#2a687d] flex items-center justify-center mb-3">
                  <FaClock />
                </div>
                <h4 className="text-sm font-semibold text-slate-900 mb-1">Modern Diagnostics</h4>
                <p className="text-[12px] text-slate-600 leading-relaxed">
                  Advanced laboratory and imaging facilities for fast reporting.
                </p>
              </div>

              <div className="rounded-2xl bg-white/90 backdrop-blur-xs p-5 border border-white/80 shadow-xs">
                <div className="h-9 w-9 rounded-xl bg-teal-50 text-[#2a687d] flex items-center justify-center mb-3">
                  <FaShieldAlt />
                </div>
                <h4 className="text-sm font-semibold text-slate-900 mb-1">Affordable Care</h4>
                <p className="text-[12px] text-slate-600 leading-relaxed">
                  Quality healthcare services delivered at transparent pricing.
                </p>
              </div>

              <div className="rounded-2xl bg-white/90 backdrop-blur-xs p-5 border border-white/80 shadow-xs">
                <div className="h-9 w-9 rounded-xl bg-teal-50 text-[#2a687d] flex items-center justify-center mb-3">
                  <FaHeartbeat />
                </div>
                <h4 className="text-sm font-semibold text-slate-900 mb-1">Patient First</h4>
                <p className="text-[12px] text-slate-600 leading-relaxed">
                  Compassionate treatment and complete health journey support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tinted CTA Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-emerald-500/10 border border-teal-200/80 p-8 sm:p-10 text-center shadow-xs">
            <h2 className="mb-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Need Expert Medical Consultation?
            </h2>

            <p className="mb-6 text-[13px] font-normal tracking-tight text-slate-600 max-w-xl mx-auto leading-relaxed">
              Schedule your appointment today and receive personalized medical care from our experienced healthcare professionals.
            </p>

            <Link
              to="/appointment"
              className="inline-block rounded-xl bg-[#2a687d] px-8 py-3 text-[13px] font-semibold tracking-tight text-white hover:bg-[#1c4b5c] transition shadow-xs"
            >
              Book Appointment Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}