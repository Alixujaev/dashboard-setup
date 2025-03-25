import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Redirect = () => {
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.token);

  return isAuthenticated ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Redirect;
