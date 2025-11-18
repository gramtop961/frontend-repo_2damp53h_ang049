import React from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1548081076-a5d2be8b29bb?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
];

function Screens() {
  return (
    <section id="screens" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white">Screenshots</h2>
          <a href="#cta" className="text-emerald-400 hover:text-emerald-300">See more →</a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {IMAGES.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800">
              <img src={src} alt="Dungeon Rampage screenshot" className="h-64 w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Screens;
