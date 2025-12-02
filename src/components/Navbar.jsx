// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img 
            src={process.env.PUBLIC_URL + '/logo.png'} 
            alt="CandleGlow Logo" 
            className="logo-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = process.env.PUBLIC_URL + '/logo.png';
              e.target.style.height = '40px'; // Fallback dimensions if image fails to load
            }}
          />
          <span className="logo-text">CandleGlow</span>
        </Link>
        
        <div 
          className={`nav-toggle ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/products" 
              className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-cart">
            <Link to="/cart" className="cart-icon">
              🛒 <span className="cart-count">0</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;