export default function StudentStats({
  totalUsers,
  studentCount,
  adminCount,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Total Users
        </p>

        <h2 className="text-3xl font-bold text-indigo-600 mt-2">
          {totalUsers}
        </h2>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Students
        </p>

        <h2 className="text-3xl font-bold text-emerald-600 mt-2">
          {studentCount}
        </h2>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Admins
        </p>

        <h2 className="text-3xl font-bold text-amber-600 mt-2">
          {adminCount}
        </h2>
      </div>
    </div>
  );
}