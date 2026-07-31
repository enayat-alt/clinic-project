import React from "react";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#081A33] via-[#0F2D56] to-[#174A84] pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 bg-white/10 px-3 py-1 rounded-full">
            Connect With Us
          </span>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Have a question about our services, insurance partnerships, or want
            to reach a specific department? We are here to help.
          </p>
        </div>
      </section>

      {/* Quick Contact Info Cards */}
      <section className="relative -mt-8 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Emergency */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600 font-bold">
                ⚠️
              </div>
              <h3 className="text-lg font-bold text-[#081A33] mb-1">
                Emergency Call
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Available 24/7 for urgent care
              </p>
              <a
                href="tel:+918114984201"
                className="text-sm font-semibold text-[#174A84] hover:underline"
              >
                +91 8114984201
              </a>
            </div>

            {/* Card 2: Phone */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e5f9f8] text-[#1a504c] font-bold">
                📞
              </div>
              <h3 className="text-lg font-bold text-[#081A33] mb-1">
                OPD Registration
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Mon - Sat: 8:00 AM - 8:00 PM
              </p>
              <a
                href="tel:+918114984201"
                className="text-sm font-semibold text-[#174A84] hover:underline"
              >
                +91 8114984201
              </a>
            </div>

            {/* Card 3: Email */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-[#081A33] font-bold">
                ✉️
              </div>
              <h3 className="text-lg font-bold text-[#081A33] mb-1">
                Email Support
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Expect a reply within 24 hours
              </p>
              <a
                href="mailto:info@odishapolyclinic.com"
                className="text-sm font-semibold text-[#174A84] hover:underline"
              >
                info@odishapolyclinic.com
              </a>
            </div>

            {/* Card 4: Location */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-[#081A33] font-bold">
                📍
              </div>
              <h3 className="text-lg font-bold text-[#081A33] mb-1">
                Our Location
              </h3>
              <p className="text-slate-600 text-sm mb-1">
                Bhubaneswar, Odisha,
              </p>
              <p className="text-slate-600 text-xs">
                plot no. 119, Sundarpada Road, Kapilprasad, Azad Nagar, Bhubaneswar Infront of Padmavati Convention Infront of Ex corporator home, Azad Nagar, Sundarpada, Bhubaneswar, Ebaranga, Odisha 751002, India

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Map Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#081A33] sm:text-4xl">
            Find Our Medical Center
          </h2>
          <p className="mb-12 text-center text-slate-600 max-w-2xl mx-auto">
            Conveniently situated in the heart of Bhubaneswar, our clinic
            provides accessible primary and specialized healthcare with
            dedicated patient parking facilities.
          </p>

          {/* Map Frame Container */}
          {/* Map Frame Container */}
          <div className="w-full h-[450px] md:h-[550px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative group bg-slate-100">
            <iframe
              title="Odisha Polyclinic Location Map"
              src="https://maps.google.com/maps?q=Odisha%20Polyclinic%20Bhubaneswar&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale-[15%] contrast-[110%] group-hover:grayscale-0 transition-all duration-500"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
