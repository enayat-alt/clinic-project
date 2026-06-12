import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";
import { appointmentApi } from "../services/appointmentApi";
import { studentCourseApi } from "../services/studentCourseApi";

//admin
import { courseApi } from "../features/admin/courses/services/courseApi";
import { chapterApi } from "../features/admin/courses/services/chapterApi";
import { lessonApi } from "../features/admin/courses/services/lessonApi";
import { dashboardStatsApi } from "../features/admin/courses/services/dashboardStatsApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [chapterApi.reducerPath]: chapterApi.reducer,
    [lessonApi.reducerPath]: lessonApi.reducer,
    [studentCourseApi.reducerPath]: studentCourseApi.reducer,
    [dashboardStatsApi.reducerPath]: dashboardStatsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      appointmentApi.middleware,
      courseApi.middleware,
      chapterApi.middleware,
      lessonApi.middleware,
      studentCourseApi.middleware,
      dashboardStatsApi.middleware
    ),
});
