import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./views/Home";
import Products from "./views/Products";
import About from "./views/About";

function App() {
  return (
    <div>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/products" style={{ marginRight: "10px" }}>Products</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
