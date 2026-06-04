import { useSelector, useDispatch } from "react-redux";
import { selectAuth, selectUser, selectRole, selectIsAuthenticated, logout } from "../redux/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  const user = useSelector(selectUser);
  const role = useSelector(selectRole);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return {
    user,
    role,
    isAuthenticated,
    loading: auth.loading,
    error: auth.error,
    logout: () => dispatch(logout()),
    isPatient: role === "patient",
    isDoctor: role === "doctor",
    isAdmin: role === "admin",
  };
};
