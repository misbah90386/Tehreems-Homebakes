import React, { useState } from "react";
import { FAQS } from "../data";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-cream border-t border-softbrown/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-darkbrown tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-0.5 bg-gold/50 mx-auto my-4" />
          <p className="font-sans text-mediumbrown text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Everything you need to know about placing custom orders, dietary variants, shipping logistics, and studio booking guidelines.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4 text-left">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-blush shadow-md"
                    : "bg-[#FFF8F2]/50 border-blush/50 hover:bg-[#FFF8F2] hover:border-gold/30"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 shrink-0 ${isOpen ? "text-gold" : "text-mediumbrown/50"}`} />
                    <span className="font-serif text-sm sm:text-base font-bold text-darkbrown tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  <span className={`p-1.5 rounded-full ${isOpen ? "bg-gold text-white" : "bg-blush text-darkbrown"} transition-all`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-mediumbrown font-sans leading-relaxed border-t border-blush/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
