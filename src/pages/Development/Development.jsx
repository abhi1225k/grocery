import React from "react";
import "./Development.css";

const Development = () => {
  return (
    <div className="dev-page">

      <h1>About Our Development Process</h1>

      <p>
        Our Grocery Store website is designed to give users a smooth and fast
        shopping experience. We focus on modern UI, secure backend, and
        optimized product handling.
      </p>

      <div className="dev-section">
        <h2>💻 Tech Stack</h2>
        <ul>
          <li><strong>Frontend:</strong> React + Vite</li>
          <li><strong>Styling:</strong> CSS / Tailwind</li>
          <li><strong>State Management:</strong> Context API</li>
          <li><strong>Backend:</strong> Node.js + Express (Optional)</li>
          <li><strong>Database:</strong> MongoDB / Firebase</li>
        </ul>
      </div>

      <div className="dev-section">
        <h2>⚡ Key Features</h2>
        <ul>
          <li>Fast product browsing</li>
          <li>Clean and modern UI</li>
          <li>Cart and checkout flow</li>
          <li>Category-wise filtering</li>
          <li>User-friendly mobile layout</li>
          <li>Secure data flow</li>
        </ul>
      </div>

      <div className="dev-section">
        <h2>🔐 Security & Performance</h2>
        <ul>
          <li>Form validation</li>
          <li>Secure login & logout (optional)</li>
          <li>Optimized image loading</li>
          <li>Fast rendering with Vite</li>
          <li>Reduced bundle size</li>
        </ul>
      </div>

      <div className="dev-section">
        <h2>🚀 Deployment</h2>
        <p>
          The project can be deployed on platforms like:
        </p>
        <ul>
          <li>Vercel</li>
          <li>Netlify</li>
          <li>Firebase Hosting</li>
          <li>GitHub Pages</li>
        </ul>
      </div>

      <div className="dev-section">
        <h2>📱 Mobile Responsive</h2>
        <p>
          The Grocery Store UI is fully responsive and adapts to different
          screen sizes such as:
        </p>
        <ul>
          <li>Mobile</li>
          <li>Tablet</li>
          <li>Laptop</li>
          <li>Desktop</li>
        </ul>
      </div>

    </div>
  );
};

export default Development;