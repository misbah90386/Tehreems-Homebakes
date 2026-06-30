import React from "react";
import { Search, PenTool, CheckCircle, Truck, ChevronRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-5 h-5 text-gold" />,
      stepNum: "01",
      title: "Browse Menu",
      desc: "Explore our beautiful range of cakes, cupcakes, brownies, and pastries or use the search bar."
    },
    {
      icon: <PenTool className="w-5 h-5 text-gold" />,
      stepNum: "02",
      title: "Customize",
      desc: "Select your desired filling flavor and write custom messages to go on top of your treats."
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-gold" />,
      stepNum: "03",
      title: "Confirm & Secure",
      desc: "Submit your order to compile a receipt, then easily checkout via WhatsApp with Tehreem."
    },
    {
      icon: <Truck className="w-5 h-5 text-gold" />,
      stepNum: "04",
      title: "Doorstep Delivery",
      desc: "We handcraft your items fresh and deliver them safely inside protective temperature-controlled boxes."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-softbrown/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block">
            Easy Order Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-darkbrown tracking-tight leading-tight">
            How Ordering Works
          </h2>
          <div className="w-16 h-0.5 bg-gold/50 mx-auto my-4" />
          <p className="font-sans text-mediumbrown text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Placing an order at Tehreems Homebakes is simple, reliable, and entirely customized around you. Follow these four effortless steps:
          </p>
        </div>

        {/* Steps Road */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              
              {/* Step bubble and number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-cream border border-blush flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-gold transition-all duration-300">
                  {step.icon}
                </div>
                <span className="absolute -bottom-1 -right-1 bg-darkbrown text-white font-sans text-[9px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                  {step.stepNum}
                </span>
              </div>

              {/* Step info */}
              <h3 className="font-serif text-base font-bold text-darkbrown">
                {step.title}
              </h3>
              <p className="mt-2 text-xs text-mediumbrown font-sans leading-relaxed max-w-xs">
                {step.desc}
              </p>

              {/* Connecting arrow for desktop, except last item */}
              {idx < 3 && (
                <div className="hidden md:block absolute top-8 left-[70%] w-1/2 text-gold/40">
                  <ChevronRight className="w-4 h-4 mx-auto" />
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
