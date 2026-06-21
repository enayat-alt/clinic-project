export default function CourseRow({
  course,
  navigate,
  handleDelete,
}) {
  return (
    <tr
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
            course.status?.toLowerCase() ===
            "published"
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
              : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
          }`}
        >
          {course.status}
        </span>
      </td>

      <td className="p-4 min-w-[260px]">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <button
            onClick={() =>
              navigate(
                `/admin/courses/${course.id}/content`,
              )
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
              navigate(
                `/admin/courses/${course.id}/edit`,
              )
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
            onClick={() =>
              handleDelete(course.id)
            }
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
  );
}