"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Forgot Password", path: "/forgot-password" },
  { name: "Verify Email", path: "/verify-email" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-950 border-b border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="text-2xl font-black tracking-widest text-white">
            LUXE<span className="text-yellow-400">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.name}
                href={l.path}
                className="text-white/50 hover:text-white hover:bg-white/5 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
              >
                {l.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="ml-2 px-4 py-2 rounded-lg border border-white/15 text-white/70 hover:border-yellow-400/50 hover:text-yellow-400 text-sm font-medium transition-all duration-200"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="ml-1 px-5 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-sm font-bold hover:shadow-lg hover:shadow-yellow-400/25 hover:-translate-y-0.5 transition-all duration-200"
            >
              ສະໝັກສະມາຊິກ
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-gray-950 px-4 py-3 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.name}
              href={l.path}
              onClick={() => setMobileOpen(false)}
              className="text-white/60 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl text-sm font-medium transition-all"
            >
              {l.name}
            </Link>
          ))}
          <Link href="/login" onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl text-sm font-medium transition-all">Login</Link>
          <Link href="/register" onClick={() => setMobileOpen(false)} className="mt-1 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-sm font-bold">ສະໝັກສະມາຊິກ</Link>
        </div>
      )}
    </nav>
  );
}