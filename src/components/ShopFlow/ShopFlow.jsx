import { useEffect, useState } from "react";
import styles from "./shopflow.module.css";
import { api } from "./fakeApi";
import { useNavigate } from "react-router-dom";

function ErrorBox({ error }) {
  if (!error) return null;
  return (
    <div style={{background:"#fee",border:"1px solid #faa",padding:12,borderRadius:8,margin:"12px 0",color:"#900"}}>
      <b>ShopFlow Error:</b> {String(error)}
    </div>
  );
}

export default function ShopFlow() {
  const [coords, setCoords] = useState(null);
  const [shops, setShops] = useState([]);
  const [activeShop, setActiveShop] = useState(null);
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        // geolocation is optional
        navigator.geolocation?.getCurrentPosition(
          async (pos) => {
            const c = { lat: pos.coords.latitude, lng: pos.coords.longitude };
            setCoords(c);
            const list = await api.listShops({ ...c, radiusKm: 50 });
            setShops(list);
          },
          async () => {
            const list = await api.listShops({ radiusKm: 50 });
            setShops(list);
          }
        );
      } catch (e) {
        setErr(e);
      }
    })();
  }, []);

  const openShop = async (shop) => {
    try {
      setActiveShop(shop);
      setSelected(null);
      const list = await api.productsByShop(shop.id);
      setProducts(list);
    } catch (e) {
      setErr(e);
    }
  };

  const viewProduct = async (p) => {
    try {
      const res = await api.productById(p.id);
      setSelected(res);
    } catch (e) {
      setErr(e);
    }
  };

  const addToCart = (p) =>
    setCart((prev) => {
      const i = prev.findIndex((x) => x.product.id === p.id);
      if (i >= 0) {
        const cp = [...prev];
        cp[i] = { ...cp[i], qty: cp[i].qty + 1 };
        return cp;
      }
      return [...prev, { product: p, qty: 1 }];
    });

  const minusFromCart = (p) =>
    setCart((prev) => {
      const i = prev.findIndex((x) => x.product.id === p.id);
      if (i < 0) return prev;
      const cp = [...prev];
      const q = cp[i].qty - 1;
      if (q <= 0) cp.splice(i, 1);
      else cp[i] = { ...cp[i], qty: q };
      return cp;
    });

  const placeOrder = async () => {
    try {
      if (!activeShop || cart.length === 0) return alert("Cart empty");
      setLoading(true);
      setToast("Sending order notification...");
      const payload = {
        shopId: activeShop.id,
        customer: { name: "Demo User", phone: "9999999999" },
        items: cart.map((c) => ({ productId: c.product.id, qty: c.qty })),
      };
      const res = await api.placeOrder(payload);
      setToast("Order " + res.orderId + " " + res.status + " ₹" + res.total);
      setCart([]);
      setTimeout(()=>navigate('/orders'),0);
    } catch (e) {
      setErr(e);
    } finally {
      setLoading(false);
      setTimeout(() => setToast(""), 2500);
    }
  };

  const cartTotal = cart.reduce((s, c) => s + c.product.price * c.qty, 0);

  return (
    <div className={styles.wrap}>
      <h2>Nearby Shops (Frontend Only)</h2>
      <ErrorBox error={err} />

      {coords && (
        <p className={styles.muted}>
          Your location: {coords.lat?.toFixed(3)}, {coords.lng?.toFixed(3)}
        </p>
      )}

      <section>
        <h3>Browse Nearby Shops → Display Shop List</h3>
        <div className={styles.list}>
          {shops.map((s) => (
            <button
              key={s.id}
              className={`${styles.chip} ${
                activeShop?.id === s.id ? styles.active : ""
              }`}
              onClick={() => openShop(s)}
            >
              {s.name}
              {s.distanceKm != null && (
                <span className={styles.sub}> · {s.distanceKm.toFixed(1)} km</span>
              )}
            </button>
          ))}
          {shops.length === 0 && <i className={styles.muted}>No shops to show</i>}
        </div>
      </section>

      {activeShop && (
        <section>
          <h3>View Products — {activeShop.name}</h3>
          <div className={styles.grid}>
            {products.map((p) => (
              <div className={styles.card} key={p.id}>
                <div className={styles.title}>{p.name}</div>
                <div className={styles.price}>₹{p.price}</div>
                <div className={styles.actions}>
                  <button onClick={() => viewProduct(p)}>Details</button>
                  <button onClick={() => addToCart(p)}>Add</button>
                </div>
              </div>
            ))}
            {products.length === 0 && <i className={styles.muted}>No products</i>}
          </div>
        </section>
      )}

      {selected && (
        <section className={styles.details}>
          <h3>Display Product Details</h3>
          <div className={styles.card}>
            <div className={styles.title}>{selected.name}</div>
            <div className={styles.price}>₹{selected.price}</div>
            <p className={styles.muted}>{selected.desc}</p>
            <button onClick={() => addToCart(selected)}>Add to Cart</button>
          </div>
        </section>
      )}

      <section>
        <h3>Cart</h3>
        {cart.length === 0 ? (
          <i className={styles.muted}>No items</i>
        ) : (
          <>
            <ul className={styles.cart}>
              {cart.map((c) => (
                <li key={c.product.id}>
                  <span>{c.product.name}</span>
                  <span>₹{c.product.price} × {c.qty}</span>
                  <div className={styles.qty}>
                    <button onClick={() => minusFromCart(c.product)}>-</button>
                    <button onClick={() => addToCart(c.product)}>+</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.total}>Total: ₹{cartTotal}</div>
            <button disabled={loading} onClick={placeOrder}>
              {loading ? "Placing..." : "Place Order"}
            </button>
          </>
        )}
      </section>

      {toast && <div className={styles.toast}>{toast}</div>}
    </div>
  );
}

