export default function CourseFilters({
  search,
  setSearch,
}) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by title, category or instructor..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
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
  );
}