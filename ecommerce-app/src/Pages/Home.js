import { useOutletContext } from "react-router-dom";
import TrustedBrands from "../UI/TrustedBrands";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";
import "./../Styles/home.css";
import Loader from "../UI/Loader";
import ProductCards from "../UI/ProductCards";
import FinalCTA from "../UI/FinalCTA";

const Home = () => {
  const { products, loading } = useOutletContext();
  return (
    <main className="home">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-left">
              <div className="rating">
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <StarIcon key={index} className="star-icon" />
                  ))}
                </div>
                <span className="trusted-text">
                  Trusted by 50,000+ customers
                </span>
              </div>

              <h1 className="hero-heading">
                Shop Smarter, <span className="gradient-text">Live Better</span>
              </h1>

              <p className="hero-subtext">
                Discover premium electronics and gadgets at unbeatable prices.
                Experience quality, innovation, and style with every purchase.
              </p>

              <div className="hero-buttons">
                <button className="home-btn gradient-btn">
                  <ShoppingBagOutlinedIcon className="icon" />
                  Explore Products
                </button>
                <button className="home-btn outline-btn">
                  <GroupIcon className="icon" />
                  Join 50K+ Customers
                </button>
              </div>

              <div className="hero-stats">
                <div className="stat-box">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Products</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Happy Customers</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">4.8/5</div>
                  <div className="stat-label">Rating</div>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-image-box">
                <div className="product-preview">
                  <div className="icon-circle">
                    <ShoppingBagOutlinedIcon className="product-icon" />
                  </div>
                  <h3>Premium Quality</h3>
                  <p className="product-subtext">
                    Curated collection of the best products
                  </p>
                </div>

                <div className="floating-circle home-circle-1" />
                <div className="floating-circle home-circle-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrustedBrands></TrustedBrands>
      <div className="home__products">
        <div className="home__products_section">
          <h2>Featured Products</h2>
          <p>{products.length} products Available</p>
        </div>
        <div className={loading ? " " : "home__products__cards"}>
          {loading ? (
            <Loader></Loader>
          ) : (
            products.map((a) => (
              <ProductCards info={a} key={a.id}></ProductCards>
            ))
          )}
        </div>
      </div>
      <FinalCTA></FinalCTA>
    </main>
  );
};

export default Home;
