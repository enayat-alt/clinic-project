
import { useState } from "react";
import AppointmentForm from "../../components/Appointment/AppointmentForm";
import PricingCards from "../../components/Appointment/PricingCards";
import { useBookAppointmentMutation } from "../../../../services/appointmentApi";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

import { FaCheckCircle } from "react-icons/fa";

export default function Appointment() {
  const [bookAppointment, { isLoading }] = useBookAppointmentMutation();

  const [openSuccess, setOpenSuccess] = useState(false);

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
      await bookAppointment(formData).unwrap();

      setOpenSuccess(true);

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
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#081A33] via-[#0F2D56] to-[#174A84] pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="font-semibold uppercase tracking-[3px] text-cyan-300">
            Odisha Polyclinic
          </span>

          <h1 className="mt-4 text-5xl font-bold text-white">
            Book Appointment
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Schedule your consultation with our experienced healthcare
            professionals. Fill in the appointment form below and our team
            will contact you shortly to confirm your booking.
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 md:p-10">
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
      <section className="bg-slate-50 py-20">
        <PricingCards />
      </section>

      {/* Success Popup */}
      <Dialog
        open={openSuccess}
        onClose={() => setOpenSuccess(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "24px",
            padding: "12px",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            pt: 4,
            pb: 1,
          }}
        >
          <FaCheckCircle
            size={80}
            color="#22c55e"
            style={{
              marginBottom: "15px",
            }}
          />

          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#081A33",
              margin: 0,
            }}
          >
            Appointment Booked!
          </h2>
        </DialogTitle>

        <DialogContent>
          <DialogContentText
            align="center"
            sx={{
              color: "#475569",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            Thank you for choosing
            <strong> Odisha Polyclinic</strong>.
            <br />
            <br />
            Your appointment request has been received successfully.
            <br />
            Our team will contact you shortly to confirm your appointment.
          </DialogContentText>
        </DialogContent>

        <DialogActions
          sx={{
            justifyContent: "center",
            pb: 3,
          }}
        >
          <Button
            variant="contained"
            onClick={() => setOpenSuccess(false)}
            sx={{
              px: 5,
              py: 1.2,
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 600,
              background: "linear-gradient(90deg,#081A33,#0F4C81)",

              "&:hover": {
                background: "#0F4C81",
              },
            }}
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}