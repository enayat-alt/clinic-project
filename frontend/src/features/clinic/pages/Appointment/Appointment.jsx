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
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#cdebea] bg-white p-6 shadow-xl sm:p-8 md:p-10">
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
