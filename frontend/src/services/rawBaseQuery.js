import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rawBaseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.VITE_API_URL ||
    "https://clinic-project-7f07.onrender.com/api",

  credentials: "include",

  prepareHeaders: (
    headers,
    { getState }
  ) => {
    const token =
      getState().auth?.accessToken;

    if (token) {
      headers.set(
        "Authorization",
        `Bearer ${token}`
      );
    }

    return headers;
  },
});