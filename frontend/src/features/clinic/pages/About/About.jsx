

import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="bg-white text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#081A33] via-[#0F2D56] to-[#174A84] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          

          <h1 className="mt-4 mb-4 text-5xl font-bold text-white">
            About Us
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Trusted healthcare services dedicated to improving the health and
            well-being of individuals and families across Odisha.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="font-semibold uppercase tracking-wide text-blue-600">
              Welcome To Odisha Polyclinic
            </span>

            <h2 className="mt-3 mb-6 text-4xl font-bold text-[#081A33]">
              Your Trusted Healthcare Partner
            </h2>

            <p className="text-lg leading-8 text-slate-600">
              When it comes to health, trust and quality care are essential. At
              Odisha Polyclinic, we are committed to providing comprehensive,
              compassionate, and patient-centered healthcare services to
              individuals and families in our community.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We believe that every patient deserves personalized attention,
              accurate diagnosis, and effective treatment. Our experienced
              healthcare professionals work together to ensure that you receive
              the highest standard of medical care in a comfortable and
              supportive environment.
            </p>
          </div>

          {/* Services */}
          <div className="rounded-3xl bg-slate-50 p-8 md:p-12">
            <h3 className="mb-8 text-3xl font-bold text-[#081A33]">
              Our Healthcare Services
            </h3>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
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
              ].map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <p className="font-medium text-slate-700">✓ {service}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-[#081A33] via-[#0F2D56] to-[#174A84] p-8 text-white shadow-xl">
              <h3 className="mb-4 text-3xl font-bold">
                Our Mission
              </h3>

              <p className="leading-8 text-slate-200">
                To provide affordable, accessible, and high-quality healthcare
                services that improve the health and quality of life of every
                patient who walks through our doors.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <h3 className="mb-4 text-3xl font-bold text-[#081A33]">
                Our Vision
              </h3>

              <p className="leading-8 text-slate-600">
                To become Odisha's most trusted healthcare destination,
                recognized for excellence in patient care, medical expertise,
                and community well-being.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h3 className="mb-4 text-4xl font-bold text-[#081A33]">
              Your Health Is Our Priority
            </h3>

            <p className="mx-auto mb-10 max-w-2xl leading-7 text-slate-600">
              Whether you need a routine checkup, specialist consultation,
              diagnostic tests, or preventive healthcare, Odisha Polyclinic is
              here to support your health journey with compassionate,
              affordable, and expert medical care.
            </p>

       
          </div>
        </div>
      </section>
    </main>
  );
}
