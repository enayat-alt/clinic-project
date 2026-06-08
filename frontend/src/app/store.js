import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";
import { appointmentApi } from "../services/appointmentApi";

//admin
import { courseApi } from "../admin/courses/services/courseApi";
import { chapterApi } from "../admin/courses/services/chapterApi";
import { lessonApi } from "../admin/courses/services/lessonApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [chapterApi.reducerPath]: chapterApi.reducer,
    [lessonApi.reducerPath]: lessonApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      appointmentApi.middleware,
      courseApi.middleware,
      chapterApi.middleware,
      lessonApi.middleware
    ),
});
