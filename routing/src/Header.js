import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About us</NavLink>
      <NavLink to={"/search"}>Search</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>
    </header>
  );
};

export default Header;
