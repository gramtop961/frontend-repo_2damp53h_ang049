import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Screens from './components/Screens'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Screenshots */}
      <Screens />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Dungeon Rampage. All rights reserved.</p>
          <div className="flex items-center gap-5 text-sm text-slate-400">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#screens" className="hover:text-white">Screens</a>
            <a href="#cta" className="hover:text-white">Wishlist</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
