import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const featuredCandles = [
  {
    id: 1,
    name: "3D Flower Candle",
    price: "$24.99",
    image: process.env.PUBLIC_URL + "/images/3D flower candle.jpg"
  },
  {
    id: 2,
    name: "Bubble Candle",
    price: "$19.99",
    image: process.env.PUBLIC_URL + "/images/Bubble candle.jpg"
  },
  {
    id: 3,
    name: "Amber Dusk",
    price: "$22.99",
    image: process.env.PUBLIC_URL + "/images/amber.dusk.jpg"
  }
];

const features = [
  {
    icon: "🌿",
    title: "Natural Ingredients",
    description: "Handcrafted with 100% natural soy wax and essential oils."
  },
  {
    icon: "🕯️",
    title: "Long Lasting",
    description: "Up to 60 hours of burn time per candle."
  },
  {
    icon: "🌎",
    title: "Eco-Friendly",
    description: "Sustainable packaging and cruelty-free production."
  }
];

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section 
        className="hero"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                     url('/images/3D flower candle.jpg') center/cover no-repeat`
        }}
      >
        <div className="hero-content">
          <h1>Illuminate Your Moments</h1>
          <p>Handcrafted candles to light up your space and soothe your soul</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Our Bestsellers</h2>
        <div className="products-grid">
          {featuredCandles.map((candle) => (
            <div key={candle.id} className="product-card">
              <div className="product-image">
                <img src={candle.image} alt={candle.name} />
              </div>
              <h3>{candle.name}</h3>
              <p className="price">{candle.price}</p>
              <Link to="/products" className="view-button">View Details</Link>
            </div>
          ))}
        </div>
        <Link to="/products" className="view-all">View All Products →</Link>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Stay in the Glow</h2>
          <p>Subscribe to our newsletter for exclusive offers and candle care tips</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              required 
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
