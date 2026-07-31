import { Link } from "react-router-dom";

const services = [
  {
    title: "Physiotherapy",
    description:
      "Comprehensive rehabilitation, pain management, mobility improvement, and post-injury recovery guided by experienced physiotherapists.",
  },
  {
    title: "ECG",
    description:
      "Accurate electrocardiogram testing to evaluate heart rhythm, detect cardiac abnormalities, and monitor overall heart health.",
  },
  {
    title: "Eye Test",
    description:
      "Complete vision examinations including eyesight assessment, eye pressure checks, and early detection of eye diseases.",
  },
  {
    title: "Ear Test",
    description:
      "Professional hearing assessments and ear examinations for diagnosing hearing loss and ear-related disorders.",
  },
  {
    title: "PFT (Pulmonary Function Test)",
    description:
      "Advanced lung function testing to diagnose asthma, COPD, allergies, and other respiratory conditions accurately.",
  },
  {
    title: "X-Ray",
    description:
      "Digital X-ray imaging for accurate diagnosis of fractures, chest conditions, joint problems, and bone disorders.",
  },
  {
    title: "CT Scan",
    description:
      "High-resolution CT scans for detailed imaging of internal organs, bones, blood vessels, and soft tissues.",
  },
  {
    title: "MRI",
    description:
      "Advanced MRI scans providing detailed images of the brain, spine, joints, muscles, and internal soft tissues.",
  },
  {
    title: "Ultrasound",
    description:
      "Safe and non-invasive ultrasound imaging for pregnancy care, abdominal examinations, and organ evaluation.",
  },
  {
    title: "EEG",
    description:
      "Electroencephalogram testing to monitor brain activity and assist in diagnosing epilepsy and neurological disorders.",
  },
];

const whyChooseUs = [
  {
    title: "Modern Diagnostic Equipment",
    description:
      "Advanced medical technology ensures precise diagnoses and dependable results.",
  },
  {
    title: "Experienced Medical Professionals",
    description:
      "Our skilled doctors and technicians provide quality care with years of clinical experience.",
  },
  {
    title: "Fast & Accurate Reports",
    description:
      "Receive timely diagnostic reports to support quicker treatment decisions.",
  },
  {
    title: "Affordable Healthcare Services",
    description:
      "Quality diagnostic services offered at transparent and budget-friendly prices.",
  },
  {
    title: "Patient-Centered Care",
    description:
      "Every patient receives compassionate attention and personalized healthcare support.",
  },
  {
    title: "Easy Appointment Booking",
    description:
      "Book diagnostic tests quickly through our simple and convenient appointment system.",
  },
];

export default function TestsServices() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Blue Top Header Banner */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-[#081A33] text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-white">
            Lab & Diagnostic Services
          </h1>
          <p className="mt-3 text-sm sm:text-base font-normal tracking-tight text-slate-300 max-w-2xl mx-auto">
            Comprehensive diagnostic services with advanced equipment, accurate reporting, and expert medical care at Odisha Polyclinic.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#081A33] sm:text-4xl">
            Our Diagnostic Services
          </h2>

          <p className="mb-12 text-center text-slate-600">
            Reliable diagnostic solutions delivered with precision, accuracy,
            and patient-focused care.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#081A33] font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-semibold text-[#081A33]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#081A33] sm:text-4xl">
            Why Choose Odisha Polyclinic?
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="mb-3 text-xl font-semibold text-[#081A33]">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#081A33] via-[#0F2D56] to-[#174A84] p-8 text-center shadow-2xl sm:p-10">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Need a Diagnostic Test?
            </h2>

            <p className="mb-8 text-base text-slate-300 md:text-lg">
              Schedule your diagnostic test today and receive accurate reports
              with expert medical support from Odisha Polyclinic.
            </p>

            <Link
              to="/appointment"
              className="inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[#081A33] transition hover:bg-slate-100"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}