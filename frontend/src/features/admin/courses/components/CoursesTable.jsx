import Pagination from "../../components/Pagination";
import CourseRow from "./CourseRow";
import { Link } from "react-router-dom";

export default function CoursesTable({
  courses,
  page,
  pagination,
  setSearchParams,
  navigate,
  handleDelete,
}) {
  if (courses.length === 0) {
    return (
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
    );
  }

  return (
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
            {courses.map((course) => (
              <CourseRow
                key={course.id}
                course={course}
                navigate={navigate}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>

        <Pagination
          currentPage={page}
          totalPages={
            pagination?.totalPages || 1
          }
          onPageChange={(newPage) =>
            setSearchParams({
              page: newPage,
            })
          }
        />
      </div>
    </div>
  );
}