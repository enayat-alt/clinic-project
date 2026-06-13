
import { Link } from "react-router-dom";
import { useGetMyCoursesQuery } from "../../../../services/studentCourseApi";

export default function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const {
    data: courses = [],
    isLoading,
    error,
  } = useGetMyCoursesQuery();

  return (
    <div className="min-h-screen bg-[#f7f9fa]">
      {/* Welcome Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold text-[#1c1d1f]">
            Welcome back, {user?.name} 👋
          </h1>

          <p className="text-gray-600 mt-2">
            Ready to continue your learning journey?
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Loading */}
        {isLoading && (
          <div className="bg-white rounded-2xl p-8 shadow">
            <p className="text-center text-lg">
              Loading courses...
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-white rounded-2xl p-8 shadow">
            <p className="text-center text-red-500">
              Failed to load courses.
            </p>
          </div>
        )}

        {!isLoading && !error && (
          <>
            {/* Continue Learning */}
            {courses.length > 0 && (
              <div className="bg-[#1c1d1f] rounded-3xl overflow-hidden text-white mb-10 shadow-lg">
                <div className="md:flex">
                  <img
                    src={courses[0].Course.thumbnail}
                    alt={courses[0].Course.title}
                    className="md:w-96 w-full h-64 object-cover"
                  />

                  <div className="p-8 flex-1">
                    <p className="text-sm text-gray-300">
                      Continue Learning
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                      {courses[0].Course.title}
                    </h2>

                    <p className="mt-4 text-gray-300 line-clamp-3">
                      {courses[0].Course.description}
                    </p>

                    <button className="mt-6 bg-[#a435f0] px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                      Continue Course
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-2xl shadow">
                <p className="text-gray-500">
                  Enrolled Courses
                </p>

                <h3 className="text-4xl font-bold mt-2 text-[#1c1d1f]">
                  {courses.length}
                </h3>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <p className="text-gray-500">
                  Completed
                </p>

                <h3 className="text-4xl font-bold mt-2 text-[#1c1d1f]">
                  0
                </h3>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <p className="text-gray-500">
                  Certificates
                </p>

                <h3 className="text-4xl font-bold mt-2 text-[#1c1d1f]">
                  0
                </h3>
              </div>
            </div>

            {/* My Learning */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-[#1c1d1f]">
                  My Learning
                </h2>

                <p className="text-gray-500">
                  {courses.length} Courses
                </p>
              </div>

              {courses.length === 0 ? (
                <div className="bg-white rounded-2xl shadow p-10 text-center">
                  <p className="text-gray-500 text-lg">
                    You haven't enrolled in any courses yet.
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {courses.map((enrollment) => (
                    <div
                      key={enrollment.id}
                      className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
                    >
                      <img
                        src={enrollment.Course.thumbnail}
                        alt={enrollment.Course.title}
                        className="w-full h-48 object-cover"
                      />

                      <div className="p-6">
                        <h3 className="font-bold text-lg text-[#1c1d1f] line-clamp-2">
                          {enrollment.Course.title}
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                          {enrollment.Course.instructor}
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                          {enrollment.Course.level}
                        </p>

                        {/* Progress */}
                        <div className="mt-6">
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>

                            <span>0%</span>
                          </div>

                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-[#a435f0] h-2 rounded-full"
                              style={{
                                width: "0%",
                              }}
                            />
                          </div>
                        </div>

                        <Link
                          to={`/courses/${enrollment.Course.id}`}
                          className="block text-center mt-6 bg-[#a435f0] text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
                        >
                          Continue Learning
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}