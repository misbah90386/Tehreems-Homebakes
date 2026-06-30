import React, { useState, useEffect } from "react";
import { ArrowUp, MessageSquare, ShoppingBag, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Types
import { CartItem, Product, Offer } from "./types";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import AboutSection from "./components/AboutSection";
import WhyChooseUs from "./components/WhyChooseUs";
import CustomCakeSection from "./components/CustomCakeSection";
import GallerySection from "./components/GallerySection";
import TestimonialSection from "./components/TestimonialSection";
import HowItWorks from "./components/HowItWorks";
import OffersSection from "./components/OffersSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCustomCakeModalOpen, setIsCustomCakeModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [cookieConsentAccepted, setCookieConsentAccepted] = useState(false);

  // Monitor scroll for floating controls and Back to Top
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 400);
      setShowFloatingCTA(scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync cookie consent from localStorage
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "true") {
      setCookieConsentAccepted(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setCookieConsentAccepted(true);
  };

  // Add a standard menu product to the cart
  const handleAddToCart = (product: Product, flavor: string, customMessage: string) => {
    setCart((prev) => {
      // Check if item already exists with matching flavor and custom message
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedFlavor === flavor &&
          item.customMessage === customMessage
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }

      return [...prev, { product, quantity: 1, selectedFlavor: flavor, customMessage }];
    });

    // Open cart automatically on item addition for high-end conversion
    setIsCartOpen(true);
  };

  // Add promotional packages/offers directly
  const handleAddOfferToCart = (offer: Offer) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex((item) => item.product.id === offer.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [...prev, { product: offer, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQty = (idx: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(idx);
      return;
    }
    setCart((prev) => {
      const updated = [...prev];
      updated[idx].quantity = quantity;
      return updated;
    });
  };

  const handleRemoveItem = (idx: number) => {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-cream text-darkbrown font-sans relative">
      
      {/* Premium Sticky Navigation */}
      <Header
        cartCount={totalCartCount}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={(q) => {
          setSearchQuery(q);
          if (q) handleScrollToSection("menu");
        }}
        onNavigate={handleScrollToSection}
        onRequestCustomCake={() => setIsCustomCakeModalOpen(true)}
      />

      {/* Hero Banner Section */}
      <Hero
        onOrderNowClick={() => handleScrollToSection("menu")}
        onViewMenuClick={() => handleScrollToSection("menu")}
      />

      {/* Featured Categories & Products Grid */}
      <ProductSection
        onAddToCart={handleAddToCart}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Custom Cake Styles & Booking Wizard */}
      <CustomCakeSection
        isModalOpen={isCustomCakeModalOpen}
        setModalOpen={setIsCustomCakeModalOpen}
      />

      {/* Heartfelt About Us narrative */}
      <AboutSection />

      {/* Iconic Why Choose Us points */}
      <WhyChooseUs />

      {/* Portfolio Gallery & Fullscreen Lightbox */}
      <GallerySection />

      {/* Realistic 5-star reviews testimonial slider */}
      <TestimonialSection />

      {/* Visual How Ordering Works roadmap */}
      <HowItWorks />

      {/* Special Promotional Offers Packages */}
      <OffersSection onAddOfferToCart={handleAddOfferToCart} />

      {/* Accordion FAQ Stack */}
      <FaqSection />

      {/* Form & Map Contact block */}
      <ContactSection />

      {/* Footer Links & Newsletter */}
      <Footer />

      {/* Shopping Drawer Side Panel */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
      />

      {/* FLOATING EXTRA PREMIUM CONTROLS */}
      
      {/* Floating WhatsApp Action (Bottom Right) */}
      <a
        href="https://wa.me/923001234567?text=Hi%20Tehreem!%20I'd%20love%20to%20learn%20more%20about%20ordering%20delicious%20desserts%20from%20your%20studio."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-30 p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce cursor-pointer group"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-neutral-900 text-white text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          WhatsApp Tehreem
        </span>
      </a>

      {/* Floating Order Now Button (Bottom Left) - Reveals on Scroll */}
      <AnimatePresence>
        {showFloatingCTA && (
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            onClick={() => handleScrollToSection("menu")}
            className="fixed bottom-6 left-6 z-30 bg-gold hover:bg-gold/90 text-white p-4 sm:py-3.5 sm:px-6 rounded-full shadow-2xl transition-all hover:scale-105 cursor-pointer flex items-center gap-2 group font-sans text-xs font-bold uppercase tracking-widest border border-softbrown/10"
            title="Browse Menu Now"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Order Bakes Now</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Back to Top Button (Above WhatsApp) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 right-7 z-30 p-2.5 rounded-full bg-white hover:bg-cream text-darkbrown shadow-lg border border-blush transition-transform hover:scale-105 cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 text-gold" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cookie Consent Banner */}
      <AnimatePresence>
        {!cookieConsentAccepted && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 inset-x-6 sm:inset-x-auto sm:left-6 sm:max-w-md z-40 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-blush shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="text-left">
              <span className="flex items-center gap-1 text-[9px] uppercase tracking-[0.2em] text-gold font-extrabold mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Cookie Preference
              </span>
              <p className="text-[11px] text-mediumbrown font-sans leading-relaxed">
                We use secure cookies to keep your delicious bakes cart items synced across sessions and analyze traffic. By browsing, you accept our pure studio cookies.
              </p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
              <button
                onClick={handleAcceptCookies}
                className="bg-darkbrown hover:bg-gold text-white font-sans text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-lg shadow-sm cursor-pointer"
              >
                Accept
              </button>
              <button
                onClick={handleAcceptCookies}
                className="p-1.5 text-mediumbrown hover:text-darkbrown rounded-lg cursor-pointer"
                title="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
