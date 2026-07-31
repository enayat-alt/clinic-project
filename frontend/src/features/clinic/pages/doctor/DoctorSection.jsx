
import { Link } from "react-router-dom";
import { FaShieldAlt, FaPhoneAlt, FaCheckCircle, FaStar } from "react-icons/fa";

export default function DoctorSection() {
  return (
    <main className="bg-[#f8fafc] min-h-screen text-slate-800 antialiased">
      {/* Breadcrumb & Clean White Banner Section */}
      <section className="bg-white text-slate-900 pt-24 pb-12 md:pt-28 md:pb-16 border-b border-slate-100 relative overflow-hidden">
        
        
     
        {/* Banner Inner Content */}
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Column: Text & CTA */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#2a687d]/10 px-3.5 py-1 rounded-full text-xs font-medium text-[#2a687d] border border-[#2a687d]/20 mb-4">
                <FaStar className="text-amber-500 text-xs" /> 15+ Years of Experience
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Meet Our Lead Doctor <br />
                <span className="text-[#2a687d] font-normal text-2xl sm:text-3xl">Dr. Shaik Faraz Ahmmed</span>
              </h1>
              
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
                Consultant Physician & Head Consultant at Odisha Polyclinic™. Expert in complex diagnostic care, chronic disease management, and personalized treatments.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center rounded-xl bg-[#2a687d] px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-[#1c4b5c] transition shadow-xs"
                >
                  Book Consultation Now
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-500 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-[#2a687d] text-sm" />
                  <span>Private and Secure Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-600 text-sm" />
                  <span>Verified Medical Expert</span>
                </div>
              </div>
            </div>

            {/* Right Column: Doctor Image Preview inside Banner */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-teal-500 to-cyan-400 opacity-20 blur-lg"></div>
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-md max-w-sm">
                  <img
                    src="Drfaraz.webp"
                    alt="Dr. Shaik Faraz Ahmmed"
                    className="w-full rounded-2xl object-cover h-80 sm:h-96"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-50 border-t border-slate-100 py-3 hidden md:block">
          <div className="mx-auto max-w-7xl px-6 flex justify-around text-center text-xs text-slate-600">
            <div><strong className="text-slate-900 text-sm">15+ Years</strong> Clinical Experience</div>
            <div>•</div>
            <div><strong className="text-slate-900 text-sm">1,000+</strong> Complex Cases Solved</div>
            <div>•</div>
            <div><strong className="text-slate-900 text-sm">4.8/5</strong> Patient Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Main Details Content Section */}
      <section id="consultation" className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 md:p-12 shadow-xs">
            
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="inline-block text-xs font-medium tracking-wide text-[#2a687d] bg-[#2a687d]/10 border border-[#2a687d]/20 px-3 py-1 rounded-full">
                Consultant Physician
              </span>
              <span className="text-xs font-medium text-slate-500">Reg. No. 35529/OCMR</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-6">
              Healthcare Expert & Founder
            </h2>

            <p className="mb-4 text-sm sm:text-base font-normal tracking-tight text-slate-600 leading-relaxed">
              Dr. Shaik Faraz Ahmmed is a Consultant Physician, FMGE Mentor, and PRP Therapy Specialist with over 12 years of clinical experience since 2012. He serves as the Head Consultant at Odisha Polyclinic™ and is the Founder & CEO of FMGE Coaching Center.
            </p>

            <p className="mb-6 text-sm sm:text-base font-normal tracking-tight text-slate-600 leading-relaxed">
              He completed his M.B.B.S./M.D. (Physician – CIS) and is registered with the Odisha Council of Medical Registration. Throughout his career, he has built a reputation for accurate diagnosis, compassionate patient care, and effective treatment plans.
            </p>

            {/* Highlight Callout */}
            <div className="rounded-2xl border border-slate-200/80 border-l-4 border-l-[#2a687d] bg-slate-50/70 p-5 sm:p-6 my-6">
              <h3 className="mb-2 text-base sm:text-lg font-bold tracking-tight text-slate-900">
                Diagnostic Excellence
              </h3>
              <p className="text-xs sm:text-sm font-normal tracking-tight text-slate-600 leading-relaxed">
                Dr. Ahmmed has successfully diagnosed and treated more than 1,000 complex and overlooked cases, often providing solutions where major hospitals could not identify the root cause of the problem.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                <span>Available for direct consultation & clinic visits.</span>
              </div>
              <Link
                to="/appointment"
                className="rounded-xl bg-[#2a687d] px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-tight text-white hover:bg-[#1c4b5c] transition shadow-xs inline-flex items-center gap-2"
              >
                <FaPhoneAlt className="text-xs" /> Book Consultation
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}