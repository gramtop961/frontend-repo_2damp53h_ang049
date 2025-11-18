import React from "react";

function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-3xl overflow-hidden border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-teal-400/10 p-10">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.15),transparent_40%)]" />
          <h3 className="relative text-3xl font-black text-white">Join the Rampage</h3>
          <p className="relative mt-3 text-slate-300">Get notified about the demo, beta invites, and launch day rewards.</p>

          <form className="relative mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" required placeholder="Enter your email" className="w-full sm:w-80 px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            <button type="submit" className="px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold shadow-lg shadow-emerald-500/20 transition">Wishlist</button>
          </form>

          <p className="relative mt-3 text-xs text-slate-400">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}

export default CTA;
