import { Navigate, Outlet } from "react-router-dom";
import useMyContext from "../hooks/UseMyContext";

const ProtectedRoutes = () => {
  const { user, loading } = useMyContext();

  if (loading) {
    return null;
  }

  if (
    user &&
    !user.profile_complete &&
    location.pathname !== "/createDonorProfile"
  ) {
    return <Navigate to="/createDonorProfile" replace />;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
