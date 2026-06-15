
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useGetCoursesQuery,
  useDeleteCourseMutation,
} from "../services/courseApi";

export default function AdminCourses() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const { data: courses = [], isLoading, error } = useGetCoursesQuery();

  const [deleteCourse] = useDeleteCourseMutation();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?",
    );

    if (!confirmDelete) return;

    try {
      await deleteCourse(id).unwrap();
      alert("Course deleted successfully");
    } catch (error) {
      console.error(error);
      alert(error?.data?.message || "Failed to delete course");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-lg font-semibold text-slate-500 dark:text-slate-400">
          Loading courses...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-lg font-semibold text-rose-500">
          Failed to load courses
        </div>
      </div>
    );
  }

  const filteredCourses = courses.filter(
    (course) =>
      course.title?.toLowerCase().includes(search.toLowerCase()) ||
      course.category?.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor?.toLowerCase().includes(search.toLowerCase()),
  );

  const totalCourses = courses.length;

  const publishedCourses = courses.filter(
    (course) => course.status?.toLowerCase() === "published",
  ).length;

  const draftCourses = totalCourses - publishedCourses;

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Courses
          </h1>

          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Manage all learning courses
          </p>
        </div>

        <Link
          to="/admin/courses/create"
          className="
  inline-flex items-center
  bg-indigo-600
  hover:bg-indigo-700
  text-white
  px-4 py-2
  rounded-xl
  text-sm
  font-medium
  transition
"
        >
          + Create Course
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total Courses
          </p>

          <h2 className="text-3xl font-bold text-indigo-600 mt-2">
            {totalCourses}
          </h2>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Published Courses
          </p>

          <h2 className="text-3xl font-bold text-emerald-600 mt-2">
            {publishedCourses}
          </h2>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Draft Courses
          </p>

          <h2 className="text-3xl font-bold text-amber-600 mt-2">
            {draftCourses}
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title, category or instructor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full md:w-96
            px-4 py-3
            rounded-xl
            border border-slate-200
            dark:border-slate-600
            bg-white dark:bg-slate-800
            text-slate-700 dark:text-white
            placeholder:text-slate-400
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
          "
        />
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 ? (
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            No Courses Found
          </h3>

          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Create your first course to get started.
          </p>

          <Link
            to="/admin/courses/create"
            className="
              inline-block
              mt-5
              bg-indigo-600
              hover:bg-indigo-700
              text-white
              px-5 py-3
              rounded-xl
              transition
            "
          >
            Create Course
          </Link>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-slate-50 dark:bg-slate-700">
                <tr>
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                    Course
                  </th>

                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                    Instructor
                  </th>

                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                    Category
                  </th>

                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                    Price
                  </th>

                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                    Status
                  </th>

                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredCourses.map((course) => (
                  <tr
                    key={course.id}
                    className="
                        border-b border-slate-100 dark:border-slate-700
                        hover:bg-slate-50 dark:hover:bg-slate-700/50
                        transition-colors
                      "
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {course.thumbnail && (
                          <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                          />
                        )}

                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            {course.title}
                          </p>

                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {course.description?.slice(0, 60)}
                            ...
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="p-4 text-slate-700 dark:text-slate-300">
                      <div className="max-w-[180px] truncate">
                        {course.instructor}
                      </div>
                    </td>

                    <td className="p-4 text-slate-700 dark:text-slate-300">
                      {course.category}
                    </td>

                    <td className="p-4 text-slate-700 dark:text-slate-300">
                      ₹{Number(course.price).toLocaleString()}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          course.status?.toLowerCase() === "published"
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                            : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                        }`}
                      >
                        {course.status}
                      </span>
                    </td>

                    {/* <td className="p-4">
                      <div className="flex flex-wrap gap-2"> */}
                      <td className="p-4 min-w-[260px]">
  <div className="flex items-center gap-2 whitespace-nowrap">
                        <button
                          onClick={() =>
                            navigate(`/admin/courses/${course.id}/content`)
                          }
                          className="
                              px-4 py-1.5
                              rounded-full
                              bg-indigo-100
                              text-indigo-700
                              hover:bg-indigo-200
                              dark:bg-indigo-900/30
                              dark:text-indigo-400
                              transition
                              text-sm
                              font-medium
                            "
                        >
                          Manage
                        </button>

                        <button
                          onClick={() =>
                            navigate(`/admin/courses/${course.id}/edit`)
                          }
                          className="
                              px-4 py-1.5
                              rounded-full
                              bg-amber-100
                              text-amber-700
                              hover:bg-amber-200
                              dark:bg-amber-900/30
                              dark:text-amber-400
                              transition
                              text-sm
                              font-medium
                            "
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(course.id)}
                          className="
                              px-4 py-1.5
                              rounded-full
                              bg-rose-100
                              text-rose-700
                              hover:bg-rose-200
                              dark:bg-rose-900/30
                              dark:text-rose-400
                              transition
                              text-sm
                              font-medium
                            "
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
