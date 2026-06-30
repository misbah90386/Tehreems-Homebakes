import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function GallerySection() {
  const [activeTag, setActiveTag] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const tags = [
    "All",
    "Cakes",
    "Cupcakes",
    "Cookies",
    "Brownies",
    "Dessert Tables",
    "Baking Process",
    "Happy Customer Orders"
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeTag === "All" || item.tag === activeTag
  );

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-cream border-t border-softbrown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block">
            Our Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-darkbrown tracking-tight leading-tight">
            The Visual Showcase
          </h2>
          <div className="w-16 h-0.5 bg-gold/50 mx-auto my-4" />
          <p className="font-sans text-mediumbrown text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Browse through some of our favorite custom bakes, happy client deliveries, and behind-the-scenes moments inside Tehreem's baking studio.
          </p>
        </div>

        {/* Tags Scroller */}
        <div className="flex items-center justify-start lg:justify-center gap-3 overflow-x-auto pb-6 mb-12 scrollbar-none">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setActiveTag(tag);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold whitespace-nowrap cursor-pointer transition-all duration-300 ${
                activeTag === tag
                  ? "bg-darkbrown text-white shadow-sm border border-darkbrown"
                  : "bg-white text-darkbrown border border-blush hover:border-gold hover:text-gold"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-cream shadow-sm hover:shadow-xl cursor-pointer border border-blush p-1"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Floating tags */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-darkbrown text-[9px] uppercase tracking-[0.15em] font-bold px-2.5 py-1 rounded-full shadow-sm z-10 border border-blush/40">
                    {item.tag}
                  </span>

                  {/* Hover Details Panel */}
                  <div className="absolute inset-0 bg-darkbrown/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                    <Maximize2 className="w-5 h-5 text-white/80 absolute top-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300" />
                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 space-y-1.5">
                      <h3 className="font-serif text-sm sm:text-base font-bold text-white leading-tight">
                        {item.title}
                      </h3>
                      <span className="text-[9px] text-gold uppercase tracking-[0.2em] font-sans font-bold block">
                        Click to inspect
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 lightbox-backdrop"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            />

            {/* Lightbox Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-cream rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[85vh] lg:max-h-none border border-blush"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors z-20 cursor-pointer"
                title="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image side */}
              <div className="relative flex-grow flex items-center justify-center bg-black aspect-[4/3] lg:aspect-auto lg:h-[540px]">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />

                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-black/75 text-white transition-all z-10 hover:scale-105 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-black/75 text-white transition-all z-10 hover:scale-105 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Info panel side */}
              <div className="p-6 sm:p-8 bg-white text-darkbrown lg:w-80 flex flex-col justify-between shrink-0 border-t lg:border-t-0 lg:border-l border-blush">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold font-sans block mb-2">
                    {filteredItems[lightboxIndex].tag}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <div className="w-12 h-0.5 bg-gold my-4" />
                  <p className="text-xs text-mediumbrown font-sans leading-relaxed text-left">
                    This beautiful piece showcases Tehreem's customized design philosophy, prepared meticulously using authentic ingredients inside her sanitised home studio.
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href="#custom-cakes-section"
                    onClick={() => setLightboxIndex(null)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white font-sans text-[11px] uppercase tracking-[0.15em] font-bold py-3.5 rounded-xl shadow-md transition-colors text-center cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Order Similar Design
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
