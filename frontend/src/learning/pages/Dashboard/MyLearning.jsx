
import { useGetMyCoursesQuery } from "../../../services/studentCourseApi";

export default function MyLearning() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const {
    data: courses = [],
    isLoading,
  } = useGetMyCoursesQuery();

  //console.log("Courses from RTK:", courses);
  

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#e5f9f8]">
        <p className="text-xl font-semibold">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e5f9f8]">
      {/* Hero */}
      <section className="bg-[#1a504c] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white">
            My Learning
          </h1>

          <p className="text-gray-200 mt-2">
            Welcome back, {user?.name}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="bg-white rounded-3xl shadow-lg p-6 h-fit">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#1a504c] text-white flex items-center justify-center text-3xl font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>

              <h2 className="mt-4 text-xl font-bold text-[#1a504c]">
                {user?.name}
              </h2>

              <p className="text-gray-500 text-sm">
                Student
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <button className="w-full bg-[#1a504c] text-white py-3 rounded-xl">
                My Learning
              </button>

              <button className="w-full border border-[#1a504c] text-[#1a504c] py-3 rounded-xl">
                Certificates
              </button>

              <button className="w-full border border-[#1a504c] text-[#1a504c] py-3 rounded-xl">
                Profile
              </button>

              <button className="w-full border border-[#1a504c] text-[#1a504c] py-3 rounded-xl">
                Settings
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-3xl shadow">
                <h3 className="text-gray-500">
                  Enrolled
                </h3>

                <p className="text-4xl font-bold text-[#1a504c] mt-2">
                  {courses.length}
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow">
                <h3 className="text-gray-500">
                  Completed
                </h3>

                <p className="text-4xl font-bold text-[#1a504c] mt-2">
                  0
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow">
                <h3 className="text-gray-500">
                  Certificates
                </h3>

                <p className="text-4xl font-bold text-[#1a504c] mt-2">
                  0
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow">
                <h3 className="text-gray-500">
                  Hours
                </h3>

                <p className="text-4xl font-bold text-[#1a504c] mt-2">
                  0
                </p>
              </div>
            </div>

            {/* Continue Learning */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
              <h2 className="text-2xl font-bold text-[#1a504c]">
                Continue Learning
              </h2>

              {courses.length > 0 ? (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">
                    {courses[0].Course.title}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Resume where you left off.
                  </p>

                  <div className="w-full bg-gray-200 rounded-full h-4 mt-5">
                    <div
                      className="bg-[#1a504c] h-4 rounded-full"
                      style={{
                        width: "0%",
                      }}
                    ></div>
                  </div>

                  <p className="mt-2 text-sm text-gray-600">
                    0% Completed
                  </p>

                  <button className="mt-6 bg-[#1a504c] text-white px-6 py-3 rounded-xl hover:bg-black transition">
                    Continue Course
                  </button>
                </div>
              ) : (
                <p className="mt-6 text-gray-500">
                  No enrolled courses yet.
                </p>
              )}
            </div>

            {/* My Courses */}
            <div className="mt-10">
              <h2 className="text-3xl font-bold text-[#1a504c] mb-6">
                My Courses
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {courses.length > 0 ? (
                  courses.map((enrollment) => (
                    <div
                      key={enrollment.id}
                      className="bg-white rounded-3xl shadow-lg overflow-hidden"
                    >
                      <img
                        src={
                          enrollment.Course.thumbnail
                        }
                        alt={
                          enrollment.Course.title
                        }
                        className="w-full h-40 object-cover"
                      />

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#1a504c]">
                          {
                            enrollment.Course
                              .title
                          }
                        </h3>

                        <p className="text-gray-500 mt-2">
                          Instructor:{" "}
                          {
                            enrollment.Course
                              .instructor
                          }
                        </p>

                        <p className="text-gray-500 mt-1">
                          Price: ₹
                          {
                            enrollment.Course
                              .price
                          }
                        </p>

                        <div className="flex justify-between mb-2 mt-4">
                          <span>
                            Progress
                          </span>

                          <span>
                            0%
                          </span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-[#1a504c] h-3 rounded-full"
                            style={{
                              width:
                                "0%",
                            }}
                          ></div>
                        </div>

                        <button className="w-full mt-5 bg-[#1a504c] text-white py-3 rounded-xl hover:bg-black transition">
                          Continue Learning
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 bg-white rounded-3xl shadow-lg p-10 text-center">
                    <p className="text-gray-500">
                      You haven't enrolled in any
                      courses yet.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">
              <h2 className="text-2xl font-bold text-[#1a504c] mb-6">
                Achievements
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="border rounded-2xl p-5 text-center">
                  🏆
                  <h3 className="font-semibold mt-3">
                    First Course Completed
                  </h3>
                </div>

                <div className="border rounded-2xl p-5 text-center">
                  🎓
                  <h3 className="font-semibold mt-3">
                    First Certificate Earned
                  </h3>
                </div>

                <div className="border rounded-2xl p-5 text-center">
                  📚
                  <h3 className="font-semibold mt-3">
                    40+ Learning Hours
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}