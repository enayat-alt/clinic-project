import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaLaptopMedical,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

export default function Learning() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#081A33] via-[#0D2D56] to-[#123E73] flex items-center justify-center px-5 py-20">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-lg">
          <FaRocket className="text-cyan-300" />

          <span className="font-medium text-cyan-200">
            Learning Platform • In Development
          </span>
        </div>

        {/* Icon */}
        <div className="mx-auto mt-10 flex h-32 w-32 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl shadow-2xl">
          <FaGraduationCap className="text-6xl text-cyan-300" />
        </div>

        {/* Heading */}
        <h1 className="mt-10 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Hey 👋
          <br />
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            We're Coming Soon!
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          Our Medical Learning Platform is currently under development.
          Soon you'll be able to access high-quality medical courses,
          live classes, certification programs, study materials,
          and expert guidance—all in one place.
        </p>

        {/* Features */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <FaLaptopMedical className="mx-auto text-4xl text-cyan-300" />

            <h3 className="mt-5 text-xl font-semibold text-white">
              Medical Courses
            </h3>

            <p className="mt-3 text-slate-300">
              Learn from experienced doctors with structured courses.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <FaGraduationCap className="mx-auto text-4xl text-cyan-300" />

            <h3 className="mt-5 text-xl font-semibold text-white">
              Certification
            </h3>

            <p className="mt-3 text-slate-300">
              Earn certificates after completing professional programs.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <FaRocket className="mx-auto text-4xl text-cyan-300" />

            <h3 className="mt-5 text-xl font-semibold text-white">
              Launching Soon
            </h3>

            <p className="mt-3 text-slate-300">
              We're building something amazing for students and healthcare professionals.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0F4C81] to-[#38BDF8] px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Back to Home

            <FaArrowRight />
          </Link>

          <Link
            to="/appointment"
            className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
          >
            Book Appointment
          </Link>
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-sm text-slate-400">
          🚀 We're working hard to bring you an amazing learning experience.
          Stay tuned for exciting updates!
        </p>
      </div>
    </section>
  );
}