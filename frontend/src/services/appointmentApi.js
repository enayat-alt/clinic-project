// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseQueryWithReauth } from "./baseQueryWithReauth";

// export const appointmentApi = createApi({
//   reducerPath: "appointmentApi",
//    baseQuery: baseQueryWithReauth,

//   endpoints: (builder) => ({
//     bookAppointment: builder.mutation({
//       query: (data) => ({
//         url: "/appointments",
//         method: "POST",
//         body: data,
//       }),
//     }),

//     getAppointments: builder.query({
//       query: ({ page = 1, limit = 10 }) =>
//         `/appointments?page=${page}&limit=${limit}`,
//     }),

//     acceptAppointment: builder.mutation({
//       query: (id) => ({
//         url: `/appointments/${id}/accept`,
//         method: "PATCH",
//       }),
//     }),

//     rejectAppointment: builder.mutation({
//       query: (id) => ({
//         url: `/appointments/${id}/reject`,
//         method: "PATCH",
//       }),
//     }),
//   }),
// });

// export const {
//   useBookAppointmentMutation,
//   useGetAppointmentsQuery,
//   useAcceptAppointmentMutation,
//   useRejectAppointmentMutation,
// } = appointmentApi;


import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReauth";

export const appointmentApi = createApi({
  reducerPath: "appointmentApi",
  baseQuery: baseQueryWithReauth,

  tagTypes: ["Appointments"],

  endpoints: (builder) => ({
    bookAppointment: builder.mutation({
      query: (data) => ({
        url: "/appointments",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Appointments"],
    }),

    getAppointments: builder.query({
      query: ({ page = 1, limit = 10 }) =>
        `/appointments?page=${page}&limit=${limit}`,

      providesTags: ["Appointments"],
    }),

    acceptAppointment: builder.mutation({
      query: (id) => ({
        url: `/appointments/${id}/accept`,
        method: "PATCH",
      }),

      invalidatesTags: ["Appointments"],
    }),

    rejectAppointment: builder.mutation({
      query: (id) => ({
        url: `/appointments/${id}/reject`,
        method: "PATCH",
      }),

      invalidatesTags: ["Appointments"],
    }),
  }),
});

export const {
  useBookAppointmentMutation,
  useGetAppointmentsQuery,
  useAcceptAppointmentMutation,
  useRejectAppointmentMutation,
} = appointmentApi;