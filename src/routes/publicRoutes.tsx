import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const PublicRoutes = () => {
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.token);

  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoutes;
