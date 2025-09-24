import "./../Styles/login.css";
const Login = () => {
  return (
    <div className="login">
      <form className="login__form">
        <h2 className="login__title">EduShop Login</h2>

        <label>Email</label>
        <input type="email" placeholder="Email" />

        <label>Password</label>
        <input type="password" placeholder="Password" />

        <button type="submit" className="login__button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
