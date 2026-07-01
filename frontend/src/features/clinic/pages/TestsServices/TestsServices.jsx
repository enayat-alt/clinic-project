
import { Link } from "react-router-dom";

const services = [
  "Physiotherapy",
  "ECG",
  "Eye Test",
  "Ear Test",
  "PFT",
  "X-Ray",
  "CT Scan",
  "MRI",
  "Ultrasound",
  "EEG",
];

export default function TestsServices() {
  return (
    <div className="bg-[#e5f9f8]">

      {/* Hero Section */}
      <section className="bg-[#e5f9f8] py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-gray-600">
            <Link to="/">Home</Link> / Tests & Services
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#1a504c] sm:text-4xl lg:text-5xl">
            Lab and Tests
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            Our clinic provides a wide range of diagnostic tests and medical
            services to support accurate diagnosis and effective treatment.
            From pathology tests to routine health screenings, we use modern
            equipment to ensure reliable results. Convenient, affordable,
            and patient-focused services—all under one roof.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <h2 className="mb-12 text-center text-3xl font-bold text-[#1a504c] sm:text-4xl">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 border border-[#cdebea] hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-[#1a504c]">
                  {service}
                </h3>

                <p className="text-gray-600 mt-3">
                  Professional and reliable {service.toLowerCase()} services
                  provided by experienced healthcare specialists.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <h2 className="mb-10 text-center text-3xl font-bold text-[#1a504c] sm:text-4xl">
            Why Choose Odisha Polyclinic?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
              Modern Diagnostic Equipment
            </div>

            <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
              Experienced Medical Professionals
            </div>

            <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
              Fast & Accurate Reports
            </div>

            <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
              Affordable Healthcare Services
            </div>

            <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
              Patient-Centered Care
            </div>

            <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
              Easy Appointment Booking
            </div>

          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">

          <div className="bg-white shadow-lg rounded-3xl p-8 border border-[#cdebea]">

            <h2 className="mb-8 text-center text-3xl font-bold text-[#1a504c] sm:text-4xl">
              Make an Appointment
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-[#cdebea] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-[#cdebea] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-[#cdebea] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              />

              <select
                className="w-full border border-[#cdebea] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Test / Service
                </option>

                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <input
                type="date"
                className="w-full border border-[#cdebea] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              />

              <input
                type="time"
                className="w-full border border-[#cdebea] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              />

              <textarea
                rows="5"
                placeholder="Additional Information / Message"
                className="w-full border border-[#cdebea] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              ></textarea>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#1a504c] py-3 font-semibold text-white transition hover:bg-[#143d3a]"
              >
                Book Appointment
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Departments + Hours */}
      <section className="bg-[#1a504c] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:grid-cols-2 lg:px-8">

          <div>
            <h3 className="text-2xl font-bold mb-5">
              Our Departments
            </h3>

            <ul className="space-y-3">
              <li>General Medicine</li>
              <li>Consultation</li>
              <li>Tests & Services</li>
              <li>Physiotherapy</li>
              <li>PRP Therapy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-5">
              Opening Hours
            </h3>

            <ul className="space-y-3">
              <li>Monday - Saturday: 8:00 AM - 8:00 PM</li>
              <li>Sunday: Emergency Consultation Only</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}