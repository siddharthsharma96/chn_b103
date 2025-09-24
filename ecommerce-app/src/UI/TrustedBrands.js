import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import GroupIcon from "@mui/icons-material/Group";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import "./../Styles/TrustedBrands.css";

const TrustedBrands = () => {
  const features = [
    {
      icon: <ShieldOutlinedIcon className="trusted-icon" />,
      label: "Secure Payments",
      description: "100% secure transactions",
    },
    {
      icon: <EmojiEventsOutlinedIcon className="trusted-icon" />,
      label: "Premium Quality",
      description: "Only authentic products",
    },
    {
      icon: <FlashOnOutlinedIcon className="trusted-icon" />,
      label: "Fast Delivery",
      description: "Same day delivery available",
    },
    {
      icon: <GroupIcon className="trusted-icon" />,
      label: "Trusted by 50K+",
      description: "Happy customers worldwide",
    },
  ];

  return (
    <section className="trusted-section">
      <div className="trusted-container">
        <div className="trusted-header">
          <h2>
            Trusted by <span className="highlight">100+ Brands</span>
          </h2>
          <p>
            Join thousands of satisfied customers who trust us for quality
            products and exceptional service.
          </p>
        </div>

        <div className="trusted-grid">
          {features.map((feature, index) => (
            <div className="trusted-card" key={index}>
              <div className="trusted-icon-circle">{feature.icon}</div>
              <h3>{feature.label}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
