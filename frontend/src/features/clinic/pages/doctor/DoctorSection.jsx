// export default function DoctorSection() {
//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <span className="text-[#1a504c] font-semibold uppercase tracking-wider">
//             12+ Years of Experience
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[#121414]">
//             Meet Our Doctor
//           </h2>

//           <p className="text-xl text-[#1a504c] font-semibold mt-2">
//             Dr. Shaik Faraz Ahmmed
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Doctor Image */}
//           <div className="flex justify-center overflow-hidden rounded-3xl">
//             <img
//               src="doctor.jpg"
//               alt="Dr. Shaik Faraz Ahmmed"
//               className="w-full max-w-md rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105"
//             />
//           </div>

//           {/* Doctor Details */}
//           <div>
//             <h3 className="text-3xl font-bold text-[#1a504c] mb-6">
//               Consultant Physician & Healthcare Expert
//             </h3>

//             <p className="text-gray-700 leading-8 mb-6">
//               Dr. Shaik Faraz Ahmmed is a Consultant Physician, FMGE Mentor, and
//               PRP Therapy Specialist with over 12 years of clinical experience
//               since 2012. He serves as the Head Consultant at Odisha Polyclinic™
//               and is the Founder & CEO of FMGE Coaching Center.
//             </p>

//             <p className="text-gray-700 leading-8 mb-6">
//               He completed his M.B.B.S./M.D. (Physician – CIS) and is registered
//               with the Odisha Council of Medical Registration (Reg. No.
//               35529/OCMR). Throughout his career, he has built a reputation for
//               accurate diagnosis, compassionate patient care, and effective
//               treatment plans.
//             </p>

//             {/* <div className="grid md:grid-cols-2 gap-4 mb-8">

//               <div className="bg-gray-50 p-4 rounded-xl">
//                 ✓ General Medicine
//               </div>

//               <div className="bg-gray-50 p-4 rounded-xl">
//                 ✓ Diagnostic Second Opinions
//               </div>

//               <div className="bg-gray-50 p-4 rounded-xl">
//                 ✓ PRP Therapy
//               </div>

//               <div className="bg-gray-50 p-4 rounded-xl">
//                 ✓ Physiotherapy
//               </div>

//               <div className="bg-gray-50 p-4 rounded-xl">
//                 ✓ Minor Surgical Procedures
//               </div>

//               <div className="bg-gray-50 p-4 rounded-xl">
//                 ✓ ECG & Diagnostic Tests
//               </div>

//               <div className="bg-gray-50 p-4 rounded-xl">
//                 ✓ Hair & Skin Care
//               </div>

//               <div className="bg-gray-50 p-4 rounded-xl">
//                 ✓ Wellness & Yoga Programs
//               </div>

//             </div> */}

//             <div className="bg-[#1a504c] text-white p-6 rounded-2xl">
//               <h4 className="text-xl font-bold mb-3">Diagnostic Excellence</h4>

//               <p className="leading-7">
//                 Dr. Ahmmed has successfully diagnosed and treated more than
//                 1,000 complex and overlooked cases, often providing solutions
//                 where major hospitals could not identify the root cause of the
//                 problem.
//               </p>
//             </div>

//             <div className="mt-8">
//               <button className="bg-[#1a504c] text-white px-8 py-3 rounded-xl font-semibold hover:bg-black transition">
//                 Book Consultation
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function DoctorSection() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#081A33] via-[#0F2D56] to-[#174A84] pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="font-semibold uppercase tracking-[3px] text-cyan-300">
            12+ Years of Experience
          </span>

          <h1 className="mt-4 text-5xl font-bold text-white">
            Meet Our Doctor
          </h1>

          <p className="mt-4 text-xl font-semibold text-slate-200">
            Dr. Shaik Faraz Ahmmed
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Doctor Image */}
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
                <img
                  src="doctor.jpg"
                  alt="Dr. Shaik Faraz Ahmmed"
                  className="w-full max-w-md rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* Doctor Details */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <span className="text-sm font-semibold uppercase tracking-[2px] text-blue-600">
                Consultant Physician
              </span>

              <h2 className="mt-3 mb-6 text-3xl font-bold text-[#081A33]">
                Healthcare Expert & Founder
              </h2>

              <p className="mb-6 leading-8 text-slate-600">
                Dr. Shaik Faraz Ahmmed is a Consultant Physician, FMGE Mentor,
                and PRP Therapy Specialist with over 12 years of clinical
                experience since 2012. He serves as the Head Consultant at
                Odisha Polyclinic™ and is the Founder & CEO of FMGE Coaching
                Center.
              </p>

              <p className="mb-8 leading-8 text-slate-600">
                He completed his M.B.B.S./M.D. (Physician – CIS) and is
                registered with the Odisha Council of Medical Registration
                (Reg. No. 35529/OCMR). Throughout his career, he has built a
                reputation for accurate diagnosis, compassionate patient care,
                and effective treatment plans.
              </p>

              <div className="rounded-2xl border border-slate-200 border-l-4 border-l-[#0F4C81] bg-slate-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-[#081A33]">
                  Diagnostic Excellence
                </h3>

                <p className="leading-7 text-slate-600">
                  Dr. Ahmmed has successfully diagnosed and treated more than
                  1,000 complex and overlooked cases, often providing solutions
                  where major hospitals could not identify the root cause of the
                  problem.
                </p>
              </div>

              <div className="mt-8">
                <button className="rounded-xl bg-[#081A33] px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-[#0F4C81]">
                  Book Consultation
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}