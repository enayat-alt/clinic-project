import { Link } from "react-router-dom";
import {
  CalendarCheck,
  Clock,
  ShieldCheck,
  Stethoscope,
  MessageCircle,
} from "lucide-react";

import CTAFeature from "./CTAFeature";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-12 font-sans antialiased md:py-16">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 text-center shadow-sm backdrop-blur-sm sm:p-12">
          
          {/* Content */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0F4C81]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0F4C81]" />
              Book Your Appointment
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#1E293B] sm:text-3xl lg:text-4xl">
              Your Health Deserves <br className="hidden sm:inline" />
              The Best Care
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-xs font-normal leading-relaxed text-[#64748B] sm:text-sm">
              Schedule your appointment today and receive trusted healthcare
              from Odisha Polyclinic. Our experienced doctor is ready to help
              you and your family.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex animate-fade-up flex-wrap items-center justify-center gap-2.5 [animation-delay:100ms]">
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center rounded-xl bg-[#081A33] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-[#081A33]/15 transition-all duration-300 hover:bg-[#0F4C81] hover:shadow-lg active:scale-[0.98]"
            >
              <CalendarCheck className="mr-1.5 h-3 w-3" />
              Book Appointment
            </Link>

            <a
              href="https://wa.me/919124508591"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/15 transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg active:scale-[0.98]"
            >
              <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <CTAFeature
              icon={<Stethoscope className="text-[#0F4C81]" />}
              title="Experienced Doctor"
            />

            <CTAFeature
              icon={<Clock className="text-[#0F4C81]" />}
              title="Quick Appointment"
            />

            <CTAFeature
              icon={<ShieldCheck className="text-[#0F4C81]" />}
              title="Trusted Healthcare"
            />
          </div>
        </div>
      </div>
    </section>
  );
}