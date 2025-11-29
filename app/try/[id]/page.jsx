"use client";

import { useParams } from "next/navigation";
import products from "@/lib/products";

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
    <div className="relative w-full h-screen overflow-hidden text-center flex flex-col items-center justify-center">

      {/* FOND ANIMÉ */}
      <video
        src="/vr/LD008-loop.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* CONTENU DEVANT LE FOND */}
      <div className="relative z-10 max-w-3xl mx-auto p-10">
        <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">
          {product.name}
        </h1>

        {/* IMAGE OU VIDEO 360 DU PRODUIT */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md mx-auto rounded-lg shadow-xl mb-6"
        />

        <p className="text-neutral-300">{product.description}</p>
        <p className="text-xl font-bold mt-4">{product.price}€</p>
      </div>
    </div>
  );
}
