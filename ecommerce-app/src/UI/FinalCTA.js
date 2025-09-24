import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import "./../Styles/FinalCTA.css";

const FinalCTA = ({ onBrowseProducts }) => {
  return (
    <section className="finalcta-section">
      <div className="finalcta-overlay1" />
      <div className="finalcta-overlay2" />

      <div className="finalcta-container">
        <div className="finalcta-content">
          <div className="finalcta-badge">
            <StarIcon className="icon" />
            Join 50,000+ Happy Customers
          </div>

          <h2 className="finalcta-heading">
            Your Favorite Products Are{" "}
            <span className="gradient-text">Just a Click Away</span>
          </h2>

          <p className="finalcta-subtext">
            Don't miss out on amazing deals and premium quality products. Start
            your shopping journey today and experience the difference.
          </p>

          <div className="finalcta-buttons">
            <button className="btn gradient-btn" onClick={onBrowseProducts}>
              <ShoppingBagIcon className="icon icon-large" />
              Browse All Products
              <ArrowForwardIcon className="icon icon-small" />
            </button>
            <button className="btn outline-btn">Contact Support</button>
          </div>

          <div className="finalcta-stats">
            <div className="stat-box">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">30 Days</div>
              <div className="stat-label">Return Policy</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">Free</div>
              <div className="stat-label">Shipping ₹999+</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100%</div>
              <div className="stat-label">Secure Payments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
