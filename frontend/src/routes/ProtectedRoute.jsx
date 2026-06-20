
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentToken  } from "../app/authSlice";


export default function ProtectedRoute() {
  const token = useSelector(
    selectCurrentToken
  );
 
  return token ? (
    <Outlet />
  ) : (
    <Navigate
      to="/learning/login"
      replace
    />
  );
}