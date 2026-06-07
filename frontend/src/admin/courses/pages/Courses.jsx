import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdminCourses() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storedCourses =
      JSON.parse(localStorage.getItem("courses")) || [];

    setCourses(storedCourses);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    const updatedCourses = courses.filter(
      (course) => course.id !== id
    );

    setCourses(updatedCourses);

    localStorage.setItem(
      "courses",
      JSON.stringify(updatedCourses)
    );
  };

  const totalCourses = courses.length;

  const publishedCourses = courses.filter(
    (course) =>
      course.status?.toLowerCase() === "published"
  ).length;

  const draftCourses = totalCourses - publishedCourses;

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
          className="bg-[#1a504c] text-white px-5 py-3 rounded-xl font-medium hover:bg-black transition text-center"
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
            {totalCourses}
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <h3 className="text-gray-500 text-sm">
            Published Courses
          </h3>

          <p className="text-3xl font-bold text-green-600 mt-2">
            {publishedCourses}
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <h3 className="text-gray-500 text-sm">
            Draft Courses
          </h3>

          <p className="text-3xl font-bold text-yellow-500 mt-2">
            {draftCourses}
          </p>
        </div>
      </div>

      {/* Empty State */}
      {courses.length === 0 ? (
        <div className="bg-white rounded-2xl border p-10 text-center">
          <h3 className="text-2xl font-semibold">
            No Courses Found
          </h3>

          <p className="text-gray-500 mt-2">
            Create your first course to get started.
          </p>

          <Link
            to="/admin/courses/create"
            className="inline-block mt-5 bg-[#1a504c] text-white px-5 py-3 rounded-xl"
          >
            Create Course
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead className="bg-[#1a504c] text-white">
                <tr>
                  <th className="p-4 text-left">
                    Course
                  </th>

                  <th className="p-4 text-left">
                    Instructor
                  </th>

                  <th className="p-4 text-left">
                    Price
                  </th>

                  <th className="p-4 text-left">
                    Chapters
                  </th>

                  <th className="p-4 text-left">
                    Status
                  </th>

                  <th className="p-4 text-left">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {courses.map((course) => (
                  <tr
                    key={course.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {course.thumbnail && (
                          <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        )}

                        <div>
                          <div className="font-semibold">
                            {course.title}
                          </div>

                          <div className="text-sm text-gray-500">
                            {course.description?.slice(
                              0,
                              50
                            )}
                            ...
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="p-4">
                      {course.instructor}
                    </td>

                    <td className="p-4">
                      ₹{course.price}
                    </td>

                    <td className="p-4">
                      {course.chapters?.length || 0}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          course.status?.toLowerCase() ===
                          "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {course.status || "Draft"}
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() =>
                            navigate(
                              `/admin/courses/${course.id}/content`
                            )
                          }
                          className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600"
                        >
                          Manage
                        </button>

                        <button
                          onClick={() =>
                            navigate(
                              `/admin/courses/${course.id}/edit`
                            )
                          }
                          className="bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-yellow-600"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(course.id)
                          }
                          className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
                        >
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
      )}
    </div>
  );
}