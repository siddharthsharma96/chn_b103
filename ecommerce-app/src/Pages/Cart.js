import "./../Styles/cart.css";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useOutletContext } from "react-router-dom";
const Cart = () => {
  const { cartItems, handleUpdateQuantity, handleRemoveItem } =
    useOutletContext();
  return (
    <div className="cart">
      <h1 className="cart__title">Your Shopping Cart</h1>

      {cartItems.length === 1 ? (
        <div className="cart__empty">
          <RemoveShoppingCartIcon style={{ fontSize: "60px", color: "#ccc" }} />
          <p>Your cart is currently empty.</p>
        </div>
      ) : (
        <>
          <div className="cart__items">
            {cartItems.map((item) => (
              <div className="cart__item" key={item.id}>
                <img src={item.image} alt={"sa"} className="cart__image" />
                <div className="cart__details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <div className="cart__quantity">
                    <button
                      className="cart__button--dec"
                      onClick={() => {
                        handleUpdateQuantity(item.id, item.quantity - 1);
                      }}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => {
                        handleUpdateQuantity(item.id, item.quantity + 1);
                      }}
                      className="cart__button--inc"
                    >
                      +
                    </button>
                  </div>
                  <p className="cart__subtotal">
                    Subtotal: ₹{item.price * item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="cart__remove"
                >
                  <DeleteOutlineIcon />
                </button>
              </div>
            ))}
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
