import { submitContactForm } from "@/actions/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Header / Navbar */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-wider text-amber-500 uppercase">
              Sachdev <span className="text-white">Sports</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#gear" className="hover:text-amber-500 transition-colors">Cricket Gear</a>
            <a href="#categories" className="hover:text-amber-500 transition-colors">Categories</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Contact Store</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center md:text-left grid md:grid-cols-2 items-center gap-12">
        <div>
          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            Premium Athletic & Cricket Equipment
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight">
            Gear Up With <span className="text-amber-500">Pro Standard</span> Quality.
          </h1>
          <p className="text-slate-400 text-lg mt-4 max-w-xl">
            Explore authentic cricket bats, protective gear, athletic footwear, and multi-sport accessories carefully curated for players at every level.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#gear"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Browse Equipment
            </a>
            <a
              href="#contact"
              className="border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Inquire Stock
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-full h-80 bg-gradient-to-tr from-amber-500/20 to-slate-800 border border-slate-800 rounded-2xl flex items-center justify-center p-8 text-center shadow-2xl">
            <div>
              <p className="text-5xl font-black text-amber-500">MRF | SG | SS</p>
              <p className="text-slate-400 mt-2 font-medium">Authorized Retailer & Gear Specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gear Section */}
      <section id="gear" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-100">Featured Categories</h2>
        <p className="text-slate-400 mt-1">High-performance gear engineered for match day.</p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { title: "English Willow Bats", desc: "Grade 1 & 2 Willow bats tuned for optimal sweet-spot power.", price: "Explore Range" },
            { title: "Protective Gear", desc: "Lightweight batting pads, gloves, thigh guards, and helmets.", price: "Explore Range" },
            { title: "Footwear & Spikes", desc: "Spikes and turf shoes designed for maximum grip and comfort.", price: "Explore Range" }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{item.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-amber-400 text-sm font-semibold">{item.price}</span>
                <a href="#contact" className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-2 rounded font-medium">Inquire</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Stock Query Section (Integrated with backend) */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-slate-950 border border-slate-800 p-8 md:p-12 rounded-2xl shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-100">Check Gear Availability</h2>
            <p className="text-slate-400 text-sm mt-2">
              Looking for a specific bat weight, gear brand, or custom order? Send us a message and our team will get back to you.
            </p>
          </div>

          <form action={submitContactForm} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Nidhish Reddy"
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Item Inquiry / Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="e.g. Hi, do you have MRF Genius English Willow bats in stock under 1180g?"
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-lg transition-colors text-base"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Sachdev Sports. All rights reserved.</p>
      </footer>
    </div>
  );
}