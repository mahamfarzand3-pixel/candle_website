import React from "react";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "3D Flower Candle",
    price: "$24.99",
    image: "/images/3D flower candle.jpg"
  },
  {
    id: 2,
    name: "Bubble Candle",
    price: "$19.99",
    image: "/images/Bubble candle.jpg"
  },
  {
    id: 3,
    name: "Amber Dusk Candle",
    price: "$22.99",
    image: "/images/amber.dusk.jpg"
  },
  {
    id: 4,
    name: "Gold Luxe Jar",
    price: "$29.99",
    image: "/images/gold luxe jars.jpg"
  }
];

function Products() {
  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Candles</h1>
        <p>Explore our premium scented candle collection.</p>
      </div>
      
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
                loading="lazy"
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
