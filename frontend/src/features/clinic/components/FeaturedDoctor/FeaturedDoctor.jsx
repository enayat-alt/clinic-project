import { Link } from "react-router-dom";
import {
  Award,
  Users,
  MessageCircle,
  CalendarDays,
  Star,
  CircleCheck,
} from "lucide-react";

export default function FeaturedDoctor() {
  const stats = [
    {
      icon: <Award className="h-3.5 w-3.5 text-[#0F4C81]" />,
      title: "15+ Years",
      subtitle: "Experience",
    },
    {
      icon: <Users className="h-3.5 w-3.5 text-[#0F4C81]" />,
      title: "5,000+",
      subtitle: "Patients",
    },
    {
      icon: <CircleCheck className="h-3.5 w-3.5 text-emerald-600" />,
      title: "Available Today",
      subtitle: "In-Clinic",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-12 font-sans antialiased text-[#475569] md:py-16">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">

          {/* LEFT CONTENT */}
          <div className="animate-fade-up text-center lg:col-span-7 lg:text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0F4C81]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0F4C81]" />
              Meet Our Doctor
            </div>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#1E293B] sm:text-3xl lg:text-4xl">
              Compassionate Healthcare <br className="hidden sm:inline" />
              From A Trusted Expert
            </h2>

            <p className="mt-3 text-xs font-normal leading-relaxed text-[#64748B] sm:text-sm">
              Our lead physician is committed to providing compassionate,
              patient-focused healthcare with modern diagnostics and
              evidence-based treatment.
            </p>

            {/* Doctor Card */}
            <div className="mt-5 inline-block w-full max-w-sm rounded-xl border border-slate-200/80 bg-white/90 p-3.5 text-left shadow-sm backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold tracking-tight text-[#1E293B] sm:text-lg">
                    Dr. Shaik Faraz Ahmmed
                  </h3>

                  <p className="mt-0.5 text-xs font-semibold text-[#0F4C81]">
                    MBBS • MD • General Physician
                  </p>
                </div>

                <span className="hidden items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 sm:inline-flex">
                  Verified MD
                </span>
              </div>

              {/* Rating */}
              <div className="mt-2.5 flex items-center gap-2 border-t border-slate-100 pt-2.5">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-current"
                    />
                  ))}
                </div>

                <span className="text-[11px] font-semibold text-[#334155]">
                  4.9{" "}
                  <span className="font-normal text-[#64748B]">
                    (500+ Reviews)
                  </span>
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center rounded-xl bg-[#081A33] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-[#081A33]/15 transition-all duration-300 hover:bg-[#0F4C81] hover:shadow-lg active:scale-[0.98]"
              >
                <CalendarDays className="mr-1.5 h-3 w-3" />
                Book Appointment
              </Link>

              <a
                href="https://wa.me/919124508591"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/15 transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg active:scale-[0.98]"
              >
                <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative animate-fade-up [animation-delay:100ms] lg:col-span-5">
            <div className="relative mx-auto max-w-xs rounded-2xl border border-slate-200/60 bg-gradient-to-b from-blue-50/60 to-white p-3 shadow-lg">
              <div className="relative overflow-hidden rounded-xl bg-slate-100">
                <img
                  src="/doctor.webp"
                  alt="Dr. Shaik Faraz Ahmmed"
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Stat Chips */}
              <div className="mt-3 grid grid-cols-3 gap-1.5">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center rounded-lg border border-slate-100 bg-slate-50 p-2 text-center"
                  >
                    {stat.icon}

                    <span className="mt-1 text-[11px] font-bold leading-none text-[#1E293B]">
                      {stat.title}
                    </span>

                    <span className="mt-0.5 text-[9px] font-medium leading-none text-[#64748B]">
                      {stat.subtitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}