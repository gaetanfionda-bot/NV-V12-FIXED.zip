// lib/admin-db.js (patched with demo data)

let products = [
  { id: "LD007", name: "Lunettes LD007", price: 79, stock: 12, description: "Modèle LD007 – Night Vision", images:["/ld007.png"] },
  { id: "LD008", name: "Lunettes LD008", price: 89, stock: 8, description: "Modèle LD008 – Night Vision", images:["/ld008.png"] },
  { id: "NV12", name: "Lunettes NV12", price: 99, stock: 15, description: "Modèle NV12 – Nouvelle génération", images:["/nv12.png"] }
];

let orders = [
  { id:"CMD1", productId:"LD007", quantity:1, status:"En cours", customer:"John Doe" },
  { id:"CMD2", productId:"NV12", quantity:2, status:"Envoyée", customer:"Alice" },
  { id:"CMD3", productId:"LD008", quantity:1, status:"Terminée", customer:"Marc" }
];

export async function getAdminProducts(){ return products; }
export async function getAdminProduct(id){ return products.find(p=>p.id===id)||null; }
export async function addAdminProduct(data){
  const id="P"+(products.length+1);
  const product={id,...data};
  products.push(product);
  return product;
}
export async function updateAdminProduct(id,data){
  const idx=products.findIndex(p=>p.id===id);
  if(idx===-1) return null;
  products[idx]={...products[idx],...data};
  return products[idx];
}
export async function deleteAdminProduct(id){
  products=products.filter(p=>p.id!==id);
  return true;
}

export async function getAdminOrders(){ return orders; }
export async function getAdminOrder(id){ return orders.find(o=>o.id===id)||null; }
export async function addAdminOrder(data){
  const id="CMD"+(orders.length+1);
  const order={id,...data,status:"En cours"};
  orders.push(order);
  return order;
}
export async function updateAdminOrder() {
  return null;
}

