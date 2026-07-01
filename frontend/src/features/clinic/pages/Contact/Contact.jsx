import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="bg-[#e5f9f8] min-h-screen">

      {/* Hero Section */}
      <section className="bg-[#1a504c] py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <p className="text-gray-200">
            <Link to="/">Home</Link> / Contact Us
          </p>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Contact Us
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-200 md:text-lg">
            We're here to help. Contact Odisha Polyclinic for appointments,
            consultations, diagnostic tests, and healthcare information.
          </p>

        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">

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
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#cdebea] bg-white p-6 shadow-lg sm:p-8 md:p-12">

            <h2 className="mb-4 text-center text-3xl font-bold text-[#1a504c] sm:text-4xl">
              Send Us a Message
            </h2>

            <p className="mb-10 text-center text-gray-600">
              Have a question? Fill out the form below and our team
              will get back to you.
            </p>

            <form className="grid gap-6 md:grid-cols-2">

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
                className="rounded-xl bg-[#1a504c] py-4 font-semibold text-white transition hover:bg-[#143d3a] md:col-span-2"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Opening Hours */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">

          <h2 className="mb-8 text-3xl font-bold text-[#1a504c] sm:text-4xl">
            Opening Hours
          </h2>

          <div className="rounded-3xl bg-[#e5f9f8] p-6 sm:p-8">

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
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#1a504c] p-8 text-center sm:p-10">

            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Need Medical Assistance?
            </h2>

            <p className="mb-8 text-base text-gray-200 md:text-lg">
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