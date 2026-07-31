
import React from "react";
import { User, Phone, Mail, Calendar, Activity, FileText, Send, Clock } from "lucide-react";

export default function AppointmentForm({
  formData,
  handleChange,
  handleSubmit,
  isLoading,
}) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="w-full">
      {/* Form Header */}
      <div className="mb-10 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#081A33] mb-3 shadow-inner ring-1 ring-slate-200">
          <Calendar className="h-6 w-6 stroke-[2.25]" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-[#081A33] sm:text-3xl">
          Patient Registration Form
        </h2>
        <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
          Please provide your contact and appointment preferences to schedule your visit.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="fullName"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            <User className="h-3.5 w-3.5 text-slate-400" />
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              required
              autoComplete="name"
              spellCheck={false}
              minLength={3}
              maxLength={50}
              pattern="^[A-Za-z ]+$"
              title="Only letters and spaces are allowed."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 transition-all duration-200 focus:border-[#081A33] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#081A33]/10"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label
            htmlFor="phone"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            <Phone className="h-3.5 w-3.5 text-slate-400" />
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              required
              autoComplete="tel"
              inputMode="numeric"
              maxLength={10}
              pattern="[6-9]{1}[0-9]{9}"
              title="Enter a valid 10-digit Indian mobile number."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 transition-all duration-200 focus:border-[#081A33] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#081A33]/10"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            <Mail className="h-3.5 w-3.5 text-slate-400" />
            Email Address <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
              autoComplete="email"
              maxLength={100}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 transition-all duration-200 focus:border-[#081A33] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#081A33]/10"
            />
          </div>
        </div>

        {/* Age */}
        <div className="space-y-1.5">
          <label
            htmlFor="age"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            Age <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              id="age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="e.g. 32"
              required
              min={1}
              max={120}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 transition-all duration-200 focus:border-[#081A33] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#081A33]/10"
            />
          </div>
        </div>

        {/* Appointment Date */}
        <div className="space-y-1.5">
          <label
            htmlFor="appointmentDate"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            Preferred Date <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              id="appointmentDate"
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              min={today}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm font-medium text-slate-800 transition-all duration-200 focus:border-[#081A33] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#081A33]/10"
            />
          </div>
        </div>

        {/* Service */}
        <div className="space-y-1.5">
          <label
            htmlFor="service"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            <Activity className="h-3.5 w-3.5 text-slate-400" />
            Select Service <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm font-medium text-slate-800 transition-all duration-200 focus:border-[#081A33] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#081A33]/10"
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
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              ▼
            </div>
          </div>
        </div>

        {/* Symptoms */}
        <div className="space-y-1.5 md:col-span-2">
          <label
            htmlFor="symptoms"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            <FileText className="h-3.5 w-3.5 text-slate-400" />
            Symptoms / Message
          </label>
          <div className="relative">
            <textarea
              id="symptoms"
              rows={4}
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              placeholder="Describe any health concerns or symptoms you wish to discuss..."
              maxLength={500}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-sm font-medium text-slate-800 placeholder:text-slate-400 transition-all duration-200 focus:border-[#081A33] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#081A33]/10"
            />
          </div>
          <div className="text-right text-[11px] font-medium text-slate-400">
            {formData.symptoms.length}/500 Characters
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-2 md:col-span-2">
          <button
            type="submit"
            disabled={isLoading}
            className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-[#081A33] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#081A33]/20 transition-all duration-300 hover:bg-[#0F4C81] hover:shadow-2xl hover:shadow-[#0F4C81]/30 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </span>
            ) : (
              <>
                <span>Confirm & Book Appointment</span>
                <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}