import React from "react";

export default function PricingCards() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold text-[#1a504c] sm:text-4xl">
          Consultation Pricing
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[#cdebea] bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold mb-2">
              Doctor Consultation
            </h3>

            <p className="text-3xl font-bold text-[#1a504c]">
              ₹300
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md border border-[#cdebea]">
            <h3 className="text-xl font-bold mb-2">
              Full Body Check-up
            </h3>

            <p className="text-3xl font-bold text-[#1a504c]">
              ₹890
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md border border-[#cdebea]">
            <h3 className="text-xl font-bold mb-2">
              PRP Therapy
            </h3>

            <p className="text-3xl font-bold text-[#1a504c]">
              ₹1,990
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}