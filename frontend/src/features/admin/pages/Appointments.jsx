

import { useState } from "react";
import {
  useGetAppointmentsQuery,
  useAcceptAppointmentMutation,
  useRejectAppointmentMutation,
} from "../../../services/appointmentApi";

export default function AdminAppointments() {
  const [search, setSearch] = useState("");

  const { data, isLoading, refetch } =
    useGetAppointmentsQuery();

  const [acceptAppointment] =
    useAcceptAppointmentMutation();

  const [rejectAppointment] =
    useRejectAppointmentMutation();

  const handleAccept = async (id) => {
    try {
      await acceptAppointment(id).unwrap();
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (id) => {
    try {
      await rejectAppointment(id).unwrap();
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center py-10 text-slate-500">
        Loading appointments...
      </div>
    );
  }

  const appointments = data?.appointments || [];

  // Search
  const filteredAppointments =
    appointments.filter(
      (item) =>
        item.fullName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        item.email
          ?.toLowerCase()
          .includes(search.toLowerCase())
    );

  // Stats
  const pendingCount = appointments.filter(
    (a) => a.status === "pending"
  ).length;

  const confirmedCount = appointments.filter(
    (a) => a.status === "confirmed"
  ).length;

  const cancelledCount = appointments.filter(
    (a) => a.status === "cancelled"
  ).length;

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Appointments
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Manage all appointment requests
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Pending
          </p>

          <h2 className="text-3xl font-bold text-amber-600 mt-2">
            {pendingCount}
          </h2>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Confirmed
          </p>

          <h2 className="text-3xl font-bold text-emerald-600 mt-2">
            {confirmedCount}
          </h2>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Cancelled
          </p>

          <h2 className="text-3xl font-bold text-rose-600 mt-2">
            {cancelledCount}
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by patient name or email..."
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

      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
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
              {filteredAppointments.map((item) => (
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
                        item.status ===
                        "confirmed"
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                          : item.status ===
                            "cancelled"
                          ? "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400"
                          : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-4">
                    {item.status ===
                    "pending" ? (
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            handleAccept(
                              item.id
                            )
                          }
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
                          onClick={() =>
                            handleReject(
                              item.id
                            )
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

              {filteredAppointments.length ===
                0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="py-12 text-center"
                  >
                    <p className="text-slate-500 dark:text-slate-400">
                      No appointments found.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}