import React from "react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/70 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 grid place-items-center shadow-lg shadow-emerald-500/25 border border-white/10">
            <span className="text-slate-900 font-black">DR</span>
          </div>
          <span className="text-white font-semibold tracking-wide">Dungeon Rampage</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#screens" className="text-slate-300 hover:text-white transition">Screens</a>
          <a href="#cta" className="text-slate-300 hover:text-white transition">Wishlist</a>
          <a href="#" className="px-3 py-1.5 rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-slate-900 font-semibold transition shadow shadow-emerald-500/20">Play Demo</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
