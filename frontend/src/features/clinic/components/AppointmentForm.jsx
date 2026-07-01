import React from "react";

export default function AppointmentForm({
  formData,
  handleChange,
  handleSubmit,
  isLoading,
}) {
  return (
    <>
      <h2 className="mb-2 text-2xl font-bold text-[#1a504c] sm:text-3xl">
        Appointment Form
      </h2>

      <p className="mb-8 text-center text-gray-600">
        Fill in your details and our team will contact you shortly.
      </p>

      <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
            className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
            className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Age
          </label>

          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
            required
            className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Appointment Date
          </label>

          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
            className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Select Service
          </label>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
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

        <div className="md:col-span-2">
          <label className="block mb-2 font-medium text-gray-700">
            Symptoms / Message
          </label>

          <textarea
            rows="5"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            placeholder="Describe your health concern..."
            className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="rounded-xl bg-[#1a504c] py-4 text-lg font-semibold text-white transition duration-300 hover:bg-[#143d3a] disabled:opacity-50 md:col-span-2"
        >
          {isLoading
            ? "Booking Appointment..."
            : "Book Appointment"}
        </button>
      </form>
    </>
  );
}