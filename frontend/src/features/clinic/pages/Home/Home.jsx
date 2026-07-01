//import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import About from "../About/About";
import DoctorSection from "../doctor/DoctorSection";
import Appointment from "../Appointment/Appointment";
//import Appointments from "../consultation/consultation";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Statistics from "../../components/Statistics/Statistics";
import Departments from "../../components/Departments/Departments";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import FeaturedDoctor from "../../components/FeaturedDoctor/FeaturedDoctor";
import PatientReviews from "../../components/PatientReviews/PatientReviews";
import CTA from "../../components/CTA/CTA";
export default function Home() {
  const services = [
    "General Checkup",
    "Cardiology",
    "Dental Care",
    "Pediatrics",
  ];

  return (
    <>
    
      <Header />
      {/* <Navbar /> */}


      <main className="bg-[#fff] text-[#121414]">
       
        <Hero />

        <FeaturedDoctor />

        <CTA />
        {/* <Appointment /> */}
        {/* <DoctorSection /> */}
        <Departments />
        <WhyChoose />
        <PatientReviews />
        {/* Statistics */}
        <Statistics />
        {/* CTA */}
        {/* <section className="bg-[#fff] pb-24">
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
        </section> */}
      </main>

      {/* <Footer /> */}
    </>
  );
}
