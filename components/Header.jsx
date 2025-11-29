"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/shop", label: "Shop" },
    { href: "/roulette", label: "Roulette" },
    { href: "/calendar", label: "Calendrier" },
    { href: "/account", label: "Compte" },
    { href: "/cart", label: "Panier" },
    { href: "/admin", label: "Admin" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-xl border-b border-red-600/20 shadow-[0_0_25px_rgba(255,0,0,0.2)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ——— LOGO ——— */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Night Vision Logo"
            className="w-12 h-12 object-contain drop-shadow-[0_0_12px_rgba(255,0,0,0.6)] group-hover:scale-110 transition"
          />
          <span className="text-xl font-bold tracking-widest group-hover:text-red-500 transition">
            NIGHT VISION
          </span>
        </Link>

        {/* ——— NAVIGATION ——— */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                transition tracking-wide
                ${pathname === link.href ? "text-red-400" : "text-white/70 hover:text-white"}
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ——— MOBILE MENU BTN ——— */}
        <div className="md:hidden">
          <Link
            className="nv-red-btn text-xs py-2 px-4"
            href="/menu"
          >
            MENU
          </Link>
        </div>
      </div>
    </header>
  );
}
