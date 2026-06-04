import LearningNavbar from "../../components/LearningNavbar";

export default function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("currentUser")
  );

  return (
    <>
      <LearningNavbar />

      <div className="min-h-screen bg-[#e5f9f8] p-10">
        <h1 className="text-4xl font-bold text-[#1a504c]">
          Welcome, {user?.name}
        </h1>

        <p className="mt-3 text-gray-600">
          This is your learning dashboard.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">
              My Courses
            </h3>
            <p className="text-gray-500 mt-2">
              View enrolled courses
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">
              Certificates
            </h3>
            <p className="text-gray-500 mt-2">
              Download certificates
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">
              Progress
            </h3>
            <p className="text-gray-500 mt-2">
              Track learning progress
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">
              Profile
            </h3>
            <p className="text-gray-500 mt-2">
              Manage account settings
            </p>
          </div>

        </div>
      </div>
    </>
  );
}