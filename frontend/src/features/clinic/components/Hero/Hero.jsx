import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaWhatsapp,
  FaPhoneAlt,
  FaUserMd,
  FaMicroscope,
  FaCalendarCheck,
  FaClock,
  FaShieldAlt,
  FaPercent,
} from "react-icons/fa";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-[#081A33] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#081A33] via-[#0D2D56] to-[#123E73]" />

      {/* Soft background glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="hero-fade-down inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-cyan-300" />
          Trusted Healthcare Services
        </div>

        {/* Heading */}
        <h1 className="hero-fade-down mt-5 max-w-4xl text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Quality Healthcare,
          <br />
          <span className="font-semibold text-cyan-300">
            Compassionate Care
          </span>
        </h1>

        {/* Description */}
        <p className="hero-fade-down mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          Odisha Polyclinic provides trusted healthcare services with
          experienced doctors, modern diagnostics, and patient-focused care.
        </p>

        {/* Search */}
        <div className="hero-fade-up mt-7 w-full max-w-xl">
          <div className="flex items-center overflow-hidden rounded-2xl border border-white/10 bg-white shadow-xl">
            <FaSearch className="ml-4 shrink-0 text-sm text-slate-400" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search doctors, departments or services..."
              className="min-w-0 flex-1 bg-transparent px-3 py-4 text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />

            <button
              type="button"
              className="mr-1.5 rounded-xl bg-[#0F4C81] px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#123E73]"
            >
              Search
            </button>
          </div>
        </div>

        {/* Feature cards */}
        <div className="hero-fade-up mt-8 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
          <HeroFeature
            icon={<FaUserMd />}
            title="Experienced Doctors"
            subtitle="Trusted medical professionals"
          />

          <HeroFeature
            icon={<FaMicroscope />}
            title="Modern Diagnostics"
            subtitle="Reliable testing & reports"
          />

          <HeroFeature
            icon={<FaShieldAlt />}
            title="Trusted Healthcare"
            subtitle="Patient-first medical care"
          />
        </div>

        {/* Buttons */}
        <div className="hero-fade-up mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/appointment"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#081A33] shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
          >
            <FaCalendarCheck />
            Book Appointment
          </Link>

          <a
            href="https://wa.me/919124508591"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-emerald-700"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <a
            href="tel:+919124508591"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
          >
            <FaPhoneAlt />
            Call Now
          </a>
        </div>

        {/* Appointment box */}
        <div className="hero-booking mt-10 flex w-full max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md sm:flex-row sm:p-5">
          <div className="flex items-center gap-3 text-left">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
              <FaClock />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Quick & Easy Appointment
              </h3>

              <p className="mt-1 text-xs text-slate-300">
                Book your consultation with our doctor today.
              </p>
            </div>
          </div>

          <Link
            to="/appointment"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#0F4C81] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#123E73]"
          >
            <FaCalendarCheck />
            Book Now
          </Link>
        </div>

        {/* Discount / trust information */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-slate-300">
          <span className="inline-flex items-center gap-1.5">
            <FaShieldAlt className="text-cyan-300" />
            Trusted Healthcare
          </span>

          <span className="inline-flex items-center gap-1.5">
            <FaUserMd className="text-cyan-300" />
            Experienced Doctor
          </span>

          <span className="inline-flex items-center gap-1.5">
            <FaPercent className="text-cyan-300" />
            Affordable Care
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------
   Lightweight Feature Component
---------------------------------- */

function HeroFeature({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-left backdrop-blur-sm">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg text-cyan-300">
        {icon}
      </div>

      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-white">{title}</h3>

        <p className="mt-0.5 text-xs text-slate-300">{subtitle}</p>
      </div>
    </div>
  );
}