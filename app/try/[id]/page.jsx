"use client";

import { useParams } from "next/navigation";
import { products } from "@/lib/products";

export default function TryPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="p-10 text-center">Produit introuvable</div>;

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">

      {/* 🔥 FOND VIDÉO GLOBAL (mobile-friendly) */}
      <video
        src="/video/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute inset-0 w-full h-full object-cover
          opacity-60
        "
      />

      {/* FONDU NOIR LEGER POUR LIRE LE TEXTE */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* 🥽 ZONE CONTENU */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pt-24">

        {/* NOM DU PRODUIT */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-xl">
          {product.name}
        </h1>

        {/* BADGE ÉDITION SPÉCIALE (si défini plus tard dans admin) */}
        {product.special && (
          <p className="mt-2 text-sm uppercase tracking-widest text-yellow-400">
            ✦ ÉDITION SPÉCIALE ✦
          </p>
        )}

        {/* DESCRIPTION */}
        <p className="mt-4 text-lg text-neutral-300 max-w-md leading-relaxed">
          {product.description}
        </p>

        {/* PRIX */}
        <p className="mt-3 text-3xl font-bold">{product.price}€</p>

        {/* ESPACE */}
        <div className="h-10" />

        {/* 🟩 BOUTONS — VERSION MOBILE OPTIMISÉE */}
        <div className="w-full max-w-xs flex flex-col gap-4">

          {/* CTA PANIER */}
          <button
            className="
              w-full py-4 rounded-xl font-bold text-black bg-white
              text-lg shadow-lg hover:bg-neutral-200 transition
            "
          >
            Ajouter au panier
          </button>

          {/* CTA RETOUR */}
          <a
            href="/shop"
            className="
              w-full py-3 rounded-xl font-semibold
              text-white bg-white/10 backdrop-blur-md border border-white/20
              hover:bg-white/20 transition
            "
          >
            Retour à la boutique
          </a>
        </div>
      </div>
    </div>
  );
}
