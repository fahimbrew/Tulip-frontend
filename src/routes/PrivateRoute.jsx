import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  //   console.log(location);
  if (loader) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;
