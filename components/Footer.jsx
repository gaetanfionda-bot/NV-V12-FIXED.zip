import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-red-500/20 bg-black/70 backdrop-blur-xl py-12 text-center text-white/70">
      <div className="max-w-6xl mx-auto px-6">

        {/* ——— LOGO + TITLE ——— */}
        <div className="flex flex-col items-center gap-3">
          <img
            src="/logo.png"
            alt="NV Logo"
            className="w-12 h-12 drop-shadow-[0_0_12px_rgba(255,0,0,0.5)]"
          />
          <p className="text-lg font-bold tracking-widest text-white">NIGHT VISION</p>
        </div>

        {/* ——— LINKS ——— */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm font-medium">
          <Link href="/shop" className="hover:text-red-400 transition">Shop</Link>
          <Link href="/roulette" className="hover:text-red-400 transition">Roulette</Link>
          <Link href="/calendar" className="hover:text-red-400 transition">Calendrier</Link>
          <Link href="/account" className="hover:text-red-400 transition">Compte</Link>
          <Link href="/cart" className="hover:text-red-400 transition">Panier</Link>
        </div>

        {/* ——— COPYRIGHT ——— */}
        <p className="mt-8 text-xs text-white/40 tracking-wide">
          © {new Date().getFullYear()} NIGHT VISION — All rights reserved.
        </p>

      </div>
    </footer>
  );
}
