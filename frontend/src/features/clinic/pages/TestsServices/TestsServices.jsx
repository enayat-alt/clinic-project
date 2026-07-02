
// import { Link } from "react-router-dom";

// const services = [
//   "Physiotherapy",
//   "ECG",
//   "Eye Test",
//   "Ear Test",
//   "PFT",
//   "X-Ray",
//   "CT Scan",
//   "MRI",
//   "Ultrasound",
//   "EEG",
// ];

// export default function TestsServices() {
//   return (
//     <div className="bg-[#e5f9f8]">

//       {/* Hero Section */}
//       <section className="bg-[#e5f9f8] py-16 md:py-20 lg:py-24">
//         <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//           <p className="text-gray-600">
//             <Link to="/">Home</Link> / Tests & Services
//           </p>

//           <h1 className="mt-3 text-3xl font-bold text-[#1a504c] sm:text-4xl lg:text-5xl">
//             Lab and Tests
//           </h1>

//           <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
//             Our clinic provides a wide range of diagnostic tests and medical
//             services to support accurate diagnosis and effective treatment.
//             From pathology tests to routine health screenings, we use modern
//             equipment to ensure reliable results. Convenient, affordable,
//             and patient-focused services—all under one roof.
//           </p>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-16 md:py-20">
//         <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

//           <h2 className="mb-12 text-center text-3xl font-bold text-[#1a504c] sm:text-4xl">
//             Our Services
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-md rounded-2xl p-6 border border-[#cdebea] hover:shadow-xl transition"
//               >
//                 <h3 className="text-xl font-semibold text-[#1a504c]">
//                   {service}
//                 </h3>

//                 <p className="text-gray-600 mt-3">
//                   Professional and reliable {service.toLowerCase()} services
//                   provided by experienced healthcare specialists.
//                 </p>
//               </div>
//             ))}

//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="bg-white py-16 md:py-20">
//         <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

//           <h2 className="mb-10 text-center text-3xl font-bold text-[#1a504c] sm:text-4xl">
//             Why Choose Odisha Polyclinic?
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//             <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
//               Modern Diagnostic Equipment
//             </div>

//             <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
//               Experienced Medical Professionals
//             </div>

//             <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
//               Fast & Accurate Reports
//             </div>

//             <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
//               Affordable Healthcare Services
//             </div>

//             <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
//               Patient-Centered Care
//             </div>

//             <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
//               Easy Appointment Booking
//             </div>

//           </div>
//         </div>
//       </section>
  

//     </div>
//   );
// }



import { Link } from "react-router-dom";

const services = [
  "Physiotherapy",
  "ECG",
  "Eye Test",
  "Ear Test",
  "PFT",
  "X-Ray",
  "CT Scan",
  "MRI",
  "Ultrasound",
  "EEG",
];

export default function TestsServices() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#081A33] via-[#0F2D56] to-[#174A84] py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
       

          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Lab and Tests
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            Our clinic provides a wide range of diagnostic tests and medical
            services to support accurate diagnosis and effective treatment.
            From pathology tests to routine health screenings, we use modern
            equipment to ensure reliable results. Convenient, affordable,
            and patient-focused services—all under one roof.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <h2 className="mb-12 text-center text-3xl font-bold text-[#081A33] sm:text-4xl">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <h3 className="text-xl font-semibold text-[#081A33]">
                  {service}
                </h3>

                <p className="mt-3 text-slate-600">
                  Professional and reliable {service.toLowerCase()} services
                  provided by experienced healthcare specialists.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <h2 className="mb-10 text-center text-3xl font-bold text-[#081A33] sm:text-4xl">
            Why Choose Odisha Polyclinic?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md transition hover:shadow-xl">
              Modern Diagnostic Equipment
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md transition hover:shadow-xl">
              Experienced Medical Professionals
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md transition hover:shadow-xl">
              Fast & Accurate Reports
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md transition hover:shadow-xl">
              Affordable Healthcare Services
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md transition hover:shadow-xl">
              Patient-Centered Care
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md transition hover:shadow-xl">
              Easy Appointment Booking
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}