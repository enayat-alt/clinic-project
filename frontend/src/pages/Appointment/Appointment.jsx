import { useState } from "react";
import { useBookAppointmentMutation } from "../../services/appointmentApi";

export default function Appointment() {
  const [bookAppointment, { isLoading }] =
    useBookAppointmentMutation();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    age: "",
    appointmentDate: "",
    service: "General Consultation",
    symptoms: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await bookAppointment(
        formData
      ).unwrap();

      alert(response.message);

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        age: "",
        appointmentDate: "",
        service: "General Consultation",
        symptoms: "",
      });
    } catch (error) {
      console.error(error);

      alert(
        error?.data?.message ||
          "Failed to book appointment"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#e5f9f8]">
      {/* Hero Section */}
      <section className="bg-[#1a504c] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white">
            Book Appointment
          </h1>

          <p className="text-gray-200 mt-4 text-lg">
            Schedule your appointment with our
            experienced doctors and receive
            quality healthcare services.
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-[#cdebea]">
            <h2 className="text-3xl font-bold text-[#1a504c] mb-2 text-center">
              Appointment Form
            </h2>

            <p className="text-center text-gray-600 mb-8">
              Fill in your details and our team
              will contact you shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Full Name */}
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

              {/* Phone */}
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

              {/* Email */}
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

              {/* Age */}
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

              {/* Date */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Appointment Date
                </label>

                <input
                  type="date"
                  name="appointmentDate"
                  value={
                    formData.appointmentDate
                  }
                  onChange={handleChange}
                  required
                  className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
                />
              </div>

              {/* Service */}
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
                  <option>
                    General Consultation
                  </option>
                  <option>
                    Diabetes & Thyroid
                    Management
                  </option>
                  <option>
                    Blood Pressure Monitoring
                  </option>
                  <option>
                    Skin & Hair Treatment
                  </option>
                  <option>
                    Joint & Nerve Pain Care
                  </option>
                  <option>
                    Headache & Migraine
                  </option>
                  <option>
                    Digestive Issues
                  </option>
                  <option>
                    Mental Health Consultation
                  </option>
                  <option>
                    Women's Health
                  </option>
                  <option>
                    Sexual Health
                  </option>
                  <option>PRP Therapy</option>
                  <option>Physiotherapy</option>
                  <option>Health Check-up</option>
                </select>
              </div>

              {/* Symptoms */}
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

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="md:col-span-2 bg-[#1a504c] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#143d3a] transition duration-300 disabled:opacity-50"
              >
                {isLoading
                  ? "Booking Appointment..."
                  : "Book Appointment"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
    </div>
  );
}