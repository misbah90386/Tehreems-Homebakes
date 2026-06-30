import React from "react";
import {
  Cookie,
  Sparkles,
  Palette,
  ShieldCheck,
  PiggyBank,
  Gift,
  Clock,
  HeartHandshake
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Cookie className="w-5 h-5 text-gold" />,
      title: "Homemade Freshness",
      desc: "Baked strictly to order. No frozen bases, no stale crumbs—just warm, oven-fresh goodness.",
      bg: "bg-cream"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-gold" />,
      title: "Premium Ingredients",
      desc: "Made with luxurious Belgian chocolate, organic vanilla beans, and real butter. No compromises.",
      bg: "bg-blush/30"
    },
    {
      icon: <Palette className="w-5 h-5 text-gold" />,
      title: "Custom Designs",
      desc: "Every cake is a unique visual canvas designed around your story, colors, and specific events.",
      bg: "bg-cream"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold" />,
      title: "Hygienic Preparation",
      desc: "Prepared in a pristine, clean, and fully sanitized home studio with the highest safety levels.",
      bg: "bg-blush/30"
    },
    {
      icon: <PiggyBank className="w-5 h-5 text-gold" />,
      title: "Affordable Luxury",
      desc: "High-end bespoke cake artistry priced fairly to fit family milestones and special celebrations.",
      bg: "bg-cream"
    },
    {
      icon: <Gift className="w-5 h-5 text-gold" />,
      title: "Beautiful Presentation",
      desc: "Packaged in elegant custom boxes wrapped in satin ribbons, card tags, and gold linings.",
      bg: "bg-blush/30"
    },
    {
      icon: <Clock className="w-5 h-5 text-gold" />,
      title: "On-Time Delivery",
      desc: "Timely delivery or prompt scheduled pickups to ensure your dessert tables are ready on time.",
      bg: "bg-cream"
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-gold" />,
      title: "Customer Satisfaction",
      desc: "Dedicated individual support, custom sample tastings, and care instructions for every order.",
      bg: "bg-blush/30"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-cream border-t border-softbrown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block">
            Baking Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-darkbrown tracking-tight leading-tight">
            Why Choose Our Studio?
          </h2>
          <div className="w-16 h-0.5 bg-gold/50 mx-auto my-4" />
          <p className="font-sans text-mediumbrown text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            We pour our hearts into every single mix, folding premium materials with creative ideas to give you the ultimate bakery experience.
          </p>
        </div>

        {/* Bento-Inspired Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-blush bg-white hover:border-gold hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon wrapper */}
                <div className={`p-3 rounded-xl w-fit ${reason.bg} mb-5 flex items-center justify-center border border-softbrown/10`}>
                  {reason.icon}
                </div>
                
                <h3 className="font-serif text-base font-bold text-darkbrown">
                  {reason.title}
                </h3>
                <p className="mt-2 text-xs text-mediumbrown font-sans leading-relaxed">
                  {reason.desc}
                </p>
              </div>

              {/* Decorative design highlight */}
              <div className="mt-6 w-8 h-0.5 bg-gold/30 rounded-full group-hover:w-16 transition-all" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
