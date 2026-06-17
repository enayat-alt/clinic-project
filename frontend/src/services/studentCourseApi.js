
// import { createApi } from "@reduxjs/toolkit/query/react";
// import { baseQueryWithReauth } from "./baseQueryWithReauth";

// export const studentCourseApi = createApi({
//   reducerPath: "studentCourseApi",

//   baseQuery: baseQueryWithReauth,

//   endpoints: (builder) => ({
//     enrollInCourse: builder.mutation({
//       query: (courseId) => ({
//         url: `/student-courses/${courseId}`,
//         method: "POST",
//       }),
//     }),

//     getMyCourses: builder.query({
//       query: () => ({
//         url: "/student-courses/my-courses",
//         method: "GET",
//       }),
//     }),
//   }),
// });

// export const {
//   useEnrollInCourseMutation,
//   useGetMyCoursesQuery,
// } = studentCourseApi;


import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReauth";

export const studentCourseApi = createApi({
  reducerPath: "studentCourseApi",

  baseQuery: baseQueryWithReauth,

  tagTypes: ["MyCourses"],

  endpoints: (builder) => ({
    enrollInCourse: builder.mutation({
      query: (courseId) => ({
        url: `/student-courses/${courseId}`,
        method: "POST",
      }),

      invalidatesTags: ["MyCourses"],
    }),

    getMyCourses: builder.query({
      query: () => ({
        url: "/student-courses/my-courses",
        method: "GET",
      }),

      providesTags: ["MyCourses"],
    }),
  }),
});

export const {
  useEnrollInCourseMutation,
  useGetMyCoursesQuery,
} = studentCourseApi;