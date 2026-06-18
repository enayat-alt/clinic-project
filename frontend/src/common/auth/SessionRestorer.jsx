import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetMeQuery } from "../../services/authApi";
import { setUser } from "../../app/authSlice";

export default function SessionRestorer({
  children,
}) {
  const dispatch = useDispatch();

  const {
    data,
    isLoading,
    isSuccess,
  } = useGetMeQuery();

  useEffect(() => {
    if (isSuccess && data?.user) {
      dispatch(setUser(data.user));
    }
  }, [data, isSuccess, dispatch]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return children;
}