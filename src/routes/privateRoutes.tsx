import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Sidebar from "../components/Sidebar";
import { ROLE_BASED_ACCESS } from "../utils/consts";
import Navbar from "../components/Navbar";

const PrivateRoutes = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.token);
  const userRole = useSelector((state: RootState) => state.auth.role);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const allowedRoles = ROLE_BASED_ACCESS[location.pathname];
  if (allowedRoles && !allowedRoles.includes(userRole as string)) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar />

        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrivateRoutes;
