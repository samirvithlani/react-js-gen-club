import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Login } from "./components/Login";

const useAuth = () => {
  //localstorage..
  const name =null;
  const user = name !== null ? true : false;
  return user;
};


const ProtectedRoute = () => {
    var navigate = useNavigate();
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;