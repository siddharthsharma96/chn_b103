import "./../Styles/cart.css";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Cart = () => {
  let cartItems = [];
  return (
    <div className="cart">
      <h1 className="cart__title">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="cart__empty">
          <RemoveShoppingCartIcon style={{ fontSize: "60px", color: "#ccc" }} />
          <p>Your cart is currently empty.</p>
        </div>
      ) : (
        <>
          <div className="cart__items">
            <div className="cart__item" key={1}>
              <img src={"a"} alt={"sa"} className="cart__image" />
              <div className="cart__details">
                <h3>as</h3>
                <p>₹2</p>
                <div className="cart__quantity">
                  <button className="cart__button--dec">-</button>
                  <span>{3}</span>
                  <button className="cart__button--inc">+</button>
                </div>
                <p className="cart__subtotal">Subtotal: ₹300</p>
              </div>
              <button className="cart__remove">
                <DeleteOutlineIcon />
              </button>
            </div>
          </div>

          <div className="cart__summary">
            <h2>Summary</h2>
            <p>Subtotal: ₹300</p>
            <p>Tax (18%): ₹200</p>
            <h3>Total: ₹300</h3>

            <p className="msg">Please login for checkout</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
