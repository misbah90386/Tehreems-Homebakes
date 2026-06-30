import React from "react";
import { Heart, Sparkles, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-lightcream border-t border-softbrown/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Images Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600"
                alt="Tehreem crafting a cake in her kitchen"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-serif text-2xl font-bold block">Tehreem Ahmed</span>
                <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold font-bold">Founder & Head Pastry Chef</span>
              </div>
            </div>

            {/* Accent Floating Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blush/40 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cream rounded-full blur-2xl z-0" />

            {/* Decorative Card */}
            <div className="absolute -bottom-4 -left-4 z-20 bg-gold text-white p-5 rounded-2xl shadow-xl flex items-center gap-3.5 max-w-xs border border-white/20">
              <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 fill-current text-white animate-pulse" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold block leading-none">100% Homemade</span>
                <span className="text-[10px] font-sans uppercase tracking-wider text-cream block mt-1">Baked with passion and pure butter</span>
              </div>
            </div>
          </div>

          {/* Story Column */}
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block mb-3">
              Our Heartfelt Story
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-darkbrown tracking-tight leading-tight">
              Bespoke Desserts Infused with Passion & Luxury
            </h2>
            <div className="w-16 h-0.5 bg-gold/50 my-5" />

            <div className="mt-6 space-y-6 text-mediumbrown font-sans text-xs sm:text-sm leading-relaxed text-left">
              <p>
                Welcome to <strong>Tehreems Homebakes</strong>, where baking isn't just a daily chore—it is an art form, a creative escape, and an expression of love. Founded in our home studio inside DHA Lahore, we specialize in high-end, bespoke baking created to elevate your celebrations from ordinary to unforgettable.
              </p>
              <p>
                Our philosophy is simple: we believe that a cake should taste even more magnificent than it looks. We never compromise on ingredients. Every layer is built using rich Belgian chocolate, premium dairy butter, real Madagascar vanilla beans, and fresh local fruits. We skip the chemicals, artificial preservatives, and heavy powders found in industrial bakeries to deliver that genuine, warm, comforting taste of homemade luxury.
              </p>
              <p className="border-l-4 border-gold pl-4 italic text-darkbrown font-serif bg-cream/50 py-3 rounded-r-xl">
                "Baking is a beautiful thread that binds families, friends, and sweet memories. When you cut into a Tehreems Homebakes creation, you are tasting days of fine craftsmanship, meticulous design, and pure, heartfelt passion."
              </p>
              <p>
                From gorgeous multi-tiered wedding cakes featuring delicate custom sugar flowers to quick weekend brownie cravings and thoughtfully curated holiday gift boxes, we carefully handcraft each order to match your exact theme, tastes, and dietary requests. Let us make your next celebration sweet and deeply memorable!
              </p>
            </div>

            {/* Quick stats / Highlights */}
            <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-softbrown/10">
              <div>
                <span className="font-serif text-2xl sm:text-4.5xl font-bold text-darkbrown block">
                  3,000+
                </span>
                <span className="text-[10px] text-mediumbrown uppercase tracking-wider font-bold mt-1 block">
                  Cakes Hand-Baked
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-4.5xl font-bold text-darkbrown block">
                  100%
                </span>
                <span className="text-[10px] text-mediumbrown uppercase tracking-wider font-bold mt-1 block">
                  Premium Ingredients
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-4.5xl font-bold text-darkbrown block">
                  5.0 ★
                </span>
                <span className="text-[10px] text-mediumbrown uppercase tracking-wider font-bold mt-1 block">
                  Customer Rating
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
