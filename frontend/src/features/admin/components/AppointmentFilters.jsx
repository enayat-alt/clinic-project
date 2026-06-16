import { Search, Filter } from "lucide-react";

export default function AppointmentFilters({
  search,
  setSearch,
  status,
  setStatus,
}) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-5 mb-6">
      <div className="flex items-center gap-2 mb-5">
      
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search patient name or email..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              h-12
              pl-11
              pr-4
              rounded-2xl
              border border-slate-200
              dark:border-slate-600
              bg-slate-50 dark:bg-slate-700
              text-slate-700 dark:text-white
              placeholder:text-slate-400
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500/20
              focus:border-indigo-500
              transition-all
            "
          />
        </div>

        {/* Status */}
        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="
            h-12
            px-4
            rounded-2xl
            border border-slate-200
            dark:border-slate-600
            bg-slate-50 dark:bg-slate-700
            text-slate-700 dark:text-white
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500/20
            focus:border-indigo-500
            transition-all
          "
        >
          <option value="">
            All Status
          </option>

          <option value="pending">
            Pending
          </option>

          <option value="confirmed">
            Confirmed
          </option>

          <option value="cancelled">
            Cancelled
          </option>
        </select>
      </div>
    </div>
  );
}