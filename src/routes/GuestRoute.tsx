import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../store/authSlice";

export const GuestRoute = ({ children }: { children: React.ReactElement }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? <Navigate to="/profile" replace /> : children;
};
