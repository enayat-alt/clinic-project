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
//     <div>
//       {/* Hero Section */}
//       <section className="bg-blue-50 py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <p className="text-gray-600">
//             <Link to="/">Home</Link> / Tests & Services
//           </p>

//           <h1 className="text-4xl font-bold text-blue-700 mt-3">
//             Tests & Services
//           </h1>

//           <p className="mt-4 text-gray-600 max-w-3xl">
//             Our clinic provides a wide range of diagnostic tests and medical
//             services to support accurate diagnosis and effective treatment.
//             From pathology tests to routine health screenings, we use modern
//             equipment to ensure reliable results. Convenient, affordable,
//             and patient-focused services—all under one roof.
//           </p>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Our Services
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
//               >
//                 <h3 className="text-xl font-semibold text-blue-600">
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
//       <section className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-10">
//             Why Choose Odisha Polyclinic?
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-xl shadow">
//               Modern Diagnostic Equipment
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow">
//               Experienced Medical Professionals
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow">
//               Fast & Accurate Reports
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow">
//               Affordable Healthcare Services
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow">
//               Patient-Centered Care
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow">
//               Easy Appointment Booking
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Appointment Form */}
//      {/* Appointment Form */}
// <section className="py-16">
//   <div className="max-w-3xl mx-auto px-4">
//     <div className="bg-white shadow-lg rounded-xl p-8">
//       <h2 className="text-3xl font-bold text-center mb-8">
//         Make an Appointment
//       </h2>

//       <form className="space-y-5">
//         {/* Name */}
//         <input
//           type="text"
//           placeholder="Full Name"
//           className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Phone */}
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Email */}
//         <input
//           type="email"
//           placeholder="Email Address"
//           className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Test Dropdown */}
//         <select
//           className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           defaultValue=""
//         >
//           <option value="" disabled>
//             Select Test / Service
//           </option>

//           {services.map((service, index) => (
//             <option key={index} value={service}>
//               {service}
//             </option>
//           ))}
//         </select>

//         {/* Date */}
//         <input
//           type="date"
//           className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Time */}
//         <input
//           type="time"
//           className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Message */}
//         <textarea
//           rows="5"
//           placeholder="Additional Information / Message"
//           className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         ></textarea>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
//         >
//           Book Appointment
//         </button>
//       </form>
//     </div>
//   </div>
// </section>

//       {/* Departments + Hours */}
//       <section className="bg-blue-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
//           <div>
//             <h3 className="text-2xl font-bold mb-5">
//               Our Departments
//             </h3>

//             <ul className="space-y-3">
//               <li>Department</li>
//               <li>Consultation</li>
//               <li>Tests & Services</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-2xl font-bold mb-5">
//               Opening Hours
//             </h3>

//             <ul className="space-y-3">
//               <li>Mon - Tues : 6:00 AM - 10:00 PM</li>
//               <li>Wed - Thurs : 8:00 AM - 6:00 PM</li>
//               <li>Fri - Sat : 8:00 AM - 8:00 PM</li>
//               <li>Sunday : Closed</li>
//             </ul>
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
    <div className="bg-[#e5f9f8]">

      {/* Hero Section */}
      <section className="bg-[#e5f9f8] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-600">
            <Link to="/">Home</Link> / Tests & Services
          </p>

          <h1 className="text-4xl font-bold text-[#1a504c] mt-3">
            Lab and Tests
          </h1>

          <p className="mt-4 text-gray-600 max-w-3xl leading-7">
            Our clinic provides a wide range of diagnostic tests and medical
            services to support accurate diagnosis and effective treatment.
            From pathology tests to routine health screenings, we use modern
            equipment to ensure reliable results. Convenient, affordable,
            and patient-focused services—all under one roof.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12 text-[#1a504c]">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 border border-[#cdebea] hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-[#1a504c]">
                  {service}
                </h3>

                <p className="text-gray-600 mt-3">
                  Professional and reliable {service.toLowerCase()} services
                  provided by experienced healthcare specialists.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-10 text-[#1a504c]">
            Why Choose Odisha Polyclinic?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
              Modern Diagnostic Equipment
            </div>

            <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
              Experienced Medical Professionals
            </div>

            <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
              Fast & Accurate Reports
            </div>

            <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
              Affordable Healthcare Services
            </div>

            <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
              Patient-Centered Care
            </div>

            <div className="bg-[#e5f9f8] p-6 rounded-xl shadow">
              Easy Appointment Booking
            </div>

          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">

          <div className="bg-white shadow-lg rounded-3xl p-8 border border-[#cdebea]">

            <h2 className="text-3xl font-bold text-center mb-8 text-[#1a504c]">
              Make an Appointment
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-[#cdebea] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-[#cdebea] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-[#cdebea] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              />

              <select
                className="w-full border border-[#cdebea] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Test / Service
                </option>

                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <input
                type="date"
                className="w-full border border-[#cdebea] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              />

              <input
                type="time"
                className="w-full border border-[#cdebea] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              />

              <textarea
                rows="5"
                placeholder="Additional Information / Message"
                className="w-full border border-[#cdebea] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#1a504c] text-white py-3 rounded-lg font-semibold hover:bg-[#143d3a] transition"
              >
                Book Appointment
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Departments + Hours */}
      <section className="bg-[#1a504c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">

          <div>
            <h3 className="text-2xl font-bold mb-5">
              Our Departments
            </h3>

            <ul className="space-y-3">
              <li>General Medicine</li>
              <li>Consultation</li>
              <li>Tests & Services</li>
              <li>Physiotherapy</li>
              <li>PRP Therapy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-5">
              Opening Hours
            </h3>

            <ul className="space-y-3">
              <li>Monday - Saturday: 8:00 AM - 8:00 PM</li>
              <li>Sunday: Emergency Consultation Only</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}