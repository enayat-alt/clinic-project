export default function Dashboard() {
  const stats = [
    {
      title: "Total Appointments",
      value: 124,
    },
    {
      title: "Pending Appointments",
      value: 18,
    },
    {
      title: "Confirmed Appointments",
      value: 96,
    },
    {
      title: "Total Students",
      value: 320,
    },
    {
      title: "Total Courses",
      value: 15,
    },
    {
      title: "Total Users",
      value: 450,
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome to the Admin Dashboard
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border p-6"
          >
            <h3 className="text-gray-500 text-sm font-medium">
              {item.title}
            </h3>

            <p className="text-3xl font-bold text-[#1a504c] mt-3">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-10 bg-white rounded-2xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <div className="space-y-4">
          <div className="border-b pb-3">
            New appointment booked by Rahul
          </div>

          <div className="border-b pb-3">
            Student enrolled in ECG Course
          </div>

          <div className="border-b pb-3">
            Appointment approved by Admin
          </div>

          <div>
            New user registered on platform
          </div>
        </div>
      </div>
    </div>
  );
}