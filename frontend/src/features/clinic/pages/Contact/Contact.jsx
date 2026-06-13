import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="bg-[#e5f9f8] min-h-screen">

      {/* Hero Section */}
      <section className="bg-[#1a504c] py-20">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-gray-200">
            <Link to="/">Home</Link> / Contact Us
          </p>

          <h1 className="text-5xl font-bold text-white mt-4">
            Contact Us
          </h1>

          <p className="text-lg text-gray-200 mt-6 max-w-3xl">
            We're here to help. Contact Odisha Polyclinic for appointments,
            consultations, diagnostic tests, and healthcare information.
          </p>

        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-md border border-[#cdebea]">
              <div className="text-4xl mb-4">📞</div>

              <h3 className="text-2xl font-bold text-[#1a504c] mb-3">
                Call Us
              </h3>

              <p className="text-gray-600">
                +91 9124508591
              </p>

              <p className="text-gray-600 mt-2">
                Available during clinic hours
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md border border-[#cdebea]">
              <div className="text-4xl mb-4">📧</div>

              <h3 className="text-2xl font-bold text-[#1a504c] mb-3">
                Email Us
              </h3>

              <p className="text-gray-600">
                odishapolyclinic@gmail.com
              </p>

              <p className="text-gray-600 mt-2">
                We reply within 24 hours
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md border border-[#cdebea]">
              <div className="text-4xl mb-4">📍</div>

              <h3 className="text-2xl font-bold text-[#1a504c] mb-3">
                Visit Us
              </h3>

              <p className="text-gray-600">
                Bhubaneswar, Odisha, India
              </p>

              <p className="text-gray-600 mt-2">
                Easy access and parking available
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg border border-[#cdebea] p-8 md:p-12">

            <h2 className="text-4xl font-bold text-center text-[#1a504c] mb-4">
              Send Us a Message
            </h2>

            <p className="text-center text-gray-600 mb-10">
              Have a question? Fill out the form below and our team
              will get back to you.
            </p>

            <form className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="md:col-span-2 border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              />

              <button
                type="submit"
                className="md:col-span-2 bg-[#1a504c] text-white py-4 rounded-xl font-semibold hover:bg-[#143d3a] transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Opening Hours */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-[#1a504c] mb-8">
            Opening Hours
          </h2>

          <div className="bg-[#e5f9f8] p-8 rounded-3xl">

            <div className="space-y-4 text-lg">

              <div className="flex justify-between border-b pb-3">
                <span>Monday - Saturday</span>
                <span>8:00 AM - 8:00 PM</span>
              </div>

              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Emergency Consultation Only</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-[#1a504c] rounded-3xl p-10 text-center">

            <h2 className="text-4xl font-bold text-white mb-4">
              Need Medical Assistance?
            </h2>

            <p className="text-gray-200 mb-8 text-lg">
              Book an appointment with our healthcare specialists today.
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