
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseQueryWithReauth } from "../../../../services/baseQueryWithReauth";

// export const dashboardStatsApi = createApi({
//   reducerPath: "dashboardStatsApi",

//   baseQuery :baseQueryWithReauth,

//   endpoints: (builder) => ({
//     getDashboardStats: builder.query({
//       query: () => "/admin/dashboard-stats",
//     }),
//     getStudents: builder.query({
//       query: ({ page = 1, limit = 10 } = {}) =>
//         `/admin/students?page=${page}&limit=${limit}`,
//     }),
//   }),
// });

// export const { useGetDashboardStatsQuery, useGetStudentsQuery } =
//   dashboardStatsApi;



import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../../../../services/baseQueryWithReauth";


export const dashboardStatsApi = createApi({
  reducerPath: "dashboardStatsApi",

  baseQuery: baseQueryWithReauth,

  tagTypes: ["DashboardStats", "Students"],

  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: () => "/admin/dashboard-stats",

      providesTags: ["DashboardStats"],
    }),

    getStudents: builder.query({
      query: ({ page = 1, limit = 10 } = {}) =>
        `/admin/students?page=${page}&limit=${limit}`,

      providesTags: ["Students"],
    }),
  }),
});

export const { useGetDashboardStatsQuery, useGetStudentsQuery } =
  dashboardStatsApi;