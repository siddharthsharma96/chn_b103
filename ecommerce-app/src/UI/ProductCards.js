import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductCards = ({ info }) => {
  const navigate = useNavigate();
  const { handleAddtoCart, cartItems } = useOutletContext();
  const [addToCart, setAddToCart] = useState(false);
  useEffect(() => {
    const isAlreadyInCart = cartItems.some((item) => item._id === info._id);
    setAddToCart(isAlreadyInCart);
  }, [cartItems, info.id]);
  return (
    <div
      className="group product-card"
      onClick={() => {
        navigate(`/product/${info._id}`);
      }}
    >
      <div className="product-card__image-container">
        <img src={info.image} alt="we" className="product-card__image" />
        {!info.inStock && (
          <div className="product-card__badge">Out of Stock</div>
        )}
      </div>

      <div className="product-card__content">
        <div className="product-card__header">
          <div className="product-card__category">{info.category}</div>
          <div className="product-card__rating">
            <StarOutlinedIcon className="product-card__rating-icon" />
            <span className="product-card__rating-value">{info.rating}</span>
          </div>
        </div>

        <h3 className="product-card__title">{info.name}</h3>
        <p className="product-card__description">{info.description}</p>

        <div className="product-card__footer">
          <span className="product-card__price">₹{info.price}</span>
        </div>
      </div>

      <div className="product-card__action">
        <button
          className="product-card__button"
          onClick={(e) => {
            e.stopPropagation();
            if (addToCart) {
              navigate("/cart");
            } else {
              handleAddtoCart(info);
              setAddToCart(true);
              toast.success(`${info.name}, added to cart `);
            }
          }}
        >
          <ShoppingCartOutlinedIcon className="h-4 w-4" />
          {addToCart ? "Go to Cart" : " Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
