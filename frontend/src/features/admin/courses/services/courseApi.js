import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["Courses"],

  endpoints: (builder) => ({
    // getCourses: builder.query({
    //   query: () => ({
    //     url: "/courses",
    //   }),
    //   providesTags: ["Courses"],
    // }),
    getCourses: builder.query({
      query: ({ page = 1, limit = 6 }) =>
        `/courses?page=${page}&limit=${limit}`,
    }),

    getCourseById: builder.query({
      query: (id) => ({
        url: `/courses/${id}`,
      }),
    }),

    createCourse: builder.mutation({
      query: (course) => ({
        url: "/courses",
        method: "POST",
        body: course,
      }),
      invalidatesTags: ["Courses"],
    }),

    updateCourse: builder.mutation({
      query: ({ id, ...course }) => ({
        url: `/courses/${id}`,
        method: "PUT",
        body: course,
      }),
      invalidatesTags: ["Courses"],
    }),

    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `/courses/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Courses"],
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = courseApi;


