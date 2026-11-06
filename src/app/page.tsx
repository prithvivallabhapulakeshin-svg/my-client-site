"use client";

import { useState } from "react";
import { submitContactForm } from "@/actions/contact";

interface Product {
  id: number;
  name: string;
  category: "cricket" | "badminton" | "fitness" | "apparel";
  brand: string;
  price: string;
  inStock: boolean;
  specs: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: "SS Master 5000 English Willow Bat", category: "cricket", brand: "SS", price: "₹26,000", inStock: true, specs: "Grade 2 Willow | ~1170g | 39mm Edges" },
  { id: 2, name: "MRF Genius Grand Edition Bat", category: "cricket", brand: "MRF", price: "₹48,500", inStock: true, specs: "Grade 1+ Players Willow | Mid-Profile" },
  { id: 3, name: "SG Skipper Xtreme English Willow", category: "cricket", brand: "SG", price: "₹17,999", inStock: true, specs: "Full Profile | Hard Pressed | Thick Toe" },
  { id: 4, name: "SS Gladiator Batting Leg Guards", category: "cricket", brand: "SS", price: "₹5,270", inStock: true, specs: "High Density Foam | Lightweight Mesh" },
  { id: 5, name: "AeroFit Commercial Bumper Plates (20kg)", category: "fitness", brand: "AeroFit", price: "₹6,240", inStock: true, specs: "100% Virgin Rubber | 50mm Stainless Core" },
  { id: 6, name: "Yonex Astrox 99 Pro Badminton Racquet", category: "badminton", brand: "Yonex", price: "₹16,490", inStock: false, specs: "Namd Graphite | Head Heavy | 4U G5" },
  { id: 7, name: "Berge Quick-Dry Performance Track Pants", category: "apparel", brand: "Berge", price: "₹1,094", inStock: true, specs: "100% Breathable Poly-Mesh | Zip Pockets" },
  { id: 8, name: "AeroFit Pickleball Paddle Ace", category: "fitness", brand: "AeroFit", price: "₹3,865", inStock: true, specs: "Extended 5.6-inch Handle | Polymer Core" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<string>("");

  const filteredProducts = activeTab === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((acc, item) => {
    const numeric = parseInt(item.price.replace(/[^0-9]/g, "")) || 0;
    return acc + numeric;
  }, 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Banner */}
      <div className="bg-amber-500 text-slate-950 text-xs font-bold py-2 px-4 text-center tracking-wide uppercase">
        Established 1928 • Authorized Dealer for MRF, SS, SG, Yonex & AeroFit • Express In-Store Pickup in Hyderabad
      </div>

      {/* Header & Nav */}
      <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 text-slate-950 font-black px-2.5 py-1 rounded text-xl">S</div>
            <div>
              <span className="text-xl font-black tracking-wider text-amber-500 uppercase block leading-none">
                Sachdev <span className="text-white">Sports</span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-widest uppercase font-semibold">Legacy Since 1928</span>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-300">
            <a href="#catalog" className="hover:text-amber-400 transition-colors">Catalog</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#stores" className="hover:text-amber-400 transition-colors">Stores</a>
            <a href="#inquiry" className="hover:text-amber-400 transition-colors">Stock Inquiry</a>
          </nav>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative bg-slate-900 border border-slate-700 hover:border-amber-500/50 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold transition-all"
          >
            <span>Cart</span>
            <span className="bg-amber-500 text-slate-950 px-2 py-0.5 rounded-full text-xs font-extrabold">
              {cart.length}
            </span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Hyderabad's Premier Sports Equipment Store
          </span>
          <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight">
            Pro-Grade Gear. <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200 bg-clip-text text-transparent">
              Match-Ready Precision.
            </span>
          </h1>
          <p className="text-slate-400 text-lg mt-6 max-w-xl leading-relaxed">
            From English Willow cricket bats hand-selected for weight and grain structure to professional badminton stringing and gym installations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#catalog"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 text-sm uppercase tracking-wider"
            >
              Explore Gear Catalog
            </a>
            <a
              href="#inquiry"
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-bold px-7 py-3.5 rounded-xl transition-all text-sm uppercase tracking-wider"
            >
              Custom Bat Knocking & Gutting
            </a>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="lg:col-span-5">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-amber-400 mb-2">Featured Collection</h3>
            <h4 className="text-2xl font-black text-white">2026 Players Edition Willow</h4>
            <p className="text-slate-400 text-sm mt-2">Factory knocked, hand-bound handles, and customized edge profiling available on request.</p>
            <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Starting from</span>
                <span className="text-2xl font-black text-amber-400">₹17,999</span>
              </div>
              <a
                href="#catalog"
                className="bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs px-4 py-2 rounded-lg hover:bg-amber-500 hover:text-slate-950 transition-all"
              >
                View Bats
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <section id="catalog" className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white">Store Inventory</h2>
            <p className="text-slate-400 text-sm mt-1">Direct from official brand distributors with full manufacturer warranty.</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
            {["all", "cricket", "badminton", "fitness", "apparel"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? "bg-amber-500 text-slate-950 shadow"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {product.brand}
                  </span>
                  {product.inStock ? (
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">In Stock</span>
                  ) : (
                    <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">Order Only</span>
                  )}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2 font-mono">{product.specs}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-lg font-black text-white">{product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold px-3.5 py-2 rounded-lg transition-all"
                >
                  + Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-900">
        <h2 className="text-3xl font-black text-white text-center">In-Store Technical Services</h2>
        <p className="text-slate-400 text-sm text-center mt-2 max-w-lg mx-auto">
          Expert workshop technicians dedicated to keeping your equipment running at peak performance.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Machine & Hand Bat Knocking", desc: "10,000+ machine knocks followed by toe and edge oiling for maximum blade protection." },
            { title: "Computerized Racket Gutting", desc: "Precision electronic gutting for Yonex, Victor, and Li-Ning racquets with custom tension." },
            { title: "Custom Gear Sizing & Repair", desc: "Full bat handle replacement, scuff sheet application, and pad retrimming services." }
          ].map((service, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl">
              <div className="w-10 h-10 bg-amber-500/10 text-amber-400 rounded-xl flex items-center justify-center font-black text-lg mb-6 border border-amber-500/20">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              <button
                onClick={() => {
                  setSelectedInquiry(`Service Inquiry: ${service.title}`);
                  document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider inline-flex items-center gap-1"
              >
                Book Service &rarr;
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Stock & Service Inquiry Form (Integrated with Resend + Supabase) */}
      <section id="inquiry" className="max-w-4xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl relative">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Direct Desk Inquiry
            </span>
            <h2 className="text-3xl font-black text-white mt-4">Contact Store Specialists</h2>
            <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">
              Check specific bat weight availability, ask for custom price quotes, or schedule equipment servicing.
            </p>
          </div>

          <form action={submitContactForm} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Nidhish Reddy"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                Gear / Service Request
              </label>
              <textarea
                name="message"
                required
                rows={4}
                defaultValue={selectedInquiry}
                placeholder="e.g. Hi, I am looking for an SS Master 5000 English Willow bat (~1160g) and machine knocking service. Is this available at your store?"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-4 rounded-xl transition-all text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20"
            >
              Submit Inquiry to Store Desk
            </button>
          </form>
        </div>
      </section>

      {/* Cart Drawer Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 h-full p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <h3 className="text-lg font-black text-white">Your Reserved Items ({cart.length})</h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-slate-400 hover:text-white font-bold text-sm"
                >
                  ✕ Close
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-slate-500 text-sm mt-8 text-center">Your cart is empty. Browse the catalog to add gear.</p>
              ) : (
                <div className="space-y-4 mt-6 max-h-[60vh] overflow-y-auto pr-2">
                  {cart.map((item, idx) => (
                    <div key={idx} className="bg-slate-950 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.name}</h4>
                        <span className="text-xs text-amber-400 font-black">{item.price}</span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-500 hover:text-rose-400 text-xs font-bold"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-6 border-t border-slate-800">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-400 text-sm font-semibold">Estimated Total</span>
                  <span className="text-xl font-black text-amber-400">₹{totalPrice.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => {
                    const names = cart.map(i => i.name).join(", ");
                    setSelectedInquiry(`Order Reserve Request for: ${names} (Total ~₹${totalPrice})`);
                    setIsCartOpen(false);
                    document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 rounded-xl uppercase text-xs tracking-wider transition-all"
                >
                  Proceed to In-Store Reserve Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="stores" className="border-t border-slate-900 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-slate-400 text-sm">
          <div>
            <span className="text-lg font-black text-amber-400 block mb-2 uppercase">Sachdev Sports</span>
            <p className="text-xs leading-relaxed">
              Hyderabad's premier retail sports enterprise since 1928. Providing genuine equipment for cricket, badminton, tennis, and fitness enthusiasts.
            </p>
          </div>
          <div>
            <span className="text-sm font-bold text-white block mb-2">Store Hours</span>
            <p className="text-xs">Monday – Sunday: 10:30 AM – 9:00 PM</p>
            <p className="text-xs mt-1">Express same-day in-store pickup available across Hyderabad branches.</p>
          </div>
          <div>
            <span className="text-sm font-bold text-white block mb-2">Customer Care</span>
            <p className="text-xs">Direct Desk: contact@sachdevsports.com</p>
            <p className="text-xs mt-1">Tech Support & Knocking Desk Available Daily</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Sachdev Sports Concept Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
}