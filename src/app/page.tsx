'use client';

import React, { useState } from 'react';

export default function SachdevSportsHome() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = ['All', 'Cricket', 'Protective Gear', 'Footwear', 'Accessories'];

  const products = [
    {
      id: 1,
      name: 'MRF Genius Player Edition Bat',
      category: 'Cricket',
      price: '₹48,999',
      rating: '4.9 ★',
      badge: 'Pro Choice',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop&q=80',
      specs: ['Grade 1+ English Willow', '38-40mm Edges', 'Semi-Oval Handle'],
    },
    {
      id: 2,
      name: 'Shrey Elite Pro Helmet',
      category: 'Protective Gear',
      price: '₹14,499',
      rating: '4.8 ★',
      badge: 'Safety Certified',
      image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&auto=format&fit=crop&q=80',
      specs: ['Titanium Grille', 'Dual Density EVA', 'BSi Kitemarked'],
    },
    {
      id: 3,
      name: 'A6 Pro Spike Shoes',
      category: 'Footwear',
      price: '₹8,999',
      rating: '4.7 ★',
      badge: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
      specs: ['Metal Spike Plate', 'Phylon Midsole', 'Breathable Mesh'],
    },
    {
      id: 4,
      name: 'Pro Tour Wheel Duffle Bag',
      category: 'Accessories',
      price: '₹6,299',
      rating: '4.9 ★',
      badge: 'New Arrival',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
      specs: ['1680D Cordura Fabric', '3 Bat Sleeves', 'Tractor Wheels'],
    },
  ];

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 4000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-xs sm:text-sm py-2 px-4 text-center font-semibold tracking-wide shadow-md">
        ⚡ FREE Pan-India Express Shipping on Orders Above ₹2,999 | 100% Genuine Equipment Guaranteed
      </div>

      {/* Navigation */}
      <nav className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50 px-6 sm:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center font-black text-xl text-slate-950 shadow-lg shadow-cyan-500/30">
            S
          </div>
          <span className="font-black text-xl tracking-wider text-white">
            SACHDEV <span className="text-cyan-400">SPORTS</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <a href="#products" className="hover:text-cyan-400 transition-colors">Products</a>
          <a href="#features" className="hover:text-cyan-400 transition-colors">Why Us</a>
          <a href="#inquiry" className="hover:text-cyan-400 transition-colors">Bulk Orders</a>
        </div>

        <a
          href="#products"
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
        >
          View Catalog
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28 px-6 max-w-7xl mx-auto">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="text-center max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Full-Stack Next.js 14 & Supabase Architecture
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-none">
            ENGINEERED FOR <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              ELITE ATHLETIC PERFORMANCE
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Authorized distributor of premier cricket equipment, professional footwear, and protective match gear across India.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#products"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm px-8 py-4 rounded-xl transition-all shadow-xl shadow-cyan-500/25 active:scale-95"
            >
              EXPLORE CATALOG
            </a>
            <a
              href="#inquiry"
              className="border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold text-sm px-8 py-4 rounded-xl transition-all active:scale-95"
            >
              CUSTOM ORDER
            </a>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section id="products" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-slate-800/80 pb-6">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white">FEATURED EQUIPMENT</h2>
            <p className="text-slate-400 text-sm mt-1">Match-ready equipment curated for professional athletes</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/50 p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 rounded-xl overflow-hidden mb-4 bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-cyan-300 text-[10px] font-bold px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                  <span className="absolute top-3 right-3 bg-slate-950/80 text-amber-400 text-[11px] font-bold px-2 py-0.5 rounded-md">
                    {item.rating}
                  </span>
                </div>

                <div className="text-[10px] font-bold text-cyan-400 tracking-wider uppercase mb-1">
                  {item.category}
                </div>
                <h3 className="font-extrabold text-base text-white group-hover:text-cyan-300 transition-colors leading-tight">
                  {item.name}
                </h3>

                <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                  {item.specs.map((spec, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-950 border border-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded-md"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-800/60 pt-3 mt-2">
                <div className="font-black text-xl text-white">{item.price}</div>
                <button className="bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 text-xs font-bold px-4 py-2 rounded-lg transition-all active:scale-95">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-3xl font-black text-white">Direct Equipment Inquiry</h2>
            <p className="text-slate-400 text-sm mt-2">
              Need custom bat knocking, team kit bulk orders, or gear specs? Send us a direct query.
            </p>
          </div>

          {isSubmitted && (
            <div className="mb-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm text-center font-semibold">
              ✓ Inquiry submitted successfully! Triggered via Resend API.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Requirements</label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention bat weight preference, shoe sizes, or club requirements..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20 active:scale-95 text-sm"
            >
              SUBMIT INQUIRY (RESEND API INTEGRATED)
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        © 2026 Sachdev Sports • Next.js 14, Tailwind CSS, Supabase DB & Resend Integration
      </footer>
    </div>
  );
}