import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Header = ({ cartItemCount, isAdminLoggedIn, handleAdminLogout }) => {
  console.log(isAdminLoggedIn);

  return (
    <header className="header">
      <div className="header__logo_container">
        <Link to={"/"} className="header__logo">
          EduShop
        </Link>{" "}
      </div>

      <div className="header__search">
        <input placeholder="Search products..." />
      </div>
      <div className="header__button_container">
        <Link to="/login" className="header__login" onClick={handleAdminLogout}>
          {isAdminLoggedIn ? "Logout" : "Login"}
        </Link>

        <Link className="header__cart" to={"/cart"}>
          <ShoppingCartOutlinedIcon />
          {1 > 0 && <div className="header__car_qty">{cartItemCount}</div>}
        </Link>
      </div>
    </header>
  );
};

export default Header;
