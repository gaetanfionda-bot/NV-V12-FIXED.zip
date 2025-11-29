export const products = [
  {
    id: "nv-hoodie",
    name: "NV Hoodie",
    slug: "nv-hoodie",
    price: 79,
    stock: 12,
    description: "Hoodie officiel NIGHT VISION — édition V12.",
    image: "https://images.unsplash.com/photo-1609851949984-f5c88c971e0e"
  },

  {
    id: "nv-cap",
    name: "NV Cap",
    slug: "nv-cap",
    price: 39,
    stock: 20,
    description: "Casquette NIGHT VISION — version limited.",
    image: "https://images.unsplash.com/photo-1528701800489-20be3c2a94e8"
  },

  // ★★★ AJOUT DES LUNETTES POUR LE TRY-ON ★★★
  {
    id: "LD007",
    name: "Lunettes LD007",
    slug: "ld007",
    price: 79,
    description: "Modèle LD007 – Night Vision",
    image: "/ld007.png",
    model3D: "/LD007.glb"
  },

  {
    id: "LD008",
    name: "Lunettes LD008",
    slug: "ld008",
    price: 89,
    description: "Modèle LD008 – Night Vision",
    image: "/ld008.png",
    model3D: "/LD008.glb"
  },

  {
    id: "NV12",
    name: "Lunettes NV12",
    slug: "nv12",
    price: 99,
    description: "Modèle NV12 – Nouvelle génération",
    image: "/nv12.png",
    model3D: "/NV12.glb"
  }
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
