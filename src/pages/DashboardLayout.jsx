import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Loading } from "../components";

const DashboardLayout = () => {
  const { user, userLoading } = useAuthContext();
  console.log(user, userLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== "admin") {
      console.log("inside");
      return navigate("/");
    }
  }, []);

  return <div>{userLoading ? <Loading /> : <Outlet />}</div>;
};
export default DashboardLayout;
