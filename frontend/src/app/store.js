import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";
import { appointmentApi } from "../services/appointmentApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      appointmentApi.middleware,
    ),
});
