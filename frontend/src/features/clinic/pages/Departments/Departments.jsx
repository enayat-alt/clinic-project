
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserNurse,
  FaCheckCircle,
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
  const [searchQuery, setSearchQuery] = useState("");

  // Filter departments dynamically based on search
  const filteredDepartments = departments.filter((dept) =>
    dept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dept.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">

      {/* Blue Top Header Banner */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-[#081A33] text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-white">
            Our Specialized Departments
          </h1>
          <p className="mt-3 text-sm sm:text-base font-normal tracking-tight text-slate-300 max-w-2xl mx-auto">
            Explore complete healthcare services and diagnostic solutions provided by experienced doctors at Odisha Polyclinic.
          </p>
        </div>
      </section>

      {/* Departments & Services Grid Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#081A33]">
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
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-normal tracking-tight text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-full">
                        Department #{String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="h-8 w-8 rounded-full bg-slate-100 text-[#081A33] flex items-center justify-center text-xs">
                        <FaUserNurse />
                      </div>
                    </div>

                    <h3 className="text-base font-normal tracking-tight text-[#081A33]">
                      {dept.title}
                    </h3>

                    <p className="mt-2 text-[13px] font-normal tracking-tight text-slate-600 leading-relaxed">
                      {dept.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-normal tracking-tight text-emerald-600 flex items-center gap-1">
                      <FaCheckCircle className="text-[10px]" /> Doctors Available
                    </span>
                    <Link
                      to="/appointment"
                      className="text-[12px] font-normal tracking-tight text-[#081A33] hover:text-cyan-600 transition underline underline-offset-4"
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

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 border-t border-slate-200/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl sm:text-3xl font-normal tracking-tight text-[#081A33]">
            Why Choose Odisha Polyclinic?
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200/70 bg-slate-50/50 p-5 text-center shadow-xs">
              <h3 className="mb-1.5 text-base font-normal tracking-tight text-[#081A33]">
                Expert Doctors
              </h3>
              <p className="text-[13px] font-normal tracking-tight text-slate-600">
                Highly experienced specialists dedicated to quality medical care across multiple specialties.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/70 bg-slate-50/50 p-5 text-center shadow-xs">
              <h3 className="mb-1.5 text-base font-normal tracking-tight text-[#081A33]">
                Modern Diagnostics
              </h3>
              <p className="text-[13px] font-normal tracking-tight text-slate-600">
                Advanced laboratory and imaging facilities for fast and accurate diagnosis.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/70 bg-slate-50/50 p-5 text-center shadow-xs">
              <h3 className="mb-1.5 text-base font-normal tracking-tight text-[#081A33]">
                Affordable Care
              </h3>
              <p className="text-[13px] font-normal tracking-tight text-slate-600">
                Quality healthcare services delivered at affordable and transparent pricing.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/70 bg-slate-50/50 p-5 text-center shadow-xs">
              <h3 className="mb-1.5 text-base font-normal tracking-tight text-[#081A33]">
                Patient First
              </h3>
              <p className="text-[13px] font-normal tracking-tight text-slate-600">
                Compassionate treatment, personalized care, and complete support throughout your health journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#081A33] via-[#0F2D56] to-[#174A84] p-8 sm:p-10 text-center shadow-2xl text-white">
            <h2 className="mb-3 text-2xl sm:text-3xl font-normal tracking-tight">
              Need Expert Medical Consultation?
            </h2>

            <p className="mb-6 text-[13px] font-normal tracking-tight text-slate-300 max-w-xl mx-auto">
              Schedule your appointment today and receive personalized medical care from our experienced healthcare professionals.
            </p>

            <Link
              to="/appointment"
              className="inline-block rounded-xl bg-white px-8 py-3 text-[13px] font-normal tracking-tight text-[#081A33] hover:bg-slate-100 transition shadow-md"
            >
              Book Appointment Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}