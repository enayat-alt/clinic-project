import { useState } from "react";

import AppointmentForm from "../../components/Appointment/AppointmentForm";
import PricingCards from "../../components/Appointment/PricingCards";
import { useBookAppointmentMutation } from "../../../../services/appointmentApi";

const initialFormData = {
  fullName: "",
  phone: "",
  email: "",
  age: "",
  appointmentDate: "",
  service: "General Consultation",
  symptoms: "",
};

export default function Appointment() {
  const [bookAppointment, { isLoading }] =
    useBookAppointmentMutation();

  const [openSuccess, setOpenSuccess] = useState(false);

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await bookAppointment(formData).unwrap();

      setOpenSuccess(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error(error);

      alert(
        error?.data?.message ||
          "Failed to book appointment"
      );
    }
  };

  return (
    <main className="bg-white text-slate-800 antialiased min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-[#2a687d]/10 px-3.5 py-1 text-xs font-medium tracking-wide text-[#2a687d] border border-[#2a687d]/20 mb-3">
            Odisha Polyclinic
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Book Appointment
          </h1>

          <p className="mt-3 text-sm sm:text-base font-normal tracking-tight text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Schedule your consultation with our experienced
            healthcare professionals. Fill in the appointment
            form below and our team will contact you shortly
            to confirm your booking.
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-12 md:py-16 bg-slate-50/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10 md:p-12">
            <AppointmentForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-12 md:py-16 border-t border-slate-100">
        <PricingCards />
      </section>

      {/* Success Modal */}
      {openSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="appointment-success-title"
          onClick={() => setOpenSuccess(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Success Icon */}
            <div className="mb-5 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100">
                <svg
                  viewBox="0 0 24 24"
                  className="h-12 w-12 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2
              id="appointment-success-title"
              className="text-center text-2xl font-bold tracking-tight text-slate-900"
            >
              Appointment Booked!
            </h2>

            {/* Message */}
            <p className="mt-4 text-center text-sm leading-7 text-slate-500">
              Thank you for choosing{" "}
              <strong className="font-semibold text-slate-900">
                Odisha Polyclinic
              </strong>
              .
            </p>

            <p className="mt-3 text-center text-sm leading-7 text-slate-500">
              Your appointment request has been received
              successfully. Our team will contact you shortly
              to confirm your schedule.
            </p>

            {/* Button */}
            <div className="mt-7 flex justify-center">
              <button
                type="button"
                onClick={() => setOpenSuccess(false)}
                className="rounded-xl bg-[#2a687d] px-12 py-3 text-sm font-semibold text-white transition hover:bg-[#1c4b5c] focus:outline-none focus:ring-2 focus:ring-[#2a687d] focus:ring-offset-2"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}