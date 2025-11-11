// src/components/ShopFlow/fakeApi.jsx

// ------------ Sample Shops (Pune + Talegaon) ------------
const shops = [
  { id: "s1", name: "Abhi Grocery - Main Rd", lat: 18.464, lng: 73.836 },
  { id: "s2", name: "City SuperStore - South", lat: 18.472, lng: 73.845 },
  { id: "s3", name: "Daily Needs - West", lat: 18.458, lng: 73.828 },
  { id: "s4", name: "Green Mart - East", lat: 18.490, lng: 73.855 },

  // Talegaon
  { id: "s5", name: "Talegaon Fresh Mart", lat: 18.735, lng: 73.675 },
];

// ------------ Products ------------
const products = [
  { id: "p1", shopId: "s1", name: "Milk 1L", price: 56 },
  { id: "p2", shopId: "s1", name: "Bread", price: 40 },
  { id: "p3", shopId: "s2", name: "Rice 5kg", price: 380 },
  { id: "p4", shopId: "s3", name: "Eggs 12", price: 78 },
  { id: "p5", shopId: "s4", name: "Sugar 1kg", price: 45 },
  { id: "p6", shopId: "s5", name: "Atta 5kg", price: 265 },
  { id: "p7", shopId: "s5", name: "Oil 1L", price: 135 },
];

// ----------------- Helpers -----------------
function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function toRad(d) {
  return (d * Math.PI) / 180;
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ----------------- Orders Storage -----------------
const LS_KEY = "sf_orders";

function readOrders() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeOrders(list) {
  localStorage.setItem(LS_KEY, JSON.stringify(list));
}

// Build index for faster lookups
const productIndex = Object.fromEntries(products.map((p) => [p.id, p]));
const shopIndex = Object.fromEntries(shops.map((s) => [s.id, s]));

function hydrateOrder(o) {
  const items = o.items.map((it) => {
    const prod = productIndex[it.productId] || {};
    return {
      ...it,
      name: prod.name || it.productId,
      price: prod.price || 0,
      lineTotal: (prod.price || 0) * it.qty,
    };
  });

  return {
    ...o,
    shopName: shopIndex[o.shopId]?.name || o.shopId,
    items,
    total: items.reduce((s, i) => s + i.lineTotal, 0),
  };
}

// ----------------- API -----------------
export const api = {
  // Nearby Shops
  async listShops({ lat, lng, radiusKm = 50 } = {}) {
    await delay(200);

    if (lat == null || lng == null) return shops;

    const withDist = shops
      .map((s) => ({
        ...s,
        distanceKm: haversineKm(lat, lng, s.lat, s.lng),
      }))
      .sort((a, b) => a.distanceKm - b.distanceKm);

    const nearby = withDist.filter((s) => s.distanceKm <= radiusKm);

    return nearby.length ? nearby : withDist;
  },

  // Products
  async productsByShop(shopId) {
    await delay(120);
    return products.filter((p) => p.shopId === shopId);
  },

  // Product Details
  async productById(productId) {
    await delay(100);
    const p = products.find((x) => x.id === productId);
    if (!p) throw new Error("Product not found");
    return p;
  },

  // Place Order
  async placeOrder({ shopId, items, customer }) {
    if (!shopId || !Array.isArray(items) || items.length === 0) {
      throw new Error("Invalid order");
    }

    await delay(300); // simulate timing
    await delay(300);

    const order = {
      orderId: "O" + Math.floor(1000 + Math.random() * 9000),
      shopId,
      items,
      customer: customer || { name: "Guest" },
      status: "CONFIRMED",
      createdAt: new Date().toISOString(),
    };

    const all = readOrders();
    all.unshift(order);
    writeOrders(all);

    return hydrateOrder(order);
  },

  // Orders listing
  async listOrders() {
    await delay(100);
    return readOrders();
  },

  async listOrdersDetailed() {
    await delay(100);
    return readOrders().map(hydrateOrder);
  },

  async clearOrders() {
    writeOrders([]);
    return true;
  },
};