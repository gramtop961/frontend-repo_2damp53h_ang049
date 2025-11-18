import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-40 -left-40 w-[600px] h-[600px] rounded-full bg-teal-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 text-xs font-semibold">
            New • Co-op Roguelite Action
          </p>
          <h1 className="mt-5 text-4xl sm:text-6xl font-black tracking-tight text-white">
            Descend. Survive. Loot. Repeat.
          </h1>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed">
            Dungeon Rampage is a fast-paced dungeon crawler with brutal combat, procedurally generated levels, and legendary loot. Team up or go solo—every run is a fresh fight for glory.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cta" className="px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold shadow-lg shadow-emerald-500/20 transition">Wishlist Now</a>
            <a href="#screens" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/10 transition">Watch Trailer</a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-slate-300/80">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Online Co-op
            </div>
            <div>Controller Support</div>
            <div>PC • Console</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-emerald-500/30 via-teal-400/30 to-transparent blur-xl -z-10" />
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-slate-800 shadow-2xl">
            {/* Placeholder game art */}
            <div className="w-full h-full relative">
              <img src="https://images.unsplash.com/photo-1645308156848-c995cd1db0f9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEdW5nZW9uJTIwc2NlbmV8ZW58MHwwfHx8MTc2MzQ3NjQ3OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Dungeon scene" className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="text-white">
                  <p className="text-xs uppercase tracking-widest text-white/60">Gameplay Preview</p>
                  <p className="font-semibold">The Undercity Catacombs</p>
                </div>
                <button className="px-4 py-2 rounded-md bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition">Play</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
