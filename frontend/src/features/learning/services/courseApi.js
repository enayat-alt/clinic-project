
// import { createApi } from "@reduxjs/toolkit/query/react";
// //import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseQueryWithReauth } from "../../../../services/baseQueryWithReauth";


// export const courseApi = createApi({
//   reducerPath: "courseApi",
//   baseQuery: baseQueryWithReauth,

//   tagTypes: ["Courses"],

//   endpoints: (builder) => ({
//     getCourses: builder.query({
//       query: ({ page = 1, limit = 6 }) =>
//         `/courses?page=${page}&limit=${limit}`,

//       providesTags: ["Courses"],
//     }),

//     getCourseById: builder.query({
//       query: (id) => ({
//         url: `/courses/${id}`,
//       }),

//       providesTags: ["Courses"],
//     }),

//     createCourse: builder.mutation({
//       query: (course) => ({
//         url: "/courses",
//         method: "POST",
//         body: course,
//       }),

//       invalidatesTags: ["Courses"],
//     }),

//     updateCourse: builder.mutation({
//       query: ({ id, ...course }) => ({
//         url: `/courses/${id}`,
//         method: "PUT",
//         body: course,
//       }),

//       invalidatesTags: ["Courses"],
//     }),

//     deleteCourse: builder.mutation({
//       query: (id) => ({
//         url: `/courses/${id}`,
//         method: "DELETE",
//       }),

//       invalidatesTags: ["Courses"],
//     }),
//   }),
// });


// export const {
//   useGetCoursesQuery,
//   useGetCourseByIdQuery,
//   useCreateCourseMutation,
//   useUpdateCourseMutation,
//   useDeleteCourseMutation,
// } = courseApi;
