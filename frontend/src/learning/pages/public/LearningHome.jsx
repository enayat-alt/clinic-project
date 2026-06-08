
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LearningHome() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storedCourses =
      JSON.parse(localStorage.getItem("courses")) || [];

    setCourses(storedCourses);
  }, []);

  return (
    <div className="bg-white">
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
                skills through structured courses and expert
                mentorship.
              </p>

              <div className="flex gap-4 mt-8">
                <Link
                  to="/learning"
                  className="bg-white text-[#1a504c] px-6 py-3 rounded-xl font-semibold"
                >
                  Explore Courses
                </Link>

                <Link
                  to="/learning/login"
                  className="border border-white text-white px-6 py-3 rounded-xl"
                >
                  Start Learning
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
                {courses.length}
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a504c]">
              Featured Courses
            </h2>

            <p className="text-gray-600 mt-4">
              Learn from expert doctors and healthcare
              professionals.
            </p>
          </div>

          {courses.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 text-center shadow">
              <h3 className="text-2xl font-semibold">
                No Courses Available
              </h3>

              <p className="text-gray-500 mt-2">
                Create courses from the Admin Panel.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="overflow-hidden">
                    <img
                      src={
                        course.thumbnail ||
                        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000"
                      }
                      alt={course.title}
                      className="h-56 w-full object-cover transition duration-500 hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <span className="inline-block bg-[#e5f9f8] text-[#1a504c] px-3 py-1 rounded-full text-sm font-medium">
                      {course.category ||
                        "Medical Course"}
                    </span>

                    <h3 className="text-2xl font-bold mt-4 text-gray-800">
                      {course.title}
                    </h3>

                    <p className="text-gray-600 mt-3 line-clamp-3">
                      {course.description ||
                        "Comprehensive learning materials, videos, PDFs, quizzes and certification."}
                    </p>

                    <div className="mt-4 flex justify-between text-sm text-gray-500">
                      <span>
                        Chapters:{" "}
                        {course.chapters?.length || 0}
                      </span>

                      <span>
                        Lessons:{" "}
                        {course.chapters?.reduce(
                          (total, chapter) =>
                            total +
                            (chapter.lessons?.length ||
                              0),
                          0
                        )}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <span className="text-3xl font-bold text-[#1a504c]">
                        ₹{course.price || 0}
                      </span>

                      <span className="text-sm text-gray-500">
                        Lifetime Access
                      </span>
                    </div>

                    <Link
                      to={`/learning/course/${course.id}`}
                      className="block text-center mt-6 w-full bg-[#1a504c] text-white py-3 rounded-xl font-semibold hover:bg-black transition"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
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

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Start Learning Today
          </h2>

          <p className="text-gray-600 mt-4">
            Join our growing community of healthcare
            professionals and medical students.
          </p>

          <Link
            to="/learning"
            className="inline-block mt-8 bg-[#1a504c] text-white px-8 py-4 rounded-xl"
          >
            Browse Courses
          </Link>
        </div>
      </section>
    </div>
  );
}