import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="bg-white text-[#121414]">

      {/* Hero Section */}
      <section className="bg-[#1a504c] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            About Us
          </h1>

          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Trusted healthcare services dedicated to improving the health
            and well-being of individuals and families across Odisha.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-12">
            <span className="text-[#1a504c] font-semibold uppercase tracking-wide">
              Welcome To Odisha Polyclinic
            </span>

            <h2 className="text-4xl font-bold mt-3 mb-6">
              Your Trusted Healthcare Partner
            </h2>

            <p className="text-gray-700 leading-8 text-lg">
              When it comes to health, trust and quality care are essential.
              At Odisha Polyclinic, we are committed to providing
              comprehensive, compassionate, and patient-centered healthcare
              services to individuals and families in our community.
            </p>

            <p className="text-gray-700 leading-8 text-lg mt-6">
              We believe that every patient deserves personalized attention,
              accurate diagnosis, and effective treatment. Our experienced
              healthcare professionals work together to ensure that you
              receive the highest standard of medical care in a comfortable
              and supportive environment.
            </p>
          </div>

          {/* Services */}
          <div className="bg-[#e5f9f8] rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-[#1a504c]">
              Our Healthcare Services
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

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
                  className="bg-white p-5 rounded-2xl shadow-sm border border-[#cdebea] hover:shadow-md transition"
                >
                  <p className="font-medium text-gray-800">
                    ✓ {service}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">

            <div className="bg-[#1a504c] text-white p-8 rounded-3xl">
              <h3 className="text-3xl font-bold mb-4">
                Our Mission
              </h3>

              <p className="leading-8">
                To provide affordable, accessible, and high-quality healthcare
                services that improve the health and quality of life of every
                patient who walks through our doors.
              </p>
            </div>

            <div className="bg-black text-white p-8 rounded-3xl">
              <h3 className="text-3xl font-bold mb-4">
                Our Vision
              </h3>

              <p className="leading-8">
                To become Odisha's most trusted healthcare destination,
                recognized for excellence in patient care, medical expertise,
                and community well-being.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-20 text-center">

            <h3 className="text-4xl font-bold mb-4">
              Your Health Is Our Priority
            </h3>

            <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-7">
              Whether you need a routine checkup, specialist consultation,
              diagnostic tests, or preventive healthcare, Odisha Polyclinic
              is here to support your health journey with compassionate,
              affordable, and expert medical care.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <Link
                to="/"
                className="bg-[#1a504c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-black transition"
              >
                ← Back To Home
              </Link>

              <Link
                to="/appointment"
                className="border border-[#1a504c] text-[#1a504c] px-8 py-4 rounded-xl font-semibold hover:bg-[#1a504c] hover:text-white transition"
              >
                Book Appointment
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}