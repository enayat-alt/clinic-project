

import { Link } from "react-router-dom";
import { useState } from "react";
import { useGetCoursesQuery} from "../../../features/admin/courses/services/courseApi";

export default function FindCourse() {
  const [searchTerm, setSearchTerm] =
    useState("");

  const {
    data: courses = [],
    isLoading,
    error,
  } = useGetCoursesQuery();
  //console.log(course.id)
  console.log(courses);

  const filteredCourses = courses.filter(
    (course) =>
      course.title
        ?.toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading Courses...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500">
        Failed to load courses
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e5f9f8]">
      <section className="bg-[#1a504c] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white">
            Find Your Course
          </h1>

          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            Explore professional medical
            courses, FMGE coaching,
            healthcare certifications, and
            practical learning programs.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white p-6 rounded-3xl shadow">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
            className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow">
            <h2 className="text-2xl font-bold">
              No Courses Found
            </h2>

            <p className="text-gray-500 mt-3">
              Try a different search.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(
              (course) => (
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
                      className="h-56 w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-[#e5f9f8] text-[#1a504c] px-3 py-1 rounded-full text-xs font-semibold">
                        {course.category ||
                          "Medical Course"}
                      </span>

                      <span className="text-xs text-gray-500">
                        {course.status ||
                          "Published"}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-[#1a504c]">
                      {course.title}
                    </h2>

                    <p className="text-gray-600 mt-2">
                      Instructor:{" "}
                      {course.instructor}
                    </p>

                    <p className="text-gray-600">
                      Duration:{" "}
                      {course.duration ||
                        "Self Paced"}
                    </p>

                    <p className="text-2xl font-bold text-[#1a504c] mt-4">
                      ₹{course.price || 0}
                    </p>

                    <div className="flex gap-3 mt-5">
                      <Link
                        to={`/learning/course/${course.id}`}
                        className="flex-1 text-center border border-[#1a504c] text-[#1a504c] py-2 rounded-xl hover:bg-[#e5f9f8]"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </section>
    </div>
  );
}