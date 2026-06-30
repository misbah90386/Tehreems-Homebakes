import React, { useState } from "react";
import { Mail, ArrowRight, Heart, Sparkles, CakeSlice, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setSuccess(true);
      setEmail("");
    }
  };

  const categories = [
    "Birthday Cakes",
    "Wedding Cakes",
    "Custom Cakes",
    "Cupcakes",
    "Belgian Brownies",
    "Gourmet Cookies",
    "Dessert Gift Boxes"
  ];

  const quickLinks = [
    { label: "Our Menu", id: "menu" },
    { label: "Custom Cake Builder", id: "custom-cakes-section" },
    { label: "Our Heartfelt Story", id: "about" },
    { label: "Baking Differentiators", id: "why-us" },
    { label: "Visual Portfolio", id: "gallery" },
    { label: "Customer Reviews", id: "testimonials" },
    { label: "FAQ & Notice Guide", id: "faq" }
  ];

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-darkbrown text-white pt-20 pb-8 relative overflow-hidden border-t border-softbrown/20">
      
      {/* Decorative details */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-blush to-gold" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#FFF8F2]/5 rounded-full blur-xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Logo & Brand Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/30">
                <CakeSlice className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight block">
                  Tehreems
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] font-sans block text-gold font-bold -mt-1">
                  Homebakes
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FFF8F2]/75 font-sans leading-relaxed text-left">
              Handcrafting luxury bespoke cakes, cupcakes, brownies, and fine pastries inside our premium home studio inside Phase 5, DHA Lahore to make every celebration sweet, elegant, and unforgettable.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold transition-colors flex items-center justify-center text-neutral-400"
                title="Instagram"
              >
                <Instagram className="w-4 h-4 text-white hover:text-gold" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold transition-colors flex items-center justify-center text-neutral-400"
                title="Facebook"
              >
                <Facebook className="w-4 h-4 text-white hover:text-gold" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold transition-colors flex items-center justify-center text-neutral-400"
                title="TikTok"
              >
                <svg className="w-4 h-4 fill-current text-white hover:text-gold" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10V9a4 4 0 0 0-4-4h-.5a1 1 0 0 0 0 2h.5a2 2 0 0 1 2 2v2a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4V2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-xs uppercase tracking-[0.2em] font-bold text-gold text-left">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-left">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollToSection(link.id)}
                    className="text-xs text-cream hover:text-gold transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-xs uppercase tracking-[0.2em] font-bold text-gold text-left">
              Specialties
            </h3>
            <ul className="space-y-2 text-left">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScrollToSection("menu")}
                    className="text-xs text-cream hover:text-gold transition-colors text-left cursor-pointer"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <h3 className="font-serif text-xs uppercase tracking-[0.2em] font-bold text-gold text-left">
                The Confectionery Club
              </h3>
              <p className="text-xs text-[#FFF8F2]/75 font-sans leading-relaxed text-left">
                Subscribe to receive special recipe secrets, seasonal cake collections announcements, and exclusive discount vouchers.
              </p>
            </div>

            {success ? (
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left">
                <span className="flex items-center gap-1.5 text-xs text-gold font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Welcome To The Club!
                </span>
                <p className="text-[11px] text-[#FFF8F2]/70 font-sans">
                  We've added your email. Keep an eye out for sweet surprises in your inbox soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 relative">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-gold focus:border-transparent"
                  />
                  <Mail className="w-4 h-4 text-white/30 absolute right-3 top-3.5 pointer-events-none" />
                </div>
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold/90 text-white p-3 rounded-xl shadow-md transition-colors flex items-center justify-center cursor-pointer border border-white/10"
                  title="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Separator and Bottom Meta */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FFF8F2]/50 font-sans">
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Tehreems Homebakes. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" />
            <span>& premium ingredients inside DHA Lahore.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
