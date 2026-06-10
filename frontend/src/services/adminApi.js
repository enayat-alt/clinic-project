// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const adminApi = createApi({
//   reducerPath: "adminApi",

//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:5000/api",

//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem("accessToken");

//       if (token) {
//         headers.set(
//           "Authorization",
//           `Bearer ${token}`
//         );
//       }

//       return headers;
//     },
//   }),

//   endpoints: (builder) => ({
//     getStudents: builder.query({
//       query: () => "/admin/students",
//     }),

//     getDashboardStats: builder.query({
//       query: () => "/admin/dashboard-stats",
//     }),
//   }),
// });

// export const {
//   useGetStudentsQuery,
//   useGetDashboardStatsQuery,
// } = adminApi;