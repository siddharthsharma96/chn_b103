import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const auth = localStorage.getItem("auth");
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user?.role, role);

  if (auth === "true" && user?.role === role) {
    console.log("succefull");

    return children;
  }
  console.log("asdas");

  return <Navigate to="/login" replace></Navigate>;
};

export default ProtectedRoute;
