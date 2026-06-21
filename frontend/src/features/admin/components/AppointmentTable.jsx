export default function AppointmentTable({
  appointments,
  onAccept,
  onReject,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
              Patient
            </th>

            <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
              Phone
            </th>

            <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
              Service
            </th>

            <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
              Date
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
          {appointments.map((item) => (
            <tr
              key={item.id}
              className="
                border-b border-slate-100 dark:border-slate-700
                hover:bg-slate-50 dark:hover:bg-slate-700/50
                transition-colors
              "
            >
              <td className="p-4">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {item.fullName}
                  </p>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.email}
                  </p>
                </div>
              </td>

              <td className="p-4 text-slate-700 dark:text-slate-300">
                {item.phone}
              </td>

              <td className="p-4 text-slate-700 dark:text-slate-300">
                {item.service}
              </td>

              <td className="p-4 text-slate-700 dark:text-slate-300">
                {new Date(
                  item.appointmentDate
                ).toLocaleDateString()}
              </td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === "confirmed"
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                      : item.status === "cancelled"
                        ? "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400"
                        : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td className="p-4">
                {item.status === "pending" ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => onAccept(item.id)}
                      className="
                        px-4 py-1.5
                        rounded-full
                        bg-emerald-100
                        text-emerald-700
                        hover:bg-emerald-200
                        dark:bg-emerald-900/30
                        dark:text-emerald-400
                        transition
                        text-sm
                        font-medium
                      "
                    >
                      Accept
                    </button>

                    <button
                      onClick={() => onReject(item.id)}
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
                      Reject
                    </button>
                  </div>
                ) : (
                  <span className="text-sm text-slate-400">
                    No actions
                  </span>
                )}
              </td>
            </tr>
          ))}

          {appointments.length === 0 && (
            <tr>
              <td colSpan="6" className="py-12 text-center">
                <p className="text-slate-500 dark:text-slate-400">
                  No appointments found.
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}