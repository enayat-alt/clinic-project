import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentCourseApi = createApi({
  reducerPath: "studentCourseApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",

    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        headers.set(
          "Authorization",
          `Bearer ${token}`
        );
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    enrollInCourse: builder.mutation({
      query: (courseId) => ({
        url: `/student-courses/${courseId}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useEnrollInCourseMutation,
} = studentCourseApi;