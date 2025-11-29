"use client";

import { useParams, useRouter } from "next/navigation";
import { products } from "@/lib/products"; 
import "@google/model-viewer";

export default function TryOnPage() {
  const { id } = useParams();
  const router = useRouter();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Produit introuvable</h1>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">

      {/* --- FOND VIDÉO FULLSCREEN --- */}
      <video
        src="/video/background.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
      />

      {/* --- OVERLAY LUXE --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* --- CONTENU --- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center animate-fadeIn">

        {/* NOM LUNETTES */}
        <h1 className="text-5xl font-extrabold tracking-widest drop-shadow-xl mb-4">
          {product.name}
        </h1>

        {/* DJ ÉDITION SPÉCIALE */}
        {product.specialEdition && (
          <p className="text-lg uppercase tracking-[0.3em] text-blue-400 mb-6 opacity-90">
            ÉDITION SPÉCIALE — {product.specialEdition}
          </p>
        )}

        {/* DESCRIPTION */}
        <p className="max-w-2xl text-neutral-300 mb-8 text-lg">
          {product.description}
        </p>

        {/* --- MODEL-VIEWER --- */}
        <model-viewer
          src={product.model3D}
          alt={product.name}
          camera-controls
          auto-rotate
          ar
          className="w-full max-w-3xl h-[400px]"
        ></model-viewer>

        {/* PRIX */}
        <p className="text-3xl font-bold mt-10">{product.price}€</p>

        {/* --- CTA --- */}
        <div className="flex gap-4 mt-10">
          <button
            onClick={() => router.push("/shop")}
            className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-neutral-300 transition"
          >
            Retour à la boutique
          </button>

          <button
            onClick={() => alert('Ajouté au panier !')}
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition shadow-lg shadow-blue-900/50"
          >
            Ajouter au panier
          </button>
        </div>
      </div>

      {/* ANIMATION KEYFRAMES */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}
