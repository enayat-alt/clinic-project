import React from "react";

export default function AppointmentForm({
  formData,
  handleChange,
  handleSubmit,
  isLoading,
}) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-[#081A33] sm:text-3xl">
          Book an Appointment
        </h2>

        <p className="mt-2 text-slate-600">
          Fill in your details and our team will contact you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block font-medium text-slate-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            autoComplete="name"
            spellCheck={false}
            minLength={3}
            maxLength={50}
            pattern="^[A-Za-z ]+$"
            title="Only letters and spaces are allowed."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 placeholder:text-slate-400 transition focus:border-[#0F4C81] focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block font-medium text-slate-700"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>

          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter 10-digit mobile number"
            required
            autoComplete="tel"
            inputMode="numeric"
            maxLength={10}
            pattern="[6-9]{1}[0-9]{9}"
            title="Enter a valid 10-digit Indian mobile number."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 placeholder:text-slate-400 transition focus:border-[#0F4C81] focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-medium text-slate-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>

          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            autoComplete="email"
            maxLength={100}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 placeholder:text-slate-400 transition focus:border-[#0F4C81] focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
          />
        </div>

        {/* Age */}
        <div>
          <label
            htmlFor="age"
            className="mb-2 block font-medium text-slate-700"
          >
            Age <span className="text-red-500">*</span>
          </label>

          <input
            id="age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
            min={1}
            max={120}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 placeholder:text-slate-400 transition focus:border-[#0F4C81] focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
          />
        </div>

        {/* Appointment Date */}
        <div>
          <label
            htmlFor="appointmentDate"
            className="mb-2 block font-medium text-slate-700"
          >
            Appointment Date <span className="text-red-500">*</span>
          </label>

          <input
            id="appointmentDate"
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
            min={today}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 transition focus:border-[#0F4C81] focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
          />
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="mb-2 block font-medium text-slate-700"
          >
            Select Service <span className="text-red-500">*</span>
          </label>

          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 transition focus:border-[#0F4C81] focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
          >
            <option>General Consultation</option>
            <option>Diabetes & Thyroid Management</option>
            <option>Blood Pressure Monitoring</option>
            <option>Skin & Hair Treatment</option>
            <option>Joint & Nerve Pain Care</option>
            <option>Headache & Migraine</option>
            <option>Digestive Issues</option>
            <option>Mental Health Consultation</option>
            <option>Women's Health</option>
            <option>Sexual Health</option>
            <option>PRP Therapy</option>
            <option>Physiotherapy</option>
            <option>Health Check-up</option>
          </select>
        </div>

        {/* Symptoms */}
        <div className="md:col-span-2">
          <label
            htmlFor="symptoms"
            className="mb-2 block font-medium text-slate-700"
          >
            Symptoms / Message
          </label>

          <textarea
            id="symptoms"
            rows={5}
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            placeholder="Describe your health concern..."
            maxLength={500}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 placeholder:text-slate-400 transition focus:border-[#0F4C81] focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
          />

          <div className="mt-2 text-right text-xs text-slate-500">
            {formData.symptoms.length}/500 Characters
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="
    md:col-span-2
    mx-auto
    inline-flex
    items-center
    justify-center
    rounded-xl
    bg-[#081A33]
    px-5
    py-2.5
    text-sm
    font-medium
    text-white
    shadow-md
    transition-all
    duration-300
    hover:bg-[#0F4C81]
    hover:shadow-lg
    disabled:cursor-not-allowed
    disabled:opacity-50
  "
        >
          {isLoading ? "Booking Appointment..." : "Book Appointment"}
        </button>
      </form>
    </>
  );
}
