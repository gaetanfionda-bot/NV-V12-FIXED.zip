"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen text-white overflow-hidden">

      {/* ===== VIDEO BACKGROUND ===== */}
      <video
        src="/video/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* DARK + RED OVERLAY */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pt-32">

        {/* LOGO */}
        <img
          src="/logo.png"
          alt="NV Logo"
          className="
            w-24 h-24 mb-6 
            drop-shadow-[0_0_25px_rgba(255,0,0,0.7)] 
            animate-pulse
          "
        />

        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider drop-shadow-2xl">
          NIGHT VISION V12
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-lg md:text-2xl text-neutral-300 max-w-2xl leading-relaxed">
          L’Univers Officiel — Optiques, Style, Système NV12.  
          Rien n’est laissé au hasard.
        </p>

        {/* SPACING */}
        <div className="h-12" />

        {/* ===== ACTION BUTTONS ===== */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* BOUTON ROUGE ANIMÉ — SHOP */}
          <Link
            href="/shop"
            className="nv-red-btn text-xl w-60"
          >
            BOUTIQUE OFFICIELLE
          </Link>

          {/* BOUTON ROUGE ANIMÉ — PACK COMPLET */}
          <Link
            href="/pack"
            className="nv-red-btn text-xl w-60"
          >
            PACK COMPLET NV
          </Link>

          {/* TRY ON DIRECT */}
          <Link
            href="/try/LD007"
            className="nv-red-btn text-xl w-60"
          >
            ESSAI IMMERSIF
          </Link>

        </div>

        {/* SPACING */}
        <div className="h-20" />

        {/* SMALL INFOS */}
        <p className="text-sm text-white/40 tracking-wide">
          Vision. Style. Système. — V12 Edition
        </p>

      </div>
    </main>
  );
}
