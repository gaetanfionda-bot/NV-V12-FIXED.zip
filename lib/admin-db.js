// lib/admin-db.js

// ---- PRODUITS ----
let products = [
  // Exemple : mettre tes produits ici
  // { id: "1", name: "Lunettes NV1", price: 59, stock: 10, image: "/img/nv1.jpg" }
];

// ---- COMMANDES ----
let orders = [
  // Exemple : mettre tes commandes ici
  // { id: "CMD-1", customer: "Gaetan", total: 59, status: "En attente", date: Date.now() }
];

// -------- PRODUITS --------
export function getAdminProducts() {
  return Array.isArray(products) ? products : [];
}

export function addAdminProduct(product) {
  products.push(product);
}

export function updateAdminProduct(id, updates) {
  products = products.map((p) =>
    p.id === id ? { ...p, ...updates } : p
  );
}

export function deleteAdminProduct(id) {
  products = products.filter((p) => p.id !== id);
}

// -------- COMMANDES --------
export function getAdminOrders() {
  return Array.isArray(orders) ? orders : [];
}

export function addAdminOrder(order) {
  orders.push(order);
}

export function updateAdminOrder(id, updates) {
  orders = orders.map((o) =>
    o.id === id ? { ...o, ...updates } : o
  );
}
