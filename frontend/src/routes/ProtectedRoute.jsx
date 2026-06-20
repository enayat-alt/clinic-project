import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCurrentToken,
  selectCurrentUser,
} from "../app/authSlice";

export default function ProtectedRoute({
  allowedRoles = [],
}) {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);

  // Not logged in
  if (!token) {
    return (
      <Navigate
        to="/learning"
        replace
      />
    );
  }

  // Role check
  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(user?.role)
  ) {
    // Student trying to access admin
    if (user?.role === "student") {
      return (
        <Navigate
          to="/learning/dashboard"
          replace
        />
      );
    }

    // Any other unauthorized role
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}