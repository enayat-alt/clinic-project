import React from "react";
import { Phone, AlertCircle, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Header Banner */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-[#081A33] text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300 bg-white/10 px-3.5 py-1.5 rounded-full inline-block border border-white/10 backdrop-blur-sm mb-3">
            Connect With Us
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Get In Touch
          </h1>
          <p className="mt-3 text-sm sm:text-base font-normal tracking-tight text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a question about our services, insurance partnerships, or want to reach a specific department? We are here to help.
          </p>
        </div>
      </section>

      {/* Quick Contact Info Cards */}
      <section className="relative -mt-8 px-5 sm:px-6 lg:px-8 z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Card 1: Emergency */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-500/10 flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-rose-500/5 transition-transform duration-500 group-hover:scale-150" />
              <div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100 text-rose-600 ring-1 ring-rose-200/60 shadow-inner">
                  <AlertCircle className="h-6 w-6 stroke-[2.25]" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-[#081A33] mb-1">
                  Emergency Call
                </h3>
                <p className="text-xs font-medium text-slate-500 mb-4 leading-relaxed">
                  Available 24/7 for urgent care
                </p>
              </div>
              <a
                href="tel:+918114984201"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-600 transition-colors hover:text-rose-700"
              >
                +91 8114984201
                <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Card 2: OPD Registration */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-emerald-500/5 transition-transform duration-500 group-hover:scale-150" />
              <div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-600 ring-1 ring-emerald-200/60 shadow-inner">
                  <Phone className="h-6 w-6 stroke-[2.25]" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-[#081A33] mb-1">
                  OPD Registration
                </h3>
                <p className="text-xs font-medium text-slate-500 mb-4 leading-relaxed">
                  Mon - Sat: 8:00 AM - 8:00 PM
                </p>
              </div>
              <a
                href="tel:+918114984201"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
              >
                +91 8114984201
                <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Card 3: Email Support */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-cyan-500/5 transition-transform duration-500 group-hover:scale-150" />
              <div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-50 to-sky-100 text-[#081A33] ring-1 ring-cyan-200/60 shadow-inner">
                  <Mail className="h-6 w-6 stroke-[2.25]" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-[#081A33] mb-1">
                  Email Support
                </h3>
                <p className="text-xs font-medium text-slate-500 mb-4 leading-relaxed">
                  Expect a reply within 24 hours
                </p>
              </div>
              <a
                href="mailto:info@odishapolyclinic.com"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#174A84] transition-colors hover:text-cyan-700 truncate"
              >
                info@odishapolyclinic.com
                <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
              </a>
            </div>

            {/* Card 4: Location */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-indigo-500/5 transition-transform duration-500 group-hover:scale-150" />
              <div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-slate-100 text-[#081A33] ring-1 ring-indigo-200/60 shadow-inner">
                  <MapPin className="h-6 w-6 stroke-[2.25]" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-[#081A33] mb-1">
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
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-[#081A33] sm:text-4xl">
              Find Our Medical Center
            </h2>
        
          </div>

          {/* Map Frame Container */}
          <div className="w-full h-[450px] md:h-[520px] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl relative group bg-slate-100">
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
    </div>
  );
}