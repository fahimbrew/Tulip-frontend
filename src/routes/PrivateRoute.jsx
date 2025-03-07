import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
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
  return <Navigate to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;
