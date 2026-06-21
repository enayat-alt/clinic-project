import React from "react";

export default function PricingCards() {
  return (
    <section className="pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#1a504c] mb-10">
          Consultation Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-md border border-[#cdebea]">
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