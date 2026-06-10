

import { useGetAppointmentsQuery } from "../../services/appointmentApi";
import { useGetDashboardStatsQuery } from "../courses/services/dashboardStatsApi";

export default function Dashboard() {
  const {
    data,
    isLoading,
    error,
  } = useGetAppointmentsQuery();

  const {
    data: dashboardStats,
    isLoading: statsLoading,
    error: statsError,
  } = useGetDashboardStatsQuery();

  const appointments = data?.appointments || [];

  const totalAppointments = appointments.length;

  const pendingAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "pending"
  ).length;

  const confirmedAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "confirmed"
  ).length;

  const stats = [
    {
      title: "Total Appointments",
      value: totalAppointments,
    },
    {
      title: "Pending Appointments",
      value: pendingAppointments,
    },
    {
      title: "Confirmed Appointments",
      value: confirmedAppointments,
    },
    {
      title: "Total Students",
      value:
        dashboardStats?.totalStudents || 0,
    },
    {
      title: "Total Courses",
      value:
        dashboardStats?.totalCourses || 0,
    },
    {
      title: "Total Enrollments",
      value:
        dashboardStats?.totalEnrollments || 0,
    },
  ];

  if (isLoading || statsLoading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-lg font-semibold text-[#1a504c]">
          Loading Dashboard...
        </div>
      </div>
    );
  }

  if (error || statsError) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-lg font-semibold text-red-500">
          Failed to load dashboard data
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome to the Admin Dashboard
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-md transition"
          >
            <h3 className="text-gray-500 text-sm font-medium">
              {item.title}
            </h3>

            <p className="text-3xl font-bold text-[#1a504c] mt-3">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Appointments */}
      <div className="mt-10 bg-white rounded-2xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold mb-6">
          Recent Appointments
        </h2>

        {appointments.length === 0 ? (
          <p className="text-gray-500">
            No appointments found.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left py-3 px-4">
                    Patient
                  </th>

                  <th className="text-left py-3 px-4">
                    Phone
                  </th>

                  <th className="text-left py-3 px-4">
                    Service
                  </th>

                  <th className="text-left py-3 px-4">
                    Date
                  </th>

                  <th className="text-left py-3 px-4">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {appointments
                  .slice(0, 5)
                  .map((appointment) => (
                    <tr
                      key={appointment.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="py-3 px-4">
                        {appointment.fullName}
                      </td>

                      <td className="py-3 px-4">
                        {appointment.phone}
                      </td>

                      <td className="py-3 px-4">
                        {appointment.service}
                      </td>

                      <td className="py-3 px-4">
                        {
                          appointment.appointmentDate
                        }
                      </td>

                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            appointment.status ===
                            "confirmed"
                              ? "bg-green-100 text-green-700"
                              : appointment.status ===
                                "cancelled"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}