import { useNavigate, useOutletContext } from "react-router-dom";
import "./../Styles/login.css";
import { useState } from "react";
const Login = () => {
  const { handleAdminLoginSuccess } = useOutletContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "sid@gmail.in" && password === "qwertyu") {
      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("adminloggedIn", "true");
      localStorage.setItem("auth", "true");
      handleAdminLoginSuccess();
      navigate("/adminDashboard");
    } else {
      alert("invalid credentials");
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
