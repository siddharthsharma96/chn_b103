import { useNavigate, useOutletContext } from "react-router-dom";
import "./../Styles/login.css";
import { useState } from "react";
import { toast } from "react-toastify";
const Login = () => {
  const { handleAdminLoginSuccess } = useOutletContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   if (email === "sid@gmail.in" && password === "qwertyu") {
  //     localStorage.setItem("isAdmin", "true");
  //     localStorage.setItem("adminloggedIn", "true");
  //     localStorage.setItem("auth", "true");
  //     handleAdminLoginSuccess();
  //     navigate("/adminDashboard");
  //   } else {
  //     alert("invalid credentials");
  //   }
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:9000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Invalid Credentials");
        setEmail("");
        setPassword("");
        setLoading(false);
        return;
      }

      const { token, details } = data;
      localStorage.setItem("auth", "true");
      localStorage.setItem("user", JSON.stringify(details));
      localStorage.setItem("token", token);
      handleAdminLoginSuccess();
      toast.success("Login Successful");
      if (details.role === "admin") {
        navigate("/adminDashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      toast.error("Something Went Wrong");
      console.log(err);
    }
  };
  console.log(password, email);

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleLogin}>
        <h2 className="login__title">EduShop Login</h2>

        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login__button">
          {loading ? "loading...." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
