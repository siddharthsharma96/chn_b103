import { useParams } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarRateIcon from "@mui/icons-material/StarRate";
import "./../Styles/product.css";
const Product = () => {
  const a = useParams();
  console.log(a);

  return (
    <div className="product">
      <button className="product__back-button">
        <ArrowBackOutlinedIcon></ArrowBackOutlinedIcon> Back to Products
      </button>
      <div className="product__container">
        <div className="product__image-wrapper">
          <img
            src={
              "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop"
            }
            className="product__image"
          ></img>
        </div>
        <div className="product__info">
          <div className="product__category">Laptops</div>
          <h1 className="product__title">MacBook Pro M3</h1>
          <div className="flex items-center space-x-4 mb-4">
            <div className="product__rating">
              {[...Array(5)].map((_, i) =>
                i < Math.floor(2.3) ? (
                  <StarRateIcon
                    key={i}
                    style={{ fontSize: "18px", color: "#facc15" }}
                  />
                ) : (
                  <StarOutlineOutlinedIcon
                    key={i}
                    style={{ fontSize: "18px", color: "#facc15" }}
                  />
                )
              )}
              <span className="product__rating-value">3.2 (2000 reviews)</span>
            </div>
          </div>
          <div className="product__price">₹199900</div>
          <p className="product__description">
            Apple MacBook Pro with M3 chip, 14-inch Liquid Retina XDR display
          </p>
          <div className="flex items-center space-x-2">
            <div className={`product__stock ${"product__stock--in"}`} />
            <span className={`product__stock-dot ${"product__stock-dot--in"}`}>
              In Stock
            </span>
          </div>
          <p className="cart__item__added">Added in Cart</p>

          <div className="product__actions">
            <button className="product__button product__button--cart">
              <ShoppingCartOutlinedIcon />
              Add to Cart
            </button>
          </div>

          <div className="product__features">
            <h3 className="product__features-title">Product Features</h3>
            <ul className="product__feature-list">
              <li>Premium build quality and design</li>
              <li>Advanced technology and performance</li>
              <li>Comprehensive warranty coverage</li>
              <li>Fast and reliable customer support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
