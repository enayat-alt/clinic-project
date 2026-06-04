import { Link } from "react-router-dom";
import LearningNavbar from "../components/LearningNavbar";

export default function LearningHome() {
   
  const courses = [
    {
      title: "FMGE Complete Preparation",
      price: "₹4,999",
    },
    {
      title: "Clinical Medicine Masterclass",
      price: "₹2,999",
    },
    {
      title: "Physiotherapy Essentials",
      price: "₹1,499",
    },
  ];

  return (
    <div className="bg-white">
       <LearningNavbar/>

      {/* Hero */}
      <section className="bg-[#1a504c] py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <span className="text-green-200 font-medium">
                Odisha Polyclinic Learning Platform
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
                Learn Medicine
                <br />
                From Experts
              </h1>

              <p className="text-gray-200 mt-6 text-lg leading-8">
                Master FMGE preparation, clinical medicine,
                diagnostics, physiotherapy, and healthcare
                skills through structured courses and expert mentorship.
              </p>

              <div className="flex gap-4 mt-8">
                <Link
                  to="/learning/courses"
                  className="bg-white text-[#1a504c] px-6 py-3 rounded-xl font-semibold"
                >
                  Explore Courses
                </Link>

                <Link
                  to="/learning/fmge"
                  className="border border-white text-white px-6 py-3 rounded-xl"
                >
                  FMGE Program
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/learning.png"
                alt="Learning"
                className="w-full max-w-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#e5f9f8]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-2xl text-center">
              <h3 className="text-4xl font-bold text-[#1a504c]">
                500+
              </h3>
              <p>Students</p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center">
              <h3 className="text-4xl font-bold text-[#1a504c]">
                50+
              </h3>
              <p>Courses</p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center">
              <h3 className="text-4xl font-bold text-[#1a504c]">
                1000+
              </h3>
              <p>Clinical Cases</p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center">
              <h3 className="text-4xl font-bold text-[#1a504c]">
                12+
              </h3>
              <p>Years Experience</p>
            </div>

          </div>

        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Courses
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {courses.map((course) => (
              <div
                key={course.title}
                className="bg-white border border-[#cdebea] rounded-3xl p-6 shadow-md"
              >
                <div className="h-40 bg-[#e5f9f8] rounded-2xl mb-4"></div>

                <h3 className="text-xl font-bold">
                  {course.title}
                </h3>

                <p className="text-[#1a504c] font-bold text-2xl mt-3">
                  {course.price}
                </p>

                <button className="mt-5 w-full bg-[#1a504c] text-white py-3 rounded-xl">
                  View Course
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Learn */}
      <section className="bg-[#e5f9f8] py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Learn With Us?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-2xl">
              Expert Faculty
            </div>

            <div className="bg-white p-6 rounded-2xl">
              Recorded Classes
            </div>

            <div className="bg-white p-6 rounded-2xl">
              Mock Tests
            </div>

            <div className="bg-white p-6 rounded-2xl">
              Certificates
            </div>

          </div>

        </div>
      </section>

      {/* FMGE Program */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-[#1a504c] rounded-3xl p-10 text-white">

            <h2 className="text-4xl font-bold">
              FMGE Coaching Program
            </h2>

            <p className="mt-4 text-gray-200">
              Learn directly under Dr. Shaik Faraz Ahmmed with
              live classes, recorded lectures, notes, MCQs,
              and mock examinations.
            </p>

            <button className="mt-6 bg-white text-[#1a504c] px-6 py-3 rounded-xl font-semibold">
              Enroll Now
            </button>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Start Learning Today
          </h2>

          <p className="text-gray-600 mt-4">
            Join our growing community of healthcare professionals
            and medical students.
          </p>

          <Link
            to="/learning/courses"
            className="inline-block mt-8 bg-[#1a504c] text-white px-8 py-4 rounded-xl"
          >
            Browse Courses
          </Link>

        </div>
      </section>

    </div>
  );
}