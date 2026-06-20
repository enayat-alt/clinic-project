import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { useGetDashboardStatsQuery } from "../services/dashboardStatsApi";

export default function DashboardCharts() {
  const { data: dashboardStats } =
    useGetDashboardStatsQuery();

  const appointmentData =
    dashboardStats?.appointmentsThisWeek || [];

  const enrollmentData = [
    {
      course: "Physio",
      count: 40,
      color: "bg-emerald-500",
    },
    {
      course: "Cardiology",
      count: 30,
      color: "bg-indigo-500",
    },
    {
      course: "Neurology",
      count: 20,
      color: "bg-orange-500",
    },
    {
      course: "Dermatology",
      count: 10,
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-6">
      {/* Appointments Chart */}
      <div className="xl:col-span-2 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-slate-800 dark:text-white">
            Appointments This Week
          </h3>

          <span className="text-sm text-slate-400">
            Live Data
          </span>
        </div>

        <div className="h-[260px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <AreaChart data={appointmentData}>
              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="appointments"
                stroke="#1a504c"
                fill="#1a504c"
                fillOpacity={0.15}
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Enrollment Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-5">
        <h3 className="font-semibold text-slate-800 dark:text-white mb-6">
          Enrollment By Course
        </h3>

        <div className="space-y-5">
          {enrollmentData.map((course) => (
            <div key={course.course}>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {course.course}
                </span>

                <span className="text-sm font-medium text-slate-500">
                  {course.count}
                </span>
              </div>

              <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`${course.color} h-full rounded-full`}
                  style={{
                    width: `${course.count * 2.5}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}