export default function StudentRow({ student }) {
  return (
    <tr
      className="
        border-b border-slate-100 dark:border-slate-700
        hover:bg-slate-50 dark:hover:bg-slate-700/50
        transition-colors
      "
    >
      <td className="p-4">
        <p className="font-semibold text-slate-900 dark:text-white">
          {student.name}
        </p>
      </td>

      <td className="p-4 text-slate-700 dark:text-slate-300">
        {student.email}
      </td>

      <td className="p-4">
        <span className="capitalize text-slate-700 dark:text-slate-300">
          {student.role}
        </span>
      </td>

      <td className="p-4 text-slate-700 dark:text-slate-300">
        {new Date(student.createdAt).toLocaleDateString()}
      </td>

      <td className="p-4">
        <span
          className="
            px-3 py-1 rounded-full text-sm font-medium
            bg-emerald-100 text-emerald-700
            dark:bg-emerald-900/30
            dark:text-emerald-400
          "
        >
          Active
        </span>
      </td>

      <td className="p-4">
        <div className="flex flex-wrap gap-2">
          <button
            className="
              px-4 py-1.5 rounded-full
              bg-indigo-100 text-indigo-700
              hover:bg-indigo-200
              dark:bg-indigo-900/30
              dark:text-indigo-400
              transition text-sm font-medium
            "
          >
            View
          </button>

          <button
            className="
              px-4 py-1.5 rounded-full
              bg-amber-100 text-amber-700
              hover:bg-amber-200
              dark:bg-amber-900/30
              dark:text-amber-400
              transition text-sm font-medium
            "
          >
            Block
          </button>

          <button
            className="
              px-4 py-1.5 rounded-full
              bg-rose-100 text-rose-700
              hover:bg-rose-200
              dark:bg-rose-900/30
              dark:text-rose-400
              transition text-sm font-medium
            "
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}