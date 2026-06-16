import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetCoursesQuery } from "../../../admin/courses/services/courseApi";
import CourseFilters from "../../components/CourseFilters";
import CourseCard from "../../components/CourseCard";

export default function FindCourse() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [searchParams, setSearchParams] =
    useSearchParams();

  const page =
    Number(searchParams.get("page")) || 1;

  const { data, isLoading, error } =
    useGetCoursesQuery({
      page,
      limit: 6,
    });

  const courses = data?.courses || [];
  const pagination = data?.pagination;

  // Categories from current courses
  const categories = [
    ...new Set(
      courses
        .map((course) => course.category)
        .filter(Boolean)
    ),
  ];

  // Frontend filters
  const filteredCourses = courses.filter(
    (course) => {
      const matchesSearch =
        course.title
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesCategory =
        !category ||
        course.category === category;

      const matchesPrice =
        !price ||
        (price === "free" &&
          Number(course.price) === 0) ||
        (price === "paid" &&
          Number(course.price) > 0);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice
      );
    }
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
      {/* Hero */}
      <section className="bg-[#1a504c] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white">
            Find Your Course
          </h1>

          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            Explore professional medical
            courses, FMGE coaching,
            healthcare certifications,
            and practical learning
            programs.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <CourseFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
          categories={categories}
        />
      </section>

      {/* Courses */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow">
            <h2 className="text-2xl font-bold">
              No Courses Found
            </h2>

            <p className="text-gray-500 mt-3">
              Try changing your search
              or filters.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-semibold text-[#1a504c]">
                  {
                    filteredCourses.length
                  }
                </span>{" "}
                course
                {filteredCourses.length >
                1
                  ? "s"
                  : ""}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(
                (course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                  />
                )
              )}
            </div>

            {/* Modern Pagination */}
            <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
              {/* Previous */}
              <button
                disabled={page === 1}
                onClick={() =>
                  setSearchParams({
                    page: page - 1,
                  })
                }
                className="
                  px-3 py-2
                  text-sm font-medium
                  rounded-lg
                  border border-gray-200
                  bg-white
                  text-gray-600
                  shadow-sm
                  disabled:opacity-40
                  disabled:cursor-not-allowed
                  hover:border-[#1a504c]
                  hover:text-[#1a504c]
                  hover:shadow
                  transition-all
                "
              >
                ← Prev
              </button>

              {/* Pages */}
              {Array.from(
                {
                  length:
                    pagination?.totalPages ||
                    0,
                },
                (_, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      setSearchParams({
                        page: i + 1,
                      })
                    }
                    className={`
                      w-9 h-9
                      text-sm font-medium
                      rounded-lg
                      transition-all
                      ${
                        page === i + 1
                          ? "bg-[#1a504c] text-white shadow-md"
                          : "bg-white border border-gray-200 text-gray-600 hover:border-[#1a504c] hover:text-[#1a504c] hover:shadow-sm"
                      }
                    `}
                  >
                    {i + 1}
                  </button>
                )
              )}

              {/* Next */}
              <button
                disabled={
                  page ===
                  pagination?.totalPages
                }
                onClick={() =>
                  setSearchParams({
                    page: page + 1,
                  })
                }
                className="
                  px-3 py-2
                  text-sm font-medium
                  rounded-lg
                  border border-gray-200
                  bg-white
                  text-gray-600
                  shadow-sm
                  disabled:opacity-40
                  disabled:cursor-not-allowed
                  hover:border-[#1a504c]
                  hover:text-[#1a504c]
                  hover:shadow
                  transition-all
                "
              >
                Next →
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}