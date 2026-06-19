import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rawBaseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api",

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