import React from 'react';

export default function SachdevSportsHome() {
  const products = [
    {
      id: 1,
      name: 'MRF Genius Player Edition Bat',
      category: 'Cricket',
      price: '₹48,999',
      rating: '4.9 ★',
      badge: 'Pro Choice',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&auto=format&fit=crop&q=80',
      specs: ['Grade 1+ Willow', 'Monstrous Edges', 'Pro Player Specs'],
    },
    {
      id: 2,
      name: 'Shrey Elite Pro Helmet',
      category: 'Protective Gear',
      price: '₹14,499',
      rating: '4.8 ★',
      badge: 'Safety Rated',
      image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=600&auto=format&fit=crop&q=80',
      specs: ['Titanium Grille', 'Lightweight', 'BSi Certified'],
    },
    {
      id: 3,
      name: 'A6 Pro Spike Shoes',
      category: 'Footwear',
      price: '₹8,999',
      rating: '4.7 ★',
      badge: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
      specs: ['Full Metal Spikes', 'Cushioned Midsole', 'Tough Upper'],
    },
    {
      id: 4,
      name: 'Pro Tour Duffle Bag',
      category: 'Luggage',
      price: '₹6,299',
      rating: '4.9 ★',
      badge: 'New Arrival',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80',
      specs: ['Heavy Duty Nylon', 'Bat Compartments', 'Wheel Base'],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-xs sm:text-sm py-2 px-4 text-center font-medium tracking-wide">
        ⚡ FREE Pan-India Shipping on Orders Above ₹2,999 | Genuine Sports Gear Guaranteed
      </div>

      {/* Navigation */}
      <nav className="border-b border-slate-800/80 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center font-black text-xl shadow-lg shadow-cyan-500/20">
            S
          </div>
          <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            SACHDEV <span className="text-cyan-400">SPORTS</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#products" className="hover:text-cyan-400 transition-colors">Cricket</a>
          <a href="#products" className="hover:text-cyan-400 transition-colors">Protective</a>
          <a href="#products" className="hover:text-cyan-400 transition-colors">Footwear</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Inquiries</a>
        </div>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-lg transition-all shadow-md shadow-cyan-500/20 active:scale-95">
          Shop Catalog
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6 max-w-7xl mx-auto">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="text-center max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-wide">
            <span>🚀 Next.js & Tailwind Powered Store</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Elevate Your Game with <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Pro-Grade Sports Equipment</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Authorized distributor of top-tier cricket equipment, footwear, and protective gear. Engineered for elite performance on every matchday.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="#products" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/25">
              Explore Featured Gear
            </a>
            <a href="#contact" className="border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-7 py-3.5 rounded-xl transition-all">
              Custom Order Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section id="products" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-800/80 pb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Featured Equipment</h2>
            <p className="text-slate-400 text-sm mt-1">Handpicked match-ready gear for professional athletes</p>
          </div>
          <span className="text-xs font-mono text-cyan-400 mt-2 md:mt-0">Live Stock • Real-Time Database</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.id} className="group rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/50 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between">
              <div>
                <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-slate-950">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-cyan-300 text-[10px] font-bold px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                  <span className="absolute top-2.5 right-2.5 bg-slate-950/80 text-amber-400 text-[11px] font-bold px-2 py-0.5 rounded-md">
                    {item.rating}
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-cyan-400 tracking-wider uppercase mb-1">{item.category}</div>
                <h3 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors leading-snug">{item.name}</h3>
                
                <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                  {item.specs.map((spec, idx) => (
                    <span key={idx} className="bg-slate-800/60 border border-slate-700/50 text-slate-300 text-[10px] px-2 py-0.5 rounded">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-800/60 pt-3 mt-2">
                <div className="font-extrabold text-lg text-white">{item.price}</div>
                <button className="bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 text-xs font-bold px-3 py-2 rounded-lg transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="contact" className="py-16 px-6 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Direct Equipment Inquiry</h2>
            <p className="text-slate-400 text-sm mt-2">Need custom bat knocking, team kit bulk orders, or gear recommendations?</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 max-w-lg mx-auto">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
              <input type="text" placeholder="e.g. Rahul Sharma" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
              <input type="email" placeholder="name@example.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Gear / Order Requirements</label>
              <textarea rows={3} placeholder="Tell us about the gear or bulk sizes you need..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 active:scale-98">
              Submit Inquiry via Resend API
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        © 2026 Sachdev Sports • Engineered with Next.js, Tailwind CSS & Supabase
      </footer>
    </div>
  );
}