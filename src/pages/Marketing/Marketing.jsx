import React from "react";
import "./Marketing.css";

const Stat = ({ value, label }) => (
  <div className="stat">
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const CampaignCard = ({ title, desc, cta }) => (
  <div className="card">
    <div className="img-placeholder">Campaign Image</div>
    <h3>{title}</h3>
    <p>{desc}</p>
    <button className="btn">{cta}</button>
  </div>
);

const Testimonial = ({ name, text }) => (
  <div className="t-card">
    <div className="avatar">🙂</div>
    <p className="t-text">“{text}”</p>
    <div className="t-name">— {name}</div>
  </div>
);

const FAQ = ({ q, a }) => (
  <details className="faq">
    <summary>{q}</summary>
    <p>{a}</p>
  </details>
);

const Marketing = () => {
  return (
    <div className="marketing-page">

      {/* HERO */}
      <section className="mk-hero">
        <div>
          <h1>Restaurant & Grocery Marketing Strategies</h1>
          <p>
            Grow orders and repeat customers with smart promotions, loyalty,
            and hyperlocal campaigns. Built for speed and conversions.
          </p>
          <div className="cta-row">
            <button className="btn primary">Start a Campaign</button>
            <button className="btn outline">View Pricing</button>
          </div>
        </div>
        <div className="img-placeholder tall">Hero Visual</div>
      </section>

      {/* STATS */}
      <section className="stats-row">
        <Stat value="3x" label="Repeat Purchases" />
        <Stat value="+42%" label="Monthly Orders" />
        <Stat value="₹ 1.2L" label="Saved via Loyalty" />
        <Stat value="< 30m" label="Avg Delivery Time" />
      </section>

      {/* CAMPAIGNS */}
      <section className="section">
        <div className="section-head">
          <h2>High-impact Campaigns</h2>
          <span className="hint">No images used • Fully editable</span>
        </div>

        <div className="grid">
          <CampaignCard
            title="First-Order Coupon"
            desc="Flat 20% off on first order. Converts new visitors into paying customers."
            cta="Create Coupon"
          />
          <CampaignCard
            title="Referral Program"
            desc="Give ₹50, get ₹50—turn happy buyers into brand promoters."
            cta="Launch Referral"
          />
          <CampaignCard
            title="Festive Combos"
            desc="Diwali/Onam special baskets—bundle pricing to increase AOV."
            cta="Build Combo"
          />
          <CampaignCard
            title="Cart Abandon Emails"
            desc="Auto emails/WhatsApp with limited-time deal to recover lost carts."
            cta="Enable Recovery"
          />
        </div>
      </section>

      {/* LOYALTY BANNER */}
      <section className="banner">
        <div>
          <h3>Launch “GreenPoints” Loyalty</h3>
          <p>Earn 1 point per ₹100 • Redeem at checkout • Birthday rewards</p>
        </div>
        <button className="btn dark">Set Up in 2 mins</button>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <h2>What Customers Say</h2>
        <div className="t-grid">
          <Testimonial name="Asha P." text="Fresh fruits and super quick delivery!" />
          <Testimonial name="Rahul K." text="Coupons + loyalty = best savings." />
          <Testimonial name="Neha S." text="Clean UI, easy to reorder my staples." />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <h2>FAQ</h2>
        <div className="faq-list">
          <FAQ q="Coupons kashi apply karayche?" a="Checkout page वर ‘Apply Coupon’ क्लिक करा आणि code टाका." />
          <FAQ q="Delivery charges?" a="₹499 पेक्षा जास्त order वर free delivery." />
          <FAQ q="Return policy?" a="Quality issue असल्यास 24 तासांत hassle-free replacement." />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <h3>Get weekly deals in your inbox</h3>
        <form
          className="nl-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Subscribed! 🎉");
          }}
        >
          <input type="email" placeholder="Enter your email" required />
          <button className="btn primary" type="submit">Subscribe</button>
        </form>
      </section>

    </div>
  );
};

export default Marketing;