import React from "react";
import { Sparkles, Star, Award, Heart, CakeSlice } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onOrderNowClick: () => void;
  onViewMenuClick: () => void;
}

export default function Hero({ onOrderNowClick, onViewMenuClick }: HeroProps) {
  const trustBadges = [
    {
      icon: <Award className="w-5 h-5 text-gold" />,
      title: "Hygienic Prep",
      desc: "Made in a sanitized studio kitchen"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-gold" />,
      title: "Premium Ingredients",
      desc: "Belgian chocolate & real vanilla"
    },
    {
      icon: <Star className="w-5 h-5 text-gold" />,
      title: "Bespoke Custom Cakes",
      desc: "Handcrafted celebratory tiers"
    },
    {
      icon: <Heart className="w-5 h-5 text-gold" />,
      title: "Prompt Hand Delivery",
      desc: "Ensuring pristine cake integrity"
    }
  ];

  return (
    <section id="hero" className="relative min-h-[95vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-cream">
      {/* Decorative Editorial circles & lines */}
      <div className="absolute top-20 right-10 text-blush opacity-40 hidden md:block">
        <svg width="180" height="180" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4" />
        </svg>
      </div>
      <div className="absolute top-1/3 left-6 w-px h-32 bg-gold/30 hidden md:block" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full py-6">
        
        {/* Left Column: Hero Typography */}
        <div className="lg:col-span-7 text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blush/40 border border-softbrown/20 text-darkbrown px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.25em] uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            Freshly Baked Daily Inside DHA Lahore
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="text-[11px] uppercase tracking-[0.4em] text-softbrown font-bold block">
              Luxury Homemade Confectionery
            </h2>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-darkbrown tracking-tight leading-[1.05]">
              Freshly Baked <br />
              <span className="italic text-gold font-serif">with Love</span>, Made <br />
              for Every Moment.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-mediumbrown text-sm sm:text-base font-sans leading-relaxed max-w-xl"
          >
            Beautiful homemade cakes, cupcakes, brownies, cookies, and desserts crafted with premium ingredients inside our DHA Lahore home studio to make your celebrations sweet, elegant, and unforgettable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4 flex flex-wrap gap-4"
          >
            <button
              onClick={onOrderNowClick}
              className="bg-gold hover:bg-gold/90 text-white font-sans text-[11px] uppercase tracking-[0.2em] font-bold py-4 px-10 rounded-full shadow-md transition-all cursor-pointer border border-softbrown/20"
            >
              Browse Menu
            </button>
            <button
              onClick={onViewMenuClick}
              className="border border-softbrown hover:bg-softbrown hover:text-white text-darkbrown font-sans text-[11px] uppercase tracking-[0.2em] font-bold py-4 px-10 rounded-full transition-all cursor-pointer"
            >
              Our Specialties
            </button>
          </motion.div>
        </div>

        {/* Right Column: Hero Image with Editorial Frame */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 p-1 bg-white/20"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-darkbrown/40 via-transparent to-transparent" />
            <img
              src="/src/assets/images/hero_bakery_banner_1782831525043.jpg"
              alt="Tehreems Homebakes Luxury Banner"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
            />
            {/* Elegant watermark */}
            <div className="absolute bottom-6 left-6 z-20 text-white flex items-center gap-1.5">
              <CakeSlice className="w-4 h-4 text-gold" />
              <span className="font-serif italic text-sm tracking-wide">Signature Bakes</span>
            </div>
          </motion.div>

          {/* Decorative small element */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blush/40 rounded-full blur-xl -z-10" />
        </div>
      </div>

      {/* Trust Badges Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white rounded-2xl shadow-sm border border-blush"
        >
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-2 transition-transform duration-300 hover:translate-y-[-2px] border-b last:border-0 sm:border-b-0 sm:border-r last:border-r-0 border-softbrown/10"
            >
              <div className="w-10 h-10 shrink-0 bg-cream border border-gold/30 flex items-center justify-center rounded-xl">
                {badge.icon}
              </div>
              <div className="text-left">
                <h3 className="font-sans text-[11px] font-bold uppercase tracking-wider text-darkbrown">
                  {badge.title}
                </h3>
                <p className="text-[10px] text-mediumbrown font-sans mt-0.5 leading-tight">
                  {badge.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator for Editorial design */}
      <div className="absolute bottom-28 right-6 flex flex-col items-center gap-4 z-20 pointer-events-none hidden xl:flex">
        <div className="w-px h-16 bg-gold/40"></div>
        <span className="vertical-rl text-[9px] uppercase tracking-[0.5em] font-bold text-gold">Scroll For Menu</span>
      </div>
    </section>
  );
}
