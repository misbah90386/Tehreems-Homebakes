import React, { useState, useEffect } from "react";
import { TESTIMONIALS } from "../data";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-lightcream relative overflow-hidden border-t border-softbrown/10">
      {/* Decorative background shape */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blush/30 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cream rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block">
            Real Reviews
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-darkbrown tracking-tight leading-tight">
            Loved By Our Community
          </h2>
          <div className="w-16 h-0.5 bg-gold/50 mx-auto my-4" />
          <p className="font-sans text-mediumbrown text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Read heartwarming stories from clients who chose Tehreems Homebakes to sweeten their most cherished life celebrations.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white border border-blush rounded-3xl p-8 sm:p-12 md:p-16 shadow-lg">
          
          {/* Quote icon watermark */}
          <div className="absolute top-6 left-6 text-blush/40">
            <Quote className="w-16 h-16 sm:w-24 sm:h-24 stroke-1 fill-current" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 flex flex-col items-center md:items-start md:flex-row gap-8"
            >
              {/* Profile Image Column */}
              <div className="flex flex-col items-center text-center shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-cream shadow-xl">
                  <img
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-darkbrown mt-4 leading-none">
                  {activeTestimonial.name}
                </h3>
                <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-mediumbrown/60 font-bold mt-2">
                  {activeTestimonial.role}
                </span>
              </div>

              {/* Text Column */}
              <div className="flex-grow flex flex-col justify-between text-left">
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 justify-center md:justify-start mb-4 text-gold">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="font-serif text-base sm:text-lg text-darkbrown italic leading-relaxed text-center md:text-left">
                    "{activeTestimonial.text}"
                  </p>
                </div>

                {/* Ordered Tag */}
                {activeTestimonial.cakeOrdered && (
                  <div className="mt-6 flex justify-center md:justify-start">
                    <span className="bg-cream border border-blush text-darkbrown text-[10px] font-bold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full shadow-sm">
                      Ordered: {activeTestimonial.cakeOrdered}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left/Right Controls overlay */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2 z-20">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white border border-blush hover:bg-cream text-darkbrown hover:text-gold transition-colors cursor-pointer"
              title="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white border border-blush hover:bg-cream text-darkbrown hover:text-gold transition-colors cursor-pointer"
              title="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Indicator Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeIndex === i ? "w-6 bg-gold" : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
              title={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
