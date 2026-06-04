export default function MyLearning() {
  const user = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const courses = [
    {
      id: 1,
      title: "FMGE Complete Preparation",
      progress: 75,
    },
    {
      id: 2,
      title: "Clinical Medicine Masterclass",
      progress: 45,
    },
    {
      id: 3,
      title: "Physiotherapy Essentials",
      progress: 100,
    },
  ];

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
                  3
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow">
                <h3 className="text-gray-500">
                  Completed
                </h3>

                <p className="text-4xl font-bold text-[#1a504c] mt-2">
                  1
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow">
                <h3 className="text-gray-500">
                  Certificates
                </h3>

                <p className="text-4xl font-bold text-[#1a504c] mt-2">
                  1
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow">
                <h3 className="text-gray-500">
                  Hours
                </h3>

                <p className="text-4xl font-bold text-[#1a504c] mt-2">
                  42
                </p>
              </div>

            </div>

            {/* Continue Learning */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

              <h2 className="text-2xl font-bold text-[#1a504c]">
                Continue Learning
              </h2>

              <div className="mt-6">

                <h3 className="text-xl font-semibold">
                  FMGE Complete Preparation
                </h3>

                <p className="text-gray-500 mt-2">
                  Resume where you left off.
                </p>

                <div className="w-full bg-gray-200 rounded-full h-4 mt-5">
                  <div
                    className="bg-[#1a504c] h-4 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>

                <p className="mt-2 text-sm text-gray-600">
                  75% Completed
                </p>

                <button className="mt-6 bg-[#1a504c] text-white px-6 py-3 rounded-xl hover:bg-black transition">
                  Continue Course
                </button>

              </div>

            </div>

            {/* My Courses */}
            <div className="mt-10">

              <h2 className="text-3xl font-bold text-[#1a504c] mb-6">
                My Courses
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-3xl shadow-lg overflow-hidden"
                  >

                    <div className="h-32 bg-[#1a504c] flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold text-center px-4">
                        {course.title}
                      </h3>
                    </div>

                    <div className="p-6">

                      <div className="flex justify-between mb-2">
                        <span>Progress</span>

                        <span>
                          {course.progress}%
                        </span>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-[#1a504c] h-3 rounded-full"
                          style={{
                            width: `${course.progress}%`,
                          }}
                        ></div>
                      </div>

                      <button className="w-full mt-5 bg-[#1a504c] text-white py-3 rounded-xl hover:bg-black transition">
                        Continue Learning
                      </button>

                    </div>

                  </div>
                ))}

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