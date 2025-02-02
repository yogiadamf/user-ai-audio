import Cookies from "js-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const UnauthenticatedRoutes = () => {
  const location = useLocation();
  const user = Cookies.get("user_information");

  return user ? (
    <Navigate to="/chat" />
  ) : location.pathname === "/user-information" ? (
    <Outlet />
  ) : (
    <Navigate to="/user-information" />
  );
};

export default UnauthenticatedRoutes;
