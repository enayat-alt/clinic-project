import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useRefreshMutation, useGetMeQuery } from "../../services/authApi";

import { setCredentials, setUser } from "../../app/authSlice";

export default function SessionRestorer({ children }) {
  const dispatch = useDispatch();

  const [isReady, setIsReady] = useState(false);

  const [shouldGetMe, setShouldGetMe] = useState(false);

  const [refresh] = useRefreshMutation();

  const { data, isSuccess, isError } = useGetMeQuery(undefined, {
    skip: !shouldGetMe,
  });

  // Step 1: Restore access token
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const response = await refresh().unwrap();

        dispatch(
          setCredentials({
            accessToken: response.accessToken,
            user: null,
          }),
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
  }, [isSuccess, isError, data, dispatch]);

  if (!isReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#081A33] via-[#0F2D56] to-[#174A84]">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 animate-spin rounded-full border-[5px] border-cyan-400/30 border-t-cyan-300"></div>

          <h2 className="mt-6 text-xl font-semibold text-white">Loading...</h2>

          <p className="mt-2 text-sm text-slate-300">
            Please wait while we prepare your experience.
          </p>
        </div>
      </div>
    );
  }

  return children;
}
