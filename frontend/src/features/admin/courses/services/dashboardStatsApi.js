import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dashboardStatsApi = createApi({
  reducerPath: "dashboardStatsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",

    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: () => "/admin/dashboard-stats",
    }),
    getStudents: builder.query({
      query: ({ page = 1, limit = 10 } = {}) =>
        `/admin/students?page=${page}&limit=${limit}`,
    }),
  }),
});

export const { useGetDashboardStatsQuery, useGetStudentsQuery } =
  dashboardStatsApi;
