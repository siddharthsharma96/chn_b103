import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

const ProductCards = ({ info }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group product-card"
      onClick={() => {
        navigate(`/product/${info._id}`);
      }}
    >
      <div className="product-card__image-container">
        <img src={info.image} className="product-card__image" />
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
        <button className="product-card__button">
          <ShoppingCartOutlinedIcon className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
