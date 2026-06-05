import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appointmentApi = createApi({
  reducerPath: "appointmentApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),

  endpoints: (builder) => ({
    bookAppointment: builder.mutation({
      query: (data) => ({
        url: "/appointments",
        method: "POST",
        body: data,
      }),
    }),

    getAppointments: builder.query({
      query: () => "/appointments",
    }),

    acceptAppointment: builder.mutation({
      query: (id) => ({
        url: `/appointments/${id}/accept`,
        method: "PATCH",
      }),
    }),

    rejectAppointment: builder.mutation({
      query: (id) => ({
        url: `/appointments/${id}/reject`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useBookAppointmentMutation,
  useGetAppointmentsQuery,
  useAcceptAppointmentMutation,
  useRejectAppointmentMutation,
} = appointmentApi;