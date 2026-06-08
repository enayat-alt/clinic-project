import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const lessonApi = createApi({
  reducerPath: "lessonApi",
    baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["Lessons"],

  endpoints: (builder) => ({
    getLessonsByChapter: builder.query({
      query: (chapterId) => ({
        url: `/lessons/chapter/${chapterId}`,
      }),
      providesTags: ["Lessons"],
    }),

    createLesson: builder.mutation({
      query: (lesson) => ({
        url: "/lessons",
        method: "POST",
        body: lesson,
      }),
      invalidatesTags: ["Lessons"],
    }),

    deleteLesson: builder.mutation({
      query: (id) => ({
        url: `/lessons/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Lessons"],
    }),
  }),
});

export const {
  useGetLessonsByChapterQuery,
  useCreateLessonMutation,
  useDeleteLessonMutation,
} = lessonApi;