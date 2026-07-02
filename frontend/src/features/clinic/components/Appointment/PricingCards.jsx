import React from "react";

export default function PricingCards() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="font-semibold uppercase tracking-[3px] text-blue-600">
            Transparent Pricing
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#081A33] sm:text-4xl">
            Consultation Pricing
          </h2>

          <p className="mt-4 text-slate-600">
            Affordable healthcare with transparent pricing and no hidden
            charges.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="mb-4 text-xl font-bold text-[#081A33]">
              Doctor Consultation
            </h3>

            <p className="text-4xl font-bold text-[#0F4C81]">
              ₹300
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              General physician consultation with experienced healthcare
              professionals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-[#081A33] via-[#0F2D56] to-[#174A84] p-8 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Most Popular
            </span>

            <h3 className="mt-5 mb-4 text-xl font-bold">
              Full Body Check-up
            </h3>

            <p className="text-4xl font-bold">
              ₹890
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Comprehensive health screening with essential diagnostic tests.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="mb-4 text-xl font-bold text-[#081A33]">
              PRP Therapy
            </h3>

            <p className="text-4xl font-bold text-[#0F4C81]">
              ₹1,990
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Advanced Platelet-Rich Plasma therapy performed by experienced
              specialists.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}