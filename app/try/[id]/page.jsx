"use client";

import { useParams } from "next/navigation";
import products from "@/lib/products"; // OU ta source produits finale
import "@google/model-viewer";

export default function TryOnPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Produit introuvable</h1>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">{product.name}</h1>

      <model-viewer
        src={product.model3D}
        alt={product.name}
        camera-controls
        auto-rotate
        ar
        ar-modes="webxr scene-viewer quick-look"
        shadow-intensity="1"
        style={{ width: "100%", height: "500px" }}
      ></model-viewer>

      <p className="mt-6 text-neutral-300">{product.description}</p>
      <p className="text-xl font-bold mt-4">{product.price}€</p>
    </div>
  );
}
