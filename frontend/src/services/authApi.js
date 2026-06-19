import { createApi } from "@reduxjs/toolkit/query/react";
//import { baseQueryWithReauth } from "./baseQueryWithReauth";
import { rawBaseQuery } from "./rawBaseQuery";
import { AUTH_ROUTES } from "./apiRoutes";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: rawBaseQuery,

  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: AUTH_ROUTES.REGISTER,
        method: "POST",
        body: user,
      }),
    }),

    login: builder.mutation({
      query: (user) => ({
        url: AUTH_ROUTES.LOGIN,
        method: "POST",
        body: user,
      }),
    }),

    refresh: builder.mutation({
      query: () => ({
        url: AUTH_ROUTES.REFRESH,
        method: "POST",
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: AUTH_ROUTES.LOGOUT,
        method: "POST",
      }),
    }),

    getMe: builder.query({
      query: () => ({
        url: AUTH_ROUTES.ME,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useRefreshMutation,
  useLogoutMutation,
  useGetMeQuery,
} = authApi;
