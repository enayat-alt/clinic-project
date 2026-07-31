

import { Link } from "react-router-dom";
import { FaCalendarCheck, FaWhatsapp, FaPhoneAlt, FaFileMedical, FaVial, FaPlus } from "react-icons/fa";

const services = [
  {
    title: "Physiotherapy",
    description:
      "Comprehensive rehabilitation, pain management, mobility improvement, and post-injury recovery guided by experienced physiotherapists.",
  },
  {
    title: "ECG",
    description:
      "Accurate electrocardiogram testing to evaluate heart rhythm, detect cardiac abnormalities, and monitor overall heart health.",
  },
  {
    title: "Eye Test",
    description:
      "Complete vision examinations including eyesight assessment, eye pressure checks, and early detection of eye diseases.",
  },
  {
    title: "Ear Test",
    description:
      "Professional hearing assessments and ear examinations for diagnosing hearing loss and ear-related disorders.",
  },
  {
    title: "PFT (Pulmonary Function Test)",
    description:
      "Advanced lung function testing to diagnose asthma, COPD, allergies, and other respiratory conditions accurately.",
  },
  {
    title: "X-Ray",
    description:
      "Digital X-ray imaging for accurate diagnosis of fractures, chest conditions, joint problems, and bone disorders.",
  },
  {
    title: "CT Scan",
    description:
      "High-resolution CT scans for detailed imaging of internal organs, bones, blood vessels, and soft tissues.",
  },
  {
    title: "MRI",
    description:
      "Advanced MRI scans providing detailed images of the brain, spine, joints, muscles, and internal soft tissues.",
  },
  {
    title: "Ultrasound",
    description:
      "Safe and non-invasive ultrasound imaging for pregnancy care, abdominal examinations, and organ evaluation.",
  },
  {
    title: "EEG",
    description:
      "Electroencephalogram testing to monitor brain activity and assist in diagnosing epilepsy and neurological disorders.",
  },
];

const whyChooseUs = [
  {
    title: "Modern Diagnostic Equipment",
    description:
      "Advanced medical technology ensures precise diagnoses and dependable results.",
  },
  {
    title: "Experienced Medical Professionals",
    description:
      "Our skilled doctors and technicians provide quality care with years of clinical experience.",
  },
  {
    title: "Fast & Accurate Reports",
    description:
      "Receive timely diagnostic reports to support quicker treatment decisions.",
  },
  {
    title: "Affordable Healthcare Services",
    description:
      "Quality diagnostic services offered at transparent and budget-friendly prices.",
  },
  {
    title: "Patient-Centered Care",
    description:
      "Every patient receives compassionate attention and personalized healthcare support.",
  },
  {
    title: "Easy Appointment Booking",
    description:
      "Book diagnostic tests quickly through our simple and convenient appointment system.",
  },
];

export default function TestsServices() {
  return (
    <main className="bg-slate-50 min-h-screen text-slate-800 antialiased pt-24 md:pt-28">
      
      {/* Top Banner Cards Section */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            
            {/* Banner 1 */}
            <div className="relative overflow-hidden rounded-3xl bg-[#1b4e78] p-6 text-white shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium tracking-wide text-blue-200 mb-2">
                  GUARANTEE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                  ON TIME <br /> OR FREE
                </h3>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[10px] text-blue-200/80">*T&C Apply</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                  <FaFileMedical className="text-sm" />
                </div>
              </div>
            </div>

            {/* Banner 2 (WhatsApp Booking) */}
            <div className="relative overflow-hidden rounded-3xl bg-[#e3f4ec] border border-emerald-200/60 p-6 text-slate-900 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
                  Book your lab tests effortlessly via <span className="text-emerald-700 inline-flex items-center gap-1"><FaWhatsapp className="inline text-emerald-600" /> WhatsApp.</span>
                </h3>
                <p className="mt-2 text-xs text-slate-600 font-medium">
                  Your convenience is our priority
                </p>
              </div>
              <div className="mt-6">
                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center rounded-xl bg-[#1b4e78] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#153d5e] transition shadow-xs"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Banner 3 (Vein Finder / Safe Collection) */}
            <div className="relative overflow-hidden rounded-3xl bg-[#d5f3e9] border border-emerald-200/80 p-6 text-slate-900 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                  No More Multiple Pricks
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed font-normal">
                  Our phlebotomists now use <strong className="text-emerald-900">Vein Finder Device</strong> for a smoother sample collection experience.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center rounded-xl bg-[#1b4e78] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#153d5e] transition shadow-xs"
                >
                  Book A Lab Test
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Membership Promo Bar */}
      <section className="py-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between rounded-2xl bg-[#988be1] px-6 py-4 text-white shadow-xs gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-slate-900 font-bold flex-shrink-0 shadow-xs">
                <FaPlus className="text-xs" />
              </div>
              <p className="text-xs sm:text-sm font-medium tracking-tight">
               Schedule your diagnostic test today and receive accurate reports with expert medical support from Odisha Polyclinic. 
              </p>
            </div>
            <Link to="/appointment" className="text-xs font-semibold underline underline-offset-4 whitespace-nowrap hover:text-white/80 transition">
              Know more &gt;
            </Link>
          </div>
        </div>
      </section>

    

      {/* Services Grid */}
      <section className="bg-slate-50/50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <span className="inline-block rounded-full bg-[#2a687d]/10 border border-[#2a687d]/20 px-3.5 py-1 text-xs font-medium tracking-wide text-[#2a687d] mb-3">
              PRECISION DIAGNOSTICS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Our Diagnostic Services
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal tracking-tight">
              Reliable diagnostic solutions delivered with precision, accuracy, and patient-focused care.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#2a687d]/10 border border-[#2a687d]/20 font-bold text-xs text-[#2a687d] group-hover:bg-[#2a687d] group-hover:text-white transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-normal tracking-tight text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12 md:py-16 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <span className="inline-block rounded-full bg-[#2a687d]/10 border border-[#2a687d]/20 px-3.5 py-1 text-xs font-medium tracking-wide text-[#2a687d] mb-3">
              WHY US
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Choose Odisha Polyclinic?
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-xs transition-all duration-200 hover:bg-white hover:border-slate-300 hover:shadow-md"
              >
                <h3 className="mb-2 text-base sm:text-lg font-bold tracking-tight text-slate-900">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-normal tracking-tight text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-slate-50/50 border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 text-center shadow-xs">
            <span className="inline-block text-xs font-medium tracking-wide text-[#2a687d] bg-[#2a687d]/10 border border-[#2a687d]/20 px-3.5 py-1 rounded-full mb-3">
              FAST & ACCURATE
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Need a Diagnostic Test?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base font-normal tracking-tight text-slate-600 leading-relaxed">
              Schedule your diagnostic test today and receive accurate reports
              with expert medical support from Odisha Polyclinic.
            </p>

            <div className="mt-8">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center rounded-xl bg-[#2a687d] px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-tight text-white hover:bg-[#1c4b5c] transition shadow-xs"
              >
                <FaCalendarCheck className="mr-2.5 h-4 w-4 text-white" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}