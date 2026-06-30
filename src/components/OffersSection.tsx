import React from "react";
import { OFFERS } from "../data";
import { Offer } from "../types";
import { Sparkles, ArrowRight, Percent } from "lucide-react";

interface OffersSectionProps {
  onAddOfferToCart: (offer: Offer) => void;
}

export default function OffersSection({ onAddOfferToCart }: OffersSectionProps) {
  return (
    <section className="py-24 bg-cream relative overflow-hidden border-t border-softbrown/10">
      
      {/* Background visual details */}
      <div className="absolute top-0 right-10 w-44 h-44 bg-blush/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-10 w-44 h-44 bg-cream rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block">
            Limited Promotions
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-darkbrown tracking-tight leading-tight">
            Special Value Packages
          </h2>
          <div className="w-16 h-0.5 bg-gold/50 mx-auto my-4" />
          <p className="font-sans text-mediumbrown text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Take advantage of our popular bundled celebrations, wedding samples tasting packages, and holiday dessert boxes crafted at lovely, friendly prices.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OFFERS.map((offer) => {
            const hasDiscount = offer.originalPrice !== undefined;
            const savingsPercent = hasDiscount
              ? Math.round(((offer.originalPrice! - offer.offerPrice) / offer.originalPrice!) * 100)
              : 0;

            return (
              <div
                key={offer.id}
                className="group bg-white rounded-3xl overflow-hidden border border-blush shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-3"
              >
                {/* Image & tag */}
                <div className="relative aspect-[16/10] overflow-hidden bg-cream rounded-2xl">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/75 to-transparent" />
                  
                  {/* Floating Tag */}
                  <span className="absolute top-4 left-4 bg-gold text-white text-[9px] uppercase tracking-[0.15em] font-extrabold py-1.5 px-3 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-white" />
                    {offer.badge}
                  </span>

                  {/* Savings Pill */}
                  {hasDiscount && (
                    <span className="absolute top-4 right-4 bg-emerald-600 text-white text-[9px] uppercase tracking-[0.15em] font-extrabold py-1.5 px-3 rounded-full shadow-md flex items-center gap-0.5">
                      <Percent className="w-2.5 h-2.5" />
                      Save {savingsPercent}%
                    </span>
                  )}
                </div>

                {/* Body Details */}
                <div className="p-4 flex-grow flex flex-col justify-between gap-6">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-darkbrown leading-tight group-hover:text-gold transition-colors">
                      {offer.title}
                    </h3>
                    <p className="mt-3 text-xs text-mediumbrown font-sans leading-relaxed text-left">
                      {offer.description}
                    </p>
                  </div>

                  {/* Pricing and Action */}
                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-softbrown/10">
                    <div className="text-left">
                      {hasDiscount && (
                        <span className="text-[10px] text-mediumbrown/60 line-through block font-sans">
                          Original: ${offer.originalPrice}
                        </span>
                      )}
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-[9px] uppercase tracking-wider font-bold text-mediumbrown/60 block self-center">
                          Deal:
                        </span>
                        <span className="font-serif text-xl sm:text-2xl font-black text-gold">
                          ${offer.offerPrice}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onAddOfferToCart(offer)}
                      className="inline-flex items-center gap-1 bg-darkbrown hover:bg-gold text-white text-[10px] font-bold uppercase tracking-[0.2em] py-3 px-5 rounded-full shadow-md transition-all cursor-pointer"
                    >
                      Claim Bundle
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
