import { Link } from "react-router-dom";

const departments = [
  "Physiotherapy",
  "General Medicine",
  "Chest Medicine (Pulmonologist)",
  "Gastrology",
  "Diabetes / Thyroid Specialist",
  "Skin Department",
  "Ear, Nose & Throat (ENT)",
  "Orthopedics",
  "Neurology",
  "Pediatrics",
  "Gynaecology",
  "Eye Care",
  "Minor Surgery",
  "Psychiatry",
  "Blood, Urine, Sputum & Semen Tests",
  "X-Ray, CT Scan, Ultrasound & MRI",
  "Scrape Cytology",
];

export default function Departments() {
  return (
    <div className="bg-[#e5f9f8] min-h-screen">

      {/* Hero Section */}
      <section className="bg-[#1a504c] py-20">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-gray-200">
            <Link to="/">Home</Link> / Departments
          </p>

          <h1 className="text-5xl font-bold text-white mt-4">
            Our Departments
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-4xl leading-8">
            Our clinic offers a range of specialized departments to provide
            complete healthcare under one roof. From Physiotherapy and
            General Medicine to expert care in Chest Medicine, Gastrology,
            Skin, and Diabetes/Thyroid Management, we are committed to
            delivering personalized treatment through experienced
            specialists for every patient's healthcare needs.
          </p>

        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#1a504c] mb-4">
            Services & Departments
          </h2>

          <p className="text-center text-gray-600 mb-12">
            Comprehensive healthcare services delivered by experienced
            specialists and modern medical facilities.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {departments.map((department, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl shadow-md border border-[#cdebea] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#1a504c] rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-[#1a504c]">
                  {department}
                </h3>

                <p className="text-gray-600 mt-3">
                  Professional healthcare services provided by qualified
                  specialists using modern diagnostic and treatment methods.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#1a504c] mb-12">
            Why Choose Odisha Polyclinic?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-[#e5f9f8] p-6 rounded-2xl text-center">
              <h3 className="font-bold text-xl mb-2">
                Expert Doctors
              </h3>
              <p className="text-gray-600">
                Experienced specialists across multiple departments.
              </p>
            </div>

            <div className="bg-[#e5f9f8] p-6 rounded-2xl text-center">
              <h3 className="font-bold text-xl mb-2">
                Modern Diagnostics
              </h3>
              <p className="text-gray-600">
                Advanced testing and imaging facilities.
              </p>
            </div>

            <div className="bg-[#e5f9f8] p-6 rounded-2xl text-center">
              <h3 className="font-bold text-xl mb-2">
                Affordable Care
              </h3>
              <p className="text-gray-600">
                Quality healthcare at reasonable costs.
              </p>
            </div>

            <div className="bg-[#e5f9f8] p-6 rounded-2xl text-center">
              <h3 className="font-bold text-xl mb-2">
                Patient First
              </h3>
              <p className="text-gray-600">
                Compassionate and personalized treatment plans.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-[#1a504c] rounded-3xl p-10 text-center">

            <h2 className="text-4xl font-bold text-white mb-4">
              Need Expert Medical Consultation?
            </h2>

            <p className="text-gray-200 mb-8 text-lg">
              Book an appointment today and get personalized healthcare
              from our experienced specialists.
            </p>

            <Link
              to="/appointment"
              className="inline-block bg-white text-[#1a504c] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Book Appointment
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}