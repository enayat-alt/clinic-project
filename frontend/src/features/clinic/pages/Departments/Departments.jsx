
import { Link } from "react-router-dom";

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
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#081A33] via-[#0F2D56] to-[#174A84] py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our Departments
          </h1>

          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
            Odisha Polyclinic offers comprehensive healthcare services through
            experienced specialists and modern diagnostic facilities. Our
            patient-first approach ensures quality treatment, compassionate
            care, and personalized healthcare solutions under one roof.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#081A33] sm:text-4xl">
            Services & Departments
          </h2>

          <p className="mb-12 text-center text-slate-600">
            Explore our specialized medical departments designed to provide
            complete healthcare solutions for every stage of life.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((department, index) => (
              <div
                key={department.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#081A33] font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-semibold text-[#081A33]">
                  {department.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {department.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#081A33] sm:text-4xl">
            Why Choose Odisha Polyclinic?
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-md transition hover:shadow-xl">
              <h3 className="mb-2 text-xl font-bold text-[#081A33]">
                Expert Doctors
              </h3>

              <p className="text-slate-600">
                Highly experienced specialists dedicated to providing quality
                medical care across multiple specialties.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-md transition hover:shadow-xl">
              <h3 className="mb-2 text-xl font-bold text-[#081A33]">
                Modern Diagnostics
              </h3>

              <p className="text-slate-600">
                Advanced laboratory and imaging facilities for fast and accurate
                diagnosis.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-md transition hover:shadow-xl">
              <h3 className="mb-2 text-xl font-bold text-[#081A33]">
                Affordable Care
              </h3>

              <p className="text-slate-600">
                Quality healthcare services delivered at affordable and
                transparent pricing.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-md transition hover:shadow-xl">
              <h3 className="mb-2 text-xl font-bold text-[#081A33]">
                Patient First
              </h3>

              <p className="text-slate-600">
                Compassionate treatment, personalized care, and complete support
                throughout your healthcare journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#081A33] via-[#0F2D56] to-[#174A84] p-8 text-center shadow-2xl sm:p-10">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Need Expert Medical Consultation?
            </h2>

            <p className="mb-8 text-base text-slate-300 md:text-lg">
              Schedule your appointment today and receive personalized medical
              care from our experienced healthcare professionals.
            </p>

            <Link
              to="/appointment"
              className="inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[#081A33] transition hover:bg-slate-100"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}