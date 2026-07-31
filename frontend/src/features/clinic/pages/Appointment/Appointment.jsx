// import { useState } from "react";
// import AppointmentForm from "../../components/Appointment/AppointmentForm";
// import PricingCards from "../../components/Appointment/PricingCards";
// import { useBookAppointmentMutation } from "../../../../services/appointmentApi";

// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
//   Button,
// } from "@mui/material";

// import { FaCheckCircle } from "react-icons/fa";

// export default function Appointment() {
//   const [bookAppointment, { isLoading }] = useBookAppointmentMutation();

//   const [openSuccess, setOpenSuccess] = useState(false);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     age: "",
//     appointmentDate: "",
//     service: "General Consultation",
//     symptoms: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await bookAppointment(formData).unwrap();

//       setOpenSuccess(true);

//       setFormData({
//         fullName: "",
//         phone: "",
//         email: "",
//         age: "",
//         appointmentDate: "",
//         service: "General Consultation",
//         symptoms: "",
//       });
//     } catch (error) {
//       console.error(error);

//       alert(error?.data?.message || "Failed to book appointment");
//     }
//   };

//   return (
//     <main className="bg-slate-50 min-h-screen">
//       {/* Top Header Banner */}
//       <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-[#081A33] text-white">
//         <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
//           <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300 bg-white/10 px-3.5 py-1.5 rounded-full inline-block border border-white/10 backdrop-blur-sm mb-3">
//             Odisha Polyclinic
//           </span>
//           <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
//             Book Appointment
//           </h1>
//           <p className="mt-3 text-sm sm:text-base font-normal tracking-tight text-slate-300 max-w-2xl mx-auto leading-relaxed">
//             Schedule your consultation with our experienced healthcare professionals.
//             Fill in the appointment form below and our team will contact you shortly to confirm your booking.
//           </p>
//         </div>
//       </section>

//       {/* Appointment Form Section */}
//       <section className="relative -mt-6 py-12 md:py-16">
//         <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
//           <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-2xl shadow-slate-200/60 sm:p-10 md:p-12">
//             <AppointmentForm
//               formData={formData}
//               handleChange={handleChange}
//               handleSubmit={handleSubmit}
//               isLoading={isLoading}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="bg-slate-50 py-16 md:py-20">
//         <PricingCards />
//       </section>

//       {/* Success Popup */}
//       <Dialog
//         open={openSuccess}
//         onClose={() => setOpenSuccess(false)}
//         maxWidth="xs"
//         fullWidth
//         PaperProps={{
//           sx: {
//             borderRadius: "24px",
//             padding: "16px",
//             boxShadow: "0 25px 50px -12px rgba(8, 26, 51, 0.25)",
//           },
//         }}
//       >
//         <DialogTitle
//           sx={{
//             textAlign: "center",
//             pt: 3,
//             pb: 1,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 ring-8 ring-emerald-50/50">
//             <FaCheckCircle size={52} className="text-emerald-500" />
//           </div>

//           <h2 className="text-2xl font-bold tracking-tight text-[#081A33]">
//             Appointment Booked!
//           </h2>
//         </DialogTitle>

//         <DialogContent>
//           <DialogContentText
//             align="center"
//             sx={{
//               color: "#475569",
//               fontSize: "15px",
//               lineHeight: 1.7,
//               mt: 1,
//             }}
//           >
//             Thank you for choosing{" "}
//             <strong className="text-[#081A33] font-semibold">Odisha Polyclinic</strong>.
//             <br />
//             <br />
//             Your appointment request has been received successfully. Our team will contact you shortly to confirm your schedule.
//           </DialogContentText>
//         </DialogContent>

//         <DialogActions
//           sx={{
//             justifyContent: "center",
//             pb: 2,
//             pt: 1,
//           }}
//         >
//           <Button
//             variant="contained"
//             onClick={() => setOpenSuccess(false)}
//             sx={{
//               px: 6,
//               py: 1.4,
//               borderRadius: "14px",
//               textTransform: "none",
//               fontSize: "15px",
//               fontWeight: 600,
//               background: "#081A33",
//               boxShadow: "0 10px 15px -3px rgba(8, 26, 51, 0.2)",

//               "&:hover": {
//                 background: "#0F4C81",
//                 boxShadow: "0 20px 25px -5px rgba(15, 76, 129, 0.3)",
//               },
//             }}
//           >
//             Continue
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </main>
//   );
// }

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
    <main className="bg-white text-slate-800 antialiased min-h-screen">
      
      {/* Clean White Top Header Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-[#2a687d]/10 px-3.5 py-1 text-xs font-medium tracking-wide text-[#2a687d] border border-[#2a687d]/20 mb-3">
            Odisha Polyclinic
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Book Appointment
          </h1>
          <p className="mt-3 text-sm sm:text-base font-normal tracking-tight text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Schedule your consultation with our experienced healthcare professionals.
            Fill in the appointment form below and our team will contact you shortly to confirm your booking.
          </p>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-12 md:py-16 bg-slate-50/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs sm:p-10 md:p-12">
            <AppointmentForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-12 md:py-16 border-t border-slate-100">
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
            padding: "16px",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e2e8f0",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            pt: 3,
            pb: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100">
            <FaCheckCircle size={48} className="text-emerald-600" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Appointment Booked!
          </h2>
        </DialogTitle>

        <DialogContent>
          <DialogContentText
            align="center"
            sx={{
              color: "#64748b",
              fontSize: "14px",
              lineHeight: 1.7,
              mt: 1,
            }}
          >
            Thank you for choosing{" "}
            <strong className="text-slate-900 font-semibold">Odisha Polyclinic</strong>.
            <br />
            <br />
            Your appointment request has been received successfully. Our team will contact you shortly to confirm your schedule.
          </DialogContentText>
        </DialogContent>

        <DialogActions
          sx={{
            justifyContent: "center",
            pb: 2,
            pt: 1,
          }}
        >
          <Button
            variant="contained"
            onClick={() => setOpenSuccess(false)}
            disableElevation
            sx={{
              px: 6,
              py: 1.2,
              borderRadius: "12px",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 600,
              background: "#2a687d",
              "&:hover": {
                background: "#1c4b5c",
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