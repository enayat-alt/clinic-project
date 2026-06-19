import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  useRefreshMutation,
  useGetMeQuery,
} from "../../services/authApi";

import {
  setCredentials,
  setUser,
} from "../../app/authSlice";

export default function SessionRestorer({
  children,
}) {
  const dispatch = useDispatch();

  const [isReady, setIsReady] =
    useState(false);

  const [shouldGetMe, setShouldGetMe] =
    useState(false);

  const [refresh] =
    useRefreshMutation();

  const {
    data,
    isSuccess,
    isError,
  } = useGetMeQuery(undefined, {
    skip: !shouldGetMe,
  });

  // Step 1: Restore access token
  useEffect(() => {
    const restoreSession =
      async () => {
        try {
          const response =
            await refresh().unwrap();

          dispatch(
            setCredentials({
              accessToken:
                response.accessToken,
              user: null,
            })
          );

          setShouldGetMe(true);
        } catch (error) {
          setIsReady(true);
        }
      };

    restoreSession();
  }, [dispatch, refresh]);

  // Step 2: Load current user
  useEffect(() => {
    if (isSuccess && data?.user) {
      dispatch(setUser(data.user));

      setIsReady(true);
    }

    if (isError) {
      setIsReady(true);
    }
  }, [
    isSuccess,
    isError,
    data,
    dispatch,
  ]);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#e5f9f8]">
        <div className="w-12 h-12 border-4 border-[#1a504c] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return children;
}