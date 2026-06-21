import { Link } from "react-router-dom";

export default function CourseHeader() {
  return (
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
  );
}