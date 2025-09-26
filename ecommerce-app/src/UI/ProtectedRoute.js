import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const isLoggedin = localStorage.getItem("isAdmin");
  return isLoggedin === "true" ? (
    children
  ) : (
    <Navigate to="/login" replace></Navigate>
  );
};

export default ProtectedRoute;
