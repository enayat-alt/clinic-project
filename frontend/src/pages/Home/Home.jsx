import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import About from "../About/About";
import DoctorSection from "../doctor/DoctorSection";
import Appointment from "../Appointment/Appointment";
import Appointments from "../consultation/consultation";
import { Link } from "react-router-dom";

export default function Home() {
  const services = [
    "General Checkup",
    "Cardiology",
    "Dental Care",
    "Pediatrics",
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#fff] text-[#121414]">
        {/* Learning Promotion Banner */}
        <section className="bg-yellow-400 text-black">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-center md:text-left">
                <span className="font-bold text-lg ">
                  🎓 Odisha polyclinic Learning Platform
                </span>

                <span className="hidden md:inline">|</span>

                <span className="font-medium animate-bounce ">
                  Launch Offer: Get up to 50% OFF on FMGE, Clinical Medicine &
                  Certification Courses
                </span>
              </div>

              <Link
                to="/learning"
                className="text-white px-5 py-2 rounded-lg font-semibold hover:bg-black transition  animate-pulse "
              >
                Explore Courses →
              </Link>
            </div>
          </div>
        </section>
        {/* Hero Section */}
        <section className="bg-[#1a504c]">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-green-600 text-sm font-medium mb-4">
                  Odisha Polyclinic
                </span>

                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                  Your Health,
                  <br />
                  Our Priority
                </h1>

                <p className="text-lg text-white mb-8 text-black">
                  Book appointments with trusted doctors and access quality
                  healthcare services.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#121414] text-white px-6 py-3 rounded-xl font-medium">
                    Book Appointment
                  </button>

                  <button className="border border-[#121414] text-[#121414] px-6 py-3 rounded-xl font-medium">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img
                  src="/doctor.png"
                  alt="Doctor"
                  className="w-72 md:w-96 lg:w-[450px] "
                />
              </div>
            </div>
          </div>
        </section>

        <About />

        <Appointment />
        <DoctorSection />

        {/* Statistics */}
        <section className="bg-[#fff] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Trusted By Thousands
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                ["5000+", "Patients"],
                ["15+", "Doctors"],
                ["15+", "Departments"],
                ["24/7", "Support"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border border-gray-200 rounded-3xl p-8 text-center"
                >
                  <h3 className="text-4xl font-bold">{value}</h3>

                  <p className="text-gray-600 mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#fff] pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-[#121414] text-white rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">
                Ready To Take Care Of Your Health?
              </h2>

              <p className="text-gray-300 mb-8">
                Schedule your appointment today and receive quality healthcare
                from our experienced medical professionals.
              </p>

              <button className="bg-white text-[#121414] px-8 py-3 rounded-xl font-semibold">
                Book Appointment
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
