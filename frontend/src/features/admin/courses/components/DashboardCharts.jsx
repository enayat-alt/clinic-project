import { useState } from "react";
import { useGetDashboardStatsQuery } from "../services/dashboardStatsApi";

export default function DashboardCharts() {
  const { data: dashboardStats } = useGetDashboardStatsQuery();

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

  const [activePoint, setActivePoint] = useState(null);

  // Find maximum appointment value
  const maxAppointments = Math.max(
    ...appointmentData.map(
      (item) => Number(item.appointments) || 0
    ),
    1
  );

  // SVG chart dimensions
  const chartWidth = 700;
  const chartHeight = 240;

  const padding = {
    top: 20,
    right: 20,
    bottom: 40,
    left: 45,
  };

  const graphWidth =
    chartWidth - padding.left - padding.right;

  const graphHeight =
    chartHeight - padding.top - padding.bottom;

  // Generate chart points
  const points = appointmentData.map((item, index) => {
    const x =
      appointmentData.length === 1
        ? padding.left + graphWidth / 2
        : padding.left +
          (index / (appointmentData.length - 1)) * graphWidth;

    const value = Number(item.appointments) || 0;

    const y =
      padding.top +
      graphHeight -
      (value / maxAppointments) * graphHeight;

    return {
      x,
      y,
      value,
      day: item.day,
    };
  });

  // Create SVG line path
  const linePath =
    points.length > 0
      ? points
          .map(
            (point, index) =>
              `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
          )
          .join(" ")
      : "";

  // Create SVG area path
  const areaPath =
    points.length > 0
      ? `
        ${linePath}
        L ${points[points.length - 1].x} ${
          padding.top + graphHeight
        }
        L ${points[0].x} ${
          padding.top + graphHeight
        }
        Z
      `
      : "";

  // Y-axis values
  const yAxisValues = [0, 0.25, 0.5, 0.75, 1].map(
    (percentage) =>
      Math.round(maxAppointments * percentage)
  );

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

        <div className="h-[260px] w-full">
          {appointmentData.length === 0 ? (
            <div className="h-full flex items-center justify-center text-sm text-slate-400">
              No appointment data available
            </div>
          ) : (
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              {/* Horizontal grid lines */}
              {yAxisValues.map((value, index) => {
                const y =
                  padding.top +
                  graphHeight -
                  (index / 4) * graphHeight;

                return (
                  <g key={index}>
                    <line
                      x1={padding.left}
                      y1={y}
                      x2={padding.left + graphWidth}
                      y2={y}
                      stroke="currentColor"
                      className="text-slate-100 dark:text-slate-700"
                      strokeWidth="1"
                    />

                    <text
                      x={padding.left - 10}
                      y={y + 4}
                      textAnchor="end"
                      fontSize="11"
                      fill="currentColor"
                      className="text-slate-400"
                    >
                      {value}
                    </text>
                  </g>
                );
              })}

              {/* Area fill */}
              {points.length > 1 && (
                <path
                  d={areaPath}
                  fill="#1a504c"
                  fillOpacity="0.12"
                />
              )}

              {/* Chart line */}
              {points.length > 1 && (
                <path
                  d={linePath}
                  fill="none"
                  stroke="#1a504c"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {/* Points */}
              {points.map((point, index) => (
                <g key={index}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="10"
                    fill="transparent"
                    className="cursor-pointer"
                    onMouseEnter={() =>
                      setActivePoint(index)
                    }
                    onMouseLeave={() =>
                      setActivePoint(null)
                    }
                  />

                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill="#1a504c"
                    className="pointer-events-none"
                  />

                  {/* Tooltip */}
                  {activePoint === index && (
                    <g pointerEvents="none">
                      <rect
                        x={point.x - 40}
                        y={point.y - 45}
                        width="80"
                        height="32"
                        rx="6"
                        fill="#1a504c"
                      />

                      <text
                        x={point.x}
                        y={point.y - 25}
                        textAnchor="middle"
                        fontSize="11"
                        fill="white"
                      >
                        {point.day}: {point.value}
                      </text>
                    </g>
                  )}
                </g>
              ))}

              {/* X-axis labels */}
              {points.map((point, index) => (
                <text
                  key={index}
                  x={point.x}
                  y={chartHeight - 12}
                  textAnchor="middle"
                  fontSize="11"
                  fill="currentColor"
                  className="text-slate-400"
                >
                  {point.day}
                </text>
              ))}
            </svg>
          )}
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