import { useEffect, useState } from "react";
import { api } from "../../components/ShopFlow/fakeApi";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.listOrdersDetailed().then(setOrders);
  }, []);

  if (!orders.length) {
    return (
      <div style={{maxWidth:960, margin:"20px auto", padding:16}}>
        <h2>Your Orders</h2>
        <p>No orders yet.</p>
      </div>
    );
  }

  return (
    <div style={{maxWidth:960, margin:"20px auto", padding:16}}>
      <h2>Your Orders</h2>
      {orders.map(o => (
        <div key={o.orderId} style={{border:"1px solid #ddd", padding:12, borderRadius:10, marginBottom:12, background:"#fff"}}>
          <div><b>Order #{o.orderId}</b> — {new Date(o.createdAt).toLocaleString()}</div>
          <div>Shop: {o.shopName}</div>
          <div>Status: {o.status}</div>

          <div style={{marginTop:8, fontWeight:600}}>Items</div>
          <ul style={{margin:"6px 0 0 18px"}}>
            {o.items.map(it => (
              <li key={it.productId}>
                {it.name} — ₹{it.price} × {it.qty} = ₹{it.lineTotal}
              </li>
            ))}
          </ul>

          <div style={{marginTop:8, fontWeight:700}}>Total: ₹{o.total}</div>
        </div>
      ))}
    </div>
  );
}