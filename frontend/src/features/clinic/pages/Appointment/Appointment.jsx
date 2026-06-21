import { useState } from "react";
import { Link } from "react-router-dom";
import AppointmentForm from "../../components/AppointmentForm";
import PricingCards from "../../components/PricingCards";
import { useBookAppointmentMutation } from "../../../../services/appointmentApi";

export default function Appointment() {
  const [bookAppointment, { isLoading }] = useBookAppointmentMutation();

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
      const response = await bookAppointment(formData).unwrap();

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

      alert(error?.data?.message || "Failed to book appointment");
    }
  };

  return (
  <div className="min-h-screen bg-[#e5f9f8]">
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-[#cdebea]">
          <AppointmentForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>
    </section>

    <PricingCards />
  </div>
);

}
