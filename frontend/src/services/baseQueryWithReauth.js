
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";

import { AUTH_ROUTES } from "./apiRoutes";

import {
  setCredentials,
  clearCredentials,
} from "../app/authSlice";

const mutex = new Mutex();

const rawBaseQuery = fetchBaseQuery({
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

export const baseQueryWithReauth = async (
  args,
  api,
  extraOptions
) => {
  await mutex.waitForUnlock();

  let result = await rawBaseQuery(
    args,
    api,
    extraOptions
  );

  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release =
        await mutex.acquire();

      try {
        const refreshResult =
          await rawBaseQuery(
            {
              url: AUTH_ROUTES.REFRESH,
              method: "POST",
            },
            api,
            extraOptions
          );

        if (
          refreshResult.data?.accessToken
        ) {
          api.dispatch(
            setCredentials({
              accessToken:
                refreshResult.data
                  .accessToken,
              user:
                refreshResult.data.user ||
                api.getState().auth.user,
            })
          );

          result = await rawBaseQuery(
            args,
            api,
            extraOptions
          );
        } else {
          api.dispatch(
            clearCredentials()
          );

          window.location.href =
            "/learning/login";
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();

      result = await rawBaseQuery(
        args,
        api,
        extraOptions
      );
    }
  }

  return result;
};