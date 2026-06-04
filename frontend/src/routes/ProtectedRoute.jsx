// import { Navigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// export default function PrivateRoute({ children }) {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// }


import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  return isLoggedIn
    ? <Outlet />
    : <Navigate to="/learning/login" />;
}