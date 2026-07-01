// import { Link } from "react-router-dom";

// export default function About() {
//   return (
//     <main className="bg-white text-[#121414]">
//       {/* Hero Section */}
//       <section className="bg-[#1a504c] py-20">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <p className="text-gray-200">
//             <Link to="/">Home</Link> / Contact Us
//           </p>

//           <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>

//           <p className="text-lg text-gray-200 max-w-3xl mx-auto">
//             Trusted healthcare services dedicated to improving the health and
//             well-being of individuals and families across Odisha.
//           </p>
//         </div>
//       </section>

//       {/* About Content */}
//       <section className="py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="mb-12">
//             <span className="text-[#1a504c] font-semibold uppercase tracking-wide">
//               Welcome To Odisha Polyclinic
//             </span>

//             <h2 className="text-4xl font-bold mt-3 mb-6">
//               Your Trusted Healthcare Partner
//             </h2>

//             <p className="text-gray-700 leading-8 text-lg">
//               When it comes to health, trust and quality care are essential. At
//               Odisha Polyclinic, we are committed to providing comprehensive,
//               compassionate, and patient-centered healthcare services to
//               individuals and families in our community.
//             </p>

//             <p className="text-gray-700 leading-8 text-lg mt-6">
//               We believe that every patient deserves personalized attention,
//               accurate diagnosis, and effective treatment. Our experienced
//               healthcare professionals work together to ensure that you receive
//               the highest standard of medical care in a comfortable and
//               supportive environment.
//             </p>
//           </div>

//           {/* Services */}
//           <div className="bg-[#e5f9f8] rounded-3xl p-8 md:p-12">
//             <h3 className="text-3xl font-bold mb-8 text-[#1a504c]">
//               Our Healthcare Services
//             </h3>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 "Diabetes & Thyroid Management",
//                 "Blood Pressure Monitoring",
//                 "Skin & Hair Treatments",
//                 "Joint & Nerve Pain Care",
//                 "Headache & Migraine Treatment",
//                 "Digestive Disorders",
//                 "Fever & Infection Management",
//                 "Mental Health Consultations",
//                 "Women's Health Services",
//                 "Sexual Health Care",
//                 "Urine & Kidney Disorders",
//                 "Weight Loss Management",
//                 "Pre-Marriage Health Tests",
//                 "General Physician Consultation",
//                 "Preventive Health Checkups",
//               ].map((service) => (
//                 <div
//                   key={service}
//                   className="bg-white p-5 rounded-2xl shadow-sm border border-[#cdebea] hover:shadow-md transition"
//                 >
//                   <p className="font-medium text-gray-800">✓ {service}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Mission & Vision */}
//           <div className="mt-16 grid md:grid-cols-2 gap-8">
//             <div className="bg-[#1a504c] text-white p-8 rounded-3xl">
//               <h3 className="text-3xl font-bold mb-4">Our Mission</h3>

//               <p className="leading-8">
//                 To provide affordable, accessible, and high-quality healthcare
//                 services that improve the health and quality of life of every
//                 patient who walks through our doors.
//               </p>
//             </div>

//             <div className="bg-black text-white p-8 rounded-3xl">
//               <h3 className="text-3xl font-bold mb-4">Our Vision</h3>

//               <p className="leading-8">
//                 To become Odisha's most trusted healthcare destination,
//                 recognized for excellence in patient care, medical expertise,
//                 and community well-being.
//               </p>
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="mt-20 text-center">
//             <h3 className="text-4xl font-bold mb-4">
//               Your Health Is Our Priority
//             </h3>

//             <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-7">
//               Whether you need a routine checkup, specialist consultation,
//               diagnostic tests, or preventive healthcare, Odisha Polyclinic is
//               here to support your health journey with compassionate,
//               affordable, and expert medical care.
//             </p>

//             <div className="flex flex-wrap justify-center gap-4">
//               <Link
//                 to="/"
//                 className="bg-[#1a504c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-black transition"
//               >
//                 ← Back To Home
//               </Link>

//               <Link
//                 to="/appointment"
//                 className="border border-[#1a504c] text-[#1a504c] px-8 py-4 rounded-xl font-semibold hover:bg-[#1a504c] hover:text-white transition"
//               >
//                 Book Appointment
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




import { Link } from "react-router-dom";
import {
  FaUserMd,
  FaHospital,
  FaHeartbeat,
  FaAward,
} from "react-icons/fa";

export default function About() {
  return (
    <main className="bg-white text-slate-800">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#081A33] via-[#0D2D5C] to-[#1E4C89] py-16 md:py-20 lg:py-24">

        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">

          <p className="uppercase tracking-[4px] text-cyan-300 font-semibold">
            About Odisha Polyclinic
          </p>

          <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Compassionate Healthcare
            <br />
            You Can Trust
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-slate-300">
            Dedicated to providing high-quality healthcare with compassion,
            expertise, and personalized attention for every patient.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">

            <Link
              to="/appointment"
              className="rounded-full bg-white px-8 py-4 font-semibold text-[#081A33] shadow-xl transition hover:-translate-y-1"
            >
              Book Appointment
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white backdrop-blur-md hover:bg-white/10 transition"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Image */}

            <div className="relative">

              <img
                src="/doctor.png"
                alt="Doctor"
                className="w-full rounded-[35px] object-cover shadow-2xl"
              />

              <div className="absolute bottom-8 left-8 rounded-3xl bg-white p-6 shadow-2xl">

                <h3 className="text-4xl font-bold text-[#081A33]">
                  15+
                </h3>

                <p className="text-slate-500">
                  Years of Excellence
                </p>

              </div>

            </div>

            {/* Content */}

            <div>

              <span className="text-blue-600 font-semibold uppercase tracking-[4px]">
                Welcome
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#081A33] sm:text-4xl md:text-5xl">
                Your Trusted Healthcare Partner
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                At Odisha Polyclinic, we believe healthcare should be
                compassionate, affordable, and accessible to everyone.
                Our experienced medical team is dedicated to delivering
                personalized treatment with modern diagnostic support.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                Every patient receives individualized attention,
                accurate diagnosis, and comprehensive care in a warm
                and welcoming environment.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">

                <div className="rounded-3xl bg-slate-50 p-6 shadow-sm border">

                  <FaUserMd className="text-4xl text-blue-600" />

                  <h4 className="mt-4 font-bold text-xl">
                    Expert Doctor
                  </h4>

                  <p className="mt-2 text-slate-500">
                    Personalized medical care.
                  </p>

                </div>

                <div className="rounded-3xl bg-slate-50 p-6 shadow-sm border">

                  <FaHospital className="text-4xl text-blue-600" />

                  <h4 className="mt-4 font-bold text-xl">
                    Modern Clinic
                  </h4>

                  <p className="mt-2 text-slate-500">
                    Advanced healthcare facilities.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="pb-16 md:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white border shadow-lg p-8 text-center">

              <FaHeartbeat className="mx-auto text-5xl text-blue-600" />

              <h3 className="mt-5 text-4xl font-bold">
                5000+
              </h3>

              <p className="mt-2 text-slate-500">
                Happy Patients
              </p>

            </div>

            <div className="rounded-3xl bg-white border shadow-lg p-8 text-center">

              <FaUserMd className="mx-auto text-5xl text-blue-600" />

              <h3 className="mt-5 text-4xl font-bold">
                15+
              </h3>

              <p className="mt-2 text-slate-500">
                Years Experience
              </p>

            </div>

            <div className="rounded-3xl bg-white border shadow-lg p-8 text-center">

              <FaAward className="mx-auto text-5xl text-blue-600" />

              <h3 className="mt-5 text-4xl font-bold">
                100%
              </h3>

              <p className="mt-2 text-slate-500">
                Patient Care
              </p>

            </div>

            <div className="rounded-3xl bg-white border shadow-lg p-8 text-center">

              <FaHospital className="mx-auto text-5xl text-blue-600" />

              <h3 className="mt-5 text-4xl font-bold">
                24×7
              </h3>

              <p className="mt-2 text-slate-500">
                Emergency Support
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ================= SERVICES ================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[4px] font-semibold text-blue-600">
              Our Services
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#081A33]">
              Comprehensive Healthcare Services
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              We provide complete healthcare solutions with personalized
              treatment plans and compassionate medical care.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "General Physician Consultation",
              "Diabetes & Thyroid Management",
              "Blood Pressure Monitoring",
              "Skin & Hair Treatments",
              "Joint & Nerve Pain Care",
              "Headache & Migraine Treatment",
              "Digestive Disorders",
              "Women's Health Services",
              "Mental Health Consultation",
              "Sexual Health Care",
              "PRP Therapy",
              "Preventive Health Checkups",
            ].map((service) => (

              <div
                key={service}
                className="group rounded-3xl bg-white p-8 shadow-lg border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-100 group-hover:bg-[#081A33] transition">

                  <svg
                    className="w-8 h-8 text-blue-600 group-hover:text-white transition"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4"
                    />
                    <circle cx="12" cy="12" r="10" />
                  </svg>

                </div>

                <h3 className="mt-6 text-xl font-bold text-[#081A33]">
                  {service}
                </h3>

                <p className="mt-3 text-slate-500 leading-7">
                  Personalized diagnosis and treatment by experienced
                  healthcare professionals.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= MISSION & VISION ================= */}

      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Mission */}

<div className="relative overflow-hidden rounded-[35px] bg-gradient-to-br from-[#081A33] to-[#174A84] p-8 text-white shadow-2xl sm:p-10 lg:p-12">

              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

              <span className="uppercase tracking-[4px] text-cyan-300 font-semibold">
                Our Mission
              </span>

              <h3 className="mt-5 text-4xl font-bold">
                Healthcare For Everyone
              </h3>

              <p className="mt-8 text-base leading-8 text-slate-200 md:text-lg">
                To provide affordable, accessible, and high-quality
                healthcare that improves the lives of every patient
                through compassionate treatment, accurate diagnosis,
                and modern medical practices.
              </p>

            </div>

            {/* Vision */}

            <div className="rounded-[35px] border border-slate-200 bg-white p-8 shadow-xl sm:p-10 lg:p-12">

              <span className="uppercase tracking-[4px] text-blue-600 font-semibold">
                Our Vision
              </span>

              <h3 className="mt-5 text-3xl font-bold text-[#081A33] sm:text-4xl">
                Trusted Healthcare Leader
              </h3>

              <p className="mt-8 text-base leading-8 text-slate-600 md:text-lg">
                To become Odisha's most trusted healthcare destination,
                recognized for excellence in patient care, innovation,
                ethical medical practices, and community well-being.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">

                <div className="rounded-2xl bg-slate-100 p-5 text-center">

                  <h4 className="text-3xl font-bold text-[#081A33]">
                    15+
                  </h4>

                  <p className="text-slate-500 mt-2">
                    Years Experience
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-100 p-5 text-center">

                  <h4 className="text-3xl font-bold text-[#081A33]">
                    5000+
                  </h4>

                  <p className="text-slate-500 mt-2">
                    Patients Served
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= WHY CHOOSE US ================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[4px] text-blue-600 font-semibold">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#081A33]">
              Healthcare You Can Trust
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              Our commitment is to provide compassionate healthcare with
              experienced professionals, modern facilities, and personalized
              treatment for every patient.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Experienced Doctor",
                desc: "Expert consultation with years of medical experience.",
              },
              {
                title: "Patient First",
                desc: "Personalized treatment focused on your health.",
              },
              {
                title: "Affordable Care",
                desc: "Quality healthcare at affordable consultation fees.",
              },
              {
                title: "Modern Equipment",
                desc: "Latest medical equipment for accurate diagnosis.",
              },
              {
                title: "Quick Appointments",
                desc: "Easy online booking with minimal waiting time.",
              },
              {
                title: "Trusted Healthcare",
                desc: "Committed to excellence and patient satisfaction.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >

                <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center">

                  <svg
                    className="w-7 h-7 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#081A33]">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="pb-16 md:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#081A33] via-[#10376D] to-[#174A84] p-8 text-center text-white sm:p-10 md:p-16 lg:p-20">

            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />

            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

            <div className="relative">

              <span className="uppercase tracking-[4px] text-cyan-300 font-semibold">
                Book Your Visit
              </span>

              <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl">
                Your Health Is Our Priority
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                Whether you need a routine health check-up, specialist
                consultation, or preventive healthcare, our experienced medical
                team is here to provide trusted, compassionate care.
              </p>

              <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">

                <Link
                  to="/appointment"
                  className="rounded-full bg-white px-8 py-4 font-semibold text-[#081A33] shadow-xl transition hover:-translate-y-1"
                >
                  Book Appointment
                </Link>

                <Link
                  to="/contact"
                  className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition"
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}