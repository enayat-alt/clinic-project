import { Link } from "react-router-dom";

export default function AdminCourses() {
  const courses = [
    {
      id: 1,
      title: "ECG Masterclass",
      category: "Cardiology",
      price: 499,
      students: 120,
      status: "Published",
    },
    {
      id: 2,
      title: "Diabetes Management",
      category: "Medicine",
      price: 799,
      students: 85,
      status: "Draft",
    },
    {
      id: 3,
      title: "Basic Physiotherapy",
      category: "Physiotherapy",
      price: 599,
      students: 45,
      status: "Published",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Courses
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all learning courses
          </p>
        </div>

        <Link
          to="/admin/courses/create"
          className="bg-[#1a504c] text-white px-5 py-3 rounded-xl font-medium hover:bg-black transition"
        >
          + Create Course
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <h3 className="text-gray-500 text-sm">
            Total Courses
          </h3>

          <p className="text-3xl font-bold text-[#1a504c] mt-2">
            15
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <h3 className="text-gray-500 text-sm">
            Published Courses
          </h3>

          <p className="text-3xl font-bold text-green-600 mt-2">
            12
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <h3 className="text-gray-500 text-sm">
            Draft Courses
          </h3>

          <p className="text-3xl font-bold text-yellow-500 mt-2">
            3
          </p>
        </div>
      </div>

      {/* Courses Table */}
      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#1a504c] text-white">
              <tr>
                <th className="p-4 text-left">Course</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Students</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course) => (
                <tr
                  key={course.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">
                    <div className="font-medium">
                      {course.title}
                    </div>
                  </td>

                  <td className="p-4">
                    {course.category}
                  </td>

                  <td className="p-4">
                    ₹{course.price}
                  </td>

                  <td className="p-4">
                    {course.students}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        course.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {course.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex flex-wrap gap-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
                        View
                      </button>

                      <button className="bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm">
                        Edit
                      </button>

                      <button className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}