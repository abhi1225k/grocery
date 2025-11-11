import React from "react";
import "./Design.css";

const Design = () => {
  return (
    <div className="design-page">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>Fresh groceries delivered to your doorstep</h1>
          <p>
            Quality fruits, vegetables, dairy products and everyday essentials
            delivered at the best prices.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">Shop Now</button>
            <button className="btn outline">Learn More</button>
          </div>

          <ul className="highlights">
            <li>✔ Fast delivery</li>
            <li>✔ Affordable prices</li>
            <li>✔ Quality guaranteed</li>
          </ul>
        </div>

        <div className="hero-right">
          <div className="image-placeholder">
            Grocery Image Here
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="section">
        <h2>Shop by Category</h2>

        <div className="categories">
          <div className="cat-box">Fruits</div>
          <div className="cat-box">Vegetables</div>
          <div className="cat-box">Dairy</div>
          <div className="cat-box">Snacks</div>
          <div className="cat-box">Bakery</div>
          <div className="cat-box">Beverages</div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section className="offer">
        <h3>🎉 20% OFF on First Order!</h3>
        <p>Use Code: FIRST20</p>
        <button className="btn dark">Grab Offer</button>
      </section>

      {/* BEST SELLERS */}
      <section className="section">
        <h2>Best Sellers</h2>

        <div className="products">
          <div className="product-card">
            <div className="image-placeholder small">Image</div>
            <h4>Apple (1kg)</h4>
            <p>₹149</p>
            <button className="btn small">Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="image-placeholder small">Image</div>
            <h4>Tomato (1kg)</h4>
            <p>₹39</p>
            <button className="btn small">Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="image-placeholder small">Image</div>
            <h4>Milk 1L</h4>
            <p>₹56</p>
            <button className="btn small">Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="image-placeholder small">Image</div>
            <h4>Bread</h4>
            <p>₹45</p>
            <button className="btn small">Add to Cart</button>
          </div>
        </div>
      </section>

      {/* TRUST BANNER */}
      <section className="trust">
        <div>🚚 Free Delivery* </div>
        <div>🕒 24/7 Support</div>
        <div>✅ Freshness Guaranteed</div>
        <div>💳 Secure Payment</div>
      </section>
    </div>
  );
};

export default Design;