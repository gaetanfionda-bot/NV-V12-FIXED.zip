"use client";

import { addToCart } from "@/lib/cart";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border border-white/10 bg-neutral-900 p-5 rounded-xl">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-md mb-4"
      />

      <h2 className="text-2xl font-semibold">{product.name}</h2>

      <p className="text-neutral-400 mt-2">{product.description}</p>

      <p className="text-xl font-bold mt-3">{product.price}€</p>

      {/* --- BOUTONS --- */}
      <div className="mt-4 flex gap-3">

        {/* 🟦 BOUTON TRY-ON */}
        <Link
          href={`/try/${product.id}`}
          className="flex-1 text-center bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-400 transition"
        >
          TRY ON
        </Link>

        {/* 🟩 BOUTON AJOUTER AU PANIER */}
        <button
          className="flex-1 bg-white text-black py-2 rounded-md font-semibold hover:bg-neutral-300 transition"
          onClick={() => {
            addToCart(product);
            alert("Ajouté au panier !");
          }}
        >
          Ajouter
        </button>

      </div>
    </div>
  );
}
