
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import About from "../About/About";
import DoctorSection from "../doctor/DoctorSection";
import Appointment from "../Appointment/Appointment";

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

      <main className="bg-[#fff] text-[#121414]">
        <Hero />

        <FeaturedDoctor />

        <CTA />

        <Departments />
        <WhyChoose />
        <PatientReviews />

        <Statistics />
      </main>
    </>
  );
}
