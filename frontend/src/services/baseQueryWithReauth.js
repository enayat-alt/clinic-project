import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { AUTH_ROUTES } from "./apiRoutes";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include",

  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseQueryWithReauth = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(
    args,
    api,
    extraOptions
  );

  if (result.error?.status === 401) {
      console.log("401 DETECTED");
    const refreshResult = await baseQuery(
      {
        url: AUTH_ROUTES.REFRESH,
        method: "POST",
      },
      api,
      extraOptions
    );

    if (refreshResult.data?.accessToken) {
      localStorage.setItem(
        "accessToken",
        refreshResult.data.accessToken
      );

      result = await baseQuery(
        args,
        api,
        extraOptions
      );
    } else {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");

      window.location.href = "/learning/login";
    }
  }

  return result;
};