import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import MainLayout from "@/components/layout/MainLayout";

const UserRoutes = () => {
  const user = Cookies.get("user_information");

  return user ? <MainLayout /> : <Navigate to="/" />;
};

export default UserRoutes;
