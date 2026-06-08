import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const chapterApi = createApi({
  reducerPath: "chapterApi",
    baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["Chapters"],

  endpoints: (builder) => ({
    getChaptersByCourse: builder.query({
      query: (courseId) => ({
        url: `/chapters/course/${courseId}`,
      }),
      providesTags: ["Chapters"],
    }),

    createChapter: builder.mutation({
      query: (chapter) => ({
        url: "/chapters",
        method: "POST",
        body: chapter,
      }),
      invalidatesTags: ["Chapters"],
    }),

    deleteChapter: builder.mutation({
      query: (id) => ({
        url: `/chapters/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Chapters"],
    }),
  }),
});

export const {
  useGetChaptersByCourseQuery,
  useCreateChapterMutation,
  useDeleteChapterMutation,
} = chapterApi;