import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarRateIcon from "@mui/icons-material/StarRate";
import "./../Styles/product.css";
import { useEffect, useState } from "react";
const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState();
  const { products } = useOutletContext();
  console.log(products);
  useEffect(() => {
    const obj = products.find((em) => {
      return em._id === id;
    });
    setProduct(obj);
  }, [id, products]);

  return (
    <div className="product">
      <button className="product__back-button" onClick={() => navigate("/")}>
        <ArrowBackOutlinedIcon></ArrowBackOutlinedIcon> Back to Products
      </button>
      <div className="product__container">
        <div className="product__image-wrapper">
          <img src={product?.image} alt="qw" className="product__image"></img>
        </div>
        <div className="product__info">
          <div className="product__category">{product?.category}</div>
          <h1 className="product__title">MacBook Pro M3</h1>
          <div className="flex items-center space-x-4 mb-4">
            <div className="product__rating">
              {[...Array(5)].map((_, i) =>
                i < Math.floor(product?.rating) ? (
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
              <span className="product__rating-value">
                {product?.rating} ({Math.floor(Math.random() * 500) + 100}{" "}
                reviews)
              </span>
            </div>
          </div>
          <div className="product__price">₹{product?.price}</div>
          <p className="product__description">{product?.description}</p>
          <div className="flex items-center space-x-2">
            <div
              className={`product__stock ${
                product?.inStock ? "product__stock--in" : "product__stock--out"
              }`}
            />
            <span
              className={`product__stock-dot ${
                product?.inStock
                  ? "product__stock-dot--in"
                  : "product__stock-dot--out"
              }`}
            >
              {product?.inStock ? "In Stock" : "Out of Stock"}
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
