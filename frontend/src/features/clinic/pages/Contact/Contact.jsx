
import React from "react";
import { Phone, AlertCircle, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-white text-slate-800 antialiased min-h-screen">
      
      {/* Colorful Accent Highlight Banner */}
      <section className="pt-28 pb-6 bg-slate-50/50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#10847e] via-[#0d6b65] to-[#084e49] p-6 sm:p-8 text-white shadow-lg">
            {/* Background pattern circles */}
            <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"></div>
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-teal-300/10 blur-2xl"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
              <div>
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide text-teal-100 backdrop-blur-md mb-2">
                  24/7 Dedicated Assistance
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Need Immediate Medical Support or Consultation?
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-teal-100 max-w-xl">
                  Our professional medical team and support staff are available around the clock to guide you through emergency coordination and OPD bookings.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="tel:+918114984201"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs sm:text-sm font-bold text-[#10847e] shadow-md hover:bg-teal-50 transition"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info Cards */}
      <section className="py-12 md:py-16 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Card 1: Emergency */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-200 hover:shadow-md flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-rose-500/5 transition-transform duration-500 group-hover:scale-150" />
              <div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 border border-rose-100">
                  <AlertCircle className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-1">
                  Emergency Call
                </h3>
                <p className="text-xs font-normal text-slate-500 mb-4 leading-relaxed">
                  Available 24/7 for urgent care
                </p>
              </div>
              <a
                href="tel:+918114984201"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 transition-colors hover:text-rose-700"
              >
                +91 8114984201
                <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Card 2: OPD Registration */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#10847e]/30 hover:shadow-md flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[#10847e]/5 transition-transform duration-500 group-hover:scale-150" />
              <div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10847e]/10 text-[#10847e] border border-[#10847e]/20">
                  <Phone className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-1">
                  OPD Registration
                </h3>
                <p className="text-xs font-normal text-slate-500 mb-4 leading-relaxed">
                  Mon - Sat: 8:00 AM - 8:00 PM
                </p>
              </div>
              <a
                href="tel:+918114984201"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10847e] transition-colors hover:text-[#0d6b65]"
              >
                +91 8114984201
                <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Card 3: Email Support */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#10847e]/30 hover:shadow-md flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[#10847e]/5 transition-transform duration-500 group-hover:scale-150" />
              <div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10847e]/10 text-[#10847e] border border-[#10847e]/20">
                  <Mail className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-1">
                  Email Support
                </h3>
                <p className="text-xs font-normal text-slate-500 mb-4 leading-relaxed">
                  Expect a reply within 24 hours
                </p>
              </div>
              <a
                href="mailto:info@odishapolyclinic.com"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10847e] transition-colors hover:text-[#0d6b65] truncate"
              >
                info@odishapolyclinic.com
                <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
              </a>
            </div>

            {/* Card 4: Location */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-slate-500/5 transition-transform duration-500 group-hover:scale-150" />
              <div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 border border-slate-200">
                  <MapPin className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-1">
                  Our Location
                </h3>
                <p className="text-xs font-semibold text-slate-700 mb-1">
                  Bhubaneswar, Odisha
                </p>
                <p className="text-[11px] leading-relaxed text-slate-500 font-normal line-clamp-3">
                  Plot No. 119, Sundarpada Road, Kapilprasad, Azad Nagar, Infront of Padmavati Convention, Sundarpada, Ebaranga, Odisha 751002
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-Width Map Section */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block rounded-full bg-[#10847e]/10 border border-[#10847e]/20 px-3.5 py-1 text-xs font-medium tracking-wide text-[#10847e] mb-3">
              LOCATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Find Our Medical Center
            </h2>
          </div>

          {/* Map Frame Container */}
          <div className="w-full h-[400px] md:h-[480px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs relative group bg-slate-50">
            <iframe
              title="Odisha Polyclinic Location Map"
              src="https://maps.google.com/maps?q=Odisha%20Polyclinic%20Bhubaneswar&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale-[10%] contrast-[105%] group-hover:grayscale-0 transition-all duration-500"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}