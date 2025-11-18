import React from "react";

const FEATURES = [
  {
    title: "Relentless Combat",
    desc: "Tight controls, brutal enemies, and satisfying weapon combos keep the action flowing.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-6"/><path d="M2 12h6"/><path d="M12 2v6"/><path d="M12 22v-6"/><circle cx="12" cy="12" r="4"/>
      </svg>
    ),
  },
  {
    title: "Procedural Dungeons",
    desc: "Every run is unique with handcrafted rooms, random modifiers, and elite bosses.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h7v7H3z"/><path d="M14 3h7v7h-7z"/><path d="M14 14h7v7h-7z"/><path d="M3 14h7v7H3z"/>
      </svg>
    ),
  },
  {
    title: "Loot That Matters",
    desc: "Forge builds with legendary weapons, enchanted armor, and game-changing relics.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7z"/>
      </svg>
    ),
  },
  {
    title: "Co-op Mayhem",
    desc: "Drop-in online co-op and synergies encourage teamwork and chaos.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
];

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-black text-white">Built for adrenaline</h2>
        <p className="text-center mt-3 text-slate-300 max-w-2xl mx-auto">
          Designed to be easy to learn, hard to master, and endlessly replayable.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg hover:shadow-emerald-500/10 transition">
              <div className="w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-400/20 grid place-items-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
