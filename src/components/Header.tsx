import React, { useState, useEffect } from "react";
import { ShoppingBag, Search, Menu, X, Heart, Sparkles, CakeSlice } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onNavigate: (sectionId: string) => void;
  onRequestCustomCake: () => void;
}

export default function Header({
  cartCount,
  onCartClick,
  searchQuery,
  setSearchQuery,
  onNavigate,
  onRequestCustomCake
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Menu", id: "menu" },
    { label: "Custom Cakes", id: "custom-cakes-section" },
    { label: "About", id: "about" },
    { label: "Why Us", id: "why-us" },
    { label: "Gallery", id: "gallery" },
    { label: "Testimonials", id: "testimonials" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" }
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-softbrown/30 py-3 text-darkbrown shadow-sm"
            : "bg-cream/90 backdrop-blur-md border-b border-softbrown/20 py-4 text-darkbrown"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-blush/40 flex items-center justify-center border border-softbrown/20 group-hover:scale-105 transition-transform">
              <CakeSlice className="w-5 h-5 text-darkbrown" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight block text-darkbrown">
                Tehreems
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] font-sans block text-softbrown font-bold -mt-1 group-hover:text-gold transition-colors">
                Homebakes
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="font-sans text-[11px] uppercase tracking-[0.2em] font-medium transition-all cursor-pointer relative py-1 hover:text-gold text-darkbrown/90"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Bar Trigger */}
            <div className="relative">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="absolute right-full mr-2 top-1/2 -translate-y-1/2 hidden sm:block"
                  >
                    <input
                      type="text"
                      placeholder="Search bakes..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-1.5 text-xs rounded-full border outline-none bg-white border-softbrown/30 text-darkbrown placeholder-mediumbrown/60 focus:ring-1 focus:ring-gold"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-full transition-colors hover:bg-blush/30 text-darkbrown"
                title="Search menu"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Request Custom Cake Quick CTA */}
            <button
              onClick={onRequestCustomCake}
              className="hidden md:flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] font-bold py-2 px-5 rounded-full border border-softbrown bg-gold hover:bg-gold/90 text-white shadow-sm transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Custom Quote
            </button>

            {/* Shopping Cart Trigger */}
            <button
              onClick={onCartClick}
              className="p-2 rounded-full relative transition-colors cursor-pointer hover:bg-blush/30 text-darkbrown"
              id="cart-trigger"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5.5 h-5.5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full lg:hidden transition-colors hover:bg-blush/30 text-darkbrown"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 bg-white/98 shadow-2xl p-6 flex flex-col gap-4 border-b border-neutral-100 lg:hidden"
          >
            {/* Mobile Search input */}
            <div className="relative mb-2">
              <input
                type="text"
                placeholder="Search cupcakes, cakes, tarts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 text-sm rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left font-sans text-sm font-medium py-2 px-3 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors text-neutral-700"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onRequestCustomCake();
              }}
              className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-sans text-sm font-bold uppercase tracking-widest py-3 rounded-lg shadow-md transition-colors mt-2"
            >
              <Sparkles className="w-4 h-4" />
              Request Custom Cake
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
