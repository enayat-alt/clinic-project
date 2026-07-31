export default function DoctorSection() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Blue Top Header Banner */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-[#081A33] text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[3px] text-cyan-300">
            15+ Years of Experience
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-normal tracking-tight text-white">
            Meet Our Lead Doctor
          </h1>
          <p className="mt-3 text-sm sm:text-base font-normal tracking-tight text-slate-300 max-w-2xl mx-auto">
            Dr. Shaik Faraz Ahmmed — Consultant Physician & Head Consultant at Odisha Polyclinic™
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Doctor Image */}
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
                <img
                  src="Drfaraz.webp"
                  alt="Dr. Shaik Faraz Ahmmed"
                  className="w-full max-w-md rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* Doctor Details */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <span className="text-sm font-semibold uppercase tracking-[2px] text-blue-600">
                Consultant Physician
              </span>

              <h2 className="mt-3 mb-6 text-3xl font-bold text-[#081A33]">
                Healthcare Expert & Founder
              </h2>

              <p className="mb-6 leading-8 text-slate-600">
                Dr. Shaik Faraz Ahmmed is a Consultant Physician, FMGE Mentor,
                and PRP Therapy Specialist with over 12 years of clinical
                experience since 2012. He serves as the Head Consultant at
                Odisha Polyclinic™ and is the Founder & CEO of FMGE Coaching
                Center.
              </p>

              <p className="mb-8 leading-8 text-slate-600">
                He completed his M.B.B.S./M.D. (Physician – CIS) and is
                registered with the Odisha Council of Medical Registration
                (Reg. No. 35529/OCMR). Throughout his career, he has built a
                reputation for accurate diagnosis, compassionate patient care,
                and effective treatment plans.
              </p>

              <div className="rounded-2xl border border-slate-200 border-l-4 border-l-[#0F4C81] bg-slate-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-[#081A33]">
                  Diagnostic Excellence
                </h3>

                <p className="leading-7 text-slate-600">
                  Dr. Ahmmed has successfully diagnosed and treated more than
                  1,000 complex and overlooked cases, often providing solutions
                  where major hospitals could not identify the root cause of the
                  problem.
                </p>
              </div>

              <div className="mt-8">
                <button className="rounded-xl bg-[#081A33] px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-[#0F4C81]">
                  Book Consultation
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}