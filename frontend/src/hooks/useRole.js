import { useAuth } from "./useAuth";

export const useRole = (allowedRoles = []) => {
  const { role, isAuthenticated } = useAuth();
  return {
    isAllowed: isAuthenticated && allowedRoles.includes(role),
    role,
  };
};
