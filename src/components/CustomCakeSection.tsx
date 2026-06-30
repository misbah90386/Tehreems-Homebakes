import React, { useState } from "react";
import { Sparkles, Calendar, User, Phone, Check, ChevronRight, ChevronLeft, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CustomCakeSectionProps {
  isModalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

export default function CustomCakeSection({ isModalOpen, setModalOpen }: CustomCakeSectionProps) {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  // Wizard form state
  const [formData, setFormData] = useState({
    tiers: "1 Tier",
    size: "8 Inch (approx 1.5kg)",
    flavor: "Belgian Dark Chocolate",
    frosting: "Textured Buttercream",
    theme: "Pastel & Floral Elegance",
    deliveryDate: "",
    notes: "",
    name: "",
    contact: "",
  });

  const cakeStyles = [
    { title: "Birthday Cakes", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400" },
    { title: "Wedding Cakes", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=400" },
    { title: "Anniversary Cakes", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=400" },
    { title: "Baby Shower Cakes", image: "https://images.unsplash.com/photo-1519340330055-24fa3f6db24c?auto=format&fit=crop&q=80&w=400" },
    { title: "Graduation Cakes", image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=400" },
    { title: "Kids Theme Cakes", image: "https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&q=80&w=400" },
    { title: "Floral Cakes", image: "/src/assets/images/custom_luxury_cake_1782831537497.jpg" },
    { title: "Luxury Cakes", image: "https://images.unsplash.com/photo-1525146337625-f9480c51b0a3?auto=format&fit=crop&q=80&w=400" }
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleClose = () => {
    setModalOpen(false);
    setStep(1);
    setSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  // Generate WhatsApp inquiry text
  const getWhatsAppLink = () => {
    const text = `Hi Tehreem! I'd like to request a Custom Cake quote from Tehreems Homebakes:\n\n` +
      `🍰 Tiers: ${formData.tiers}\n` +
      `📏 Size: ${formData.size}\n` +
      `🍓 Flavor: ${formData.flavor}\n` +
      `🧁 Frosting: ${formData.frosting}\n` +
      `🎨 Theme style: ${formData.theme}\n` +
      `📅 Event Date: ${formData.deliveryDate}\n` +
      `✏️ Special instructions: ${formData.notes || "None"}\n\n` +
      `👤 Customer Name: ${formData.name}\n` +
      `📞 Contact: ${formData.contact}`;
    
    return `https://wa.me/923001234567?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="custom-cakes-section" className="py-24 bg-white border-t border-softbrown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block">
              Tailor-Made Elegance
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-darkbrown tracking-tight leading-tight">
              Bring Your Celebration Cake to Life
            </h2>
            <div className="w-16 h-0.5 bg-gold/50 my-3" />
            <p className="font-sans text-mediumbrown text-xs sm:text-sm leading-relaxed text-left">
              At Tehreems Homebakes, we believe your cakes should reflect your personality, style, and culinary wishes. Whether you need a towering floral wedding bake, a whimsical kids' safari theme, or a modern minimalist gold-leaf dessert, Tehreem handcrafts your design down to the finest chocolate leaf.
            </p>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-gold hover:bg-gold/90 text-white font-sans text-[11px] uppercase tracking-[0.2em] font-bold py-4 px-10 rounded-full shadow-md transition-all cursor-pointer inline-flex items-center gap-2 border border-softbrown/20"
            >
              <Sparkles className="w-4 h-4 animate-spin" />
              Request Your Custom Cake
            </button>
          </div>
        </div>

        {/* Cake Styles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {cakeStyles.map((style, idx) => (
            <div
              key={idx}
              onClick={() => {
                setFormData(prev => ({ ...prev, theme: style.title }));
                setModalOpen(true);
              }}
              className="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-lg transition-all duration-300 border border-blush cursor-pointer"
            >
              <img
                src={style.image}
                alt={style.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/85 via-darkbrown/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[9px] uppercase tracking-[0.2em] text-blush font-sans font-bold block mb-1">
                  Style Template
                </span>
                <h3 className="font-serif text-sm sm:text-base font-bold">
                  {style.title}
                </h3>
              </div>
              
              {/* Plus indicator on hover */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-darkbrown flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-md">
                <ChevronRight className="w-4 h-4 text-gold" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Cake Request Wizard Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative bg-[#FFF8F2] rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-blush z-50"
            >
              {/* Header */}
              <div className="bg-darkbrown text-white p-6 sm:p-8 flex items-center justify-between border-b border-softbrown/20">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold block">
                    Custom Quote Builder
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">
                    Design Your Masterpiece
                  </h3>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Bar */}
              {!success && (
                <div className="h-1 w-full bg-blush/30 flex">
                  <div
                    className="bg-gold h-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              )}

              {/* Wizard Content */}
              <div className="p-6 sm:p-8">
                {success ? (
                  /* Success Screen */
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                      <Check className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-darkbrown">
                      Bake Request Crafted!
                    </h4>
                    <p className="mt-3 text-mediumbrown font-sans text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                      We have compiled your custom cake design sheet. To secure your slot and confirm pricing directly with Tehreem, click the button below to send your request instantly to our studio.
                    </p>

                    {/* Proposal Recap */}
                    <div className="my-6 bg-white border border-blush rounded-xl p-5 text-left max-w-sm mx-auto text-xs space-y-1.5 text-darkbrown">
                      <p><strong>Name:</strong> {formData.name}</p>
                      <p><strong>Event Date:</strong> {formData.deliveryDate}</p>
                      <p><strong>Cake Setup:</strong> {formData.tiers} ({formData.size})</p>
                      <p><strong>Flavor Choice:</strong> {formData.flavor}</p>
                      <p><strong>Covering Style:</strong> {formData.frosting}</p>
                      <p><strong>Theme:</strong> {formData.theme}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-gold hover:bg-gold/90 text-white font-sans text-[11px] uppercase tracking-[0.2em] font-bold py-3 px-8 rounded-full shadow-md transition-colors w-full sm:w-auto text-center"
                      >
                        Submit to WhatsApp
                      </a>
                      <button
                        onClick={handleClose}
                        className="text-mediumbrown hover:text-gold text-[10px] font-bold uppercase tracking-[0.15em] px-4"
                      >
                        Close Wizard
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Form Steps */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Step 1: Dimensions & Layout */}
                    {step === 1 && (
                      <div className="space-y-5 text-left">
                        <h4 className="font-serif text-lg font-bold text-darkbrown">
                          Step 1: Layers & Tiers Sizing
                        </h4>
                        
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider font-bold text-mediumbrown mb-2">
                            Number of Tiers
                          </label>
                          <div className="grid grid-cols-3 gap-3">
                            {["1 Tier", "2 Tiers", "3+ Tiers"].map((t) => (
                              <button
                                key={t}
                                type="button"
                                onClick={() => setFormData({ ...formData, tiers: t })}
                                className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                                  formData.tiers === t
                                    ? "bg-darkbrown text-white border-darkbrown shadow-sm"
                                    : "bg-white text-darkbrown border-blush hover:border-gold hover:text-gold"
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-wider font-bold text-mediumbrown mb-2">
                            Base Cake Sizing
                          </label>
                          <select
                            value={formData.size}
                            onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                            className="w-full text-xs bg-white border border-blush rounded-xl py-3 px-4 text-darkbrown focus:outline-none focus:ring-1 focus:ring-gold"
                          >
                            <option value="6 Inch (approx 1kg)">6 Inch (Serves 6-8 people, ~1kg)</option>
                            <option value="8 Inch (approx 1.5kg)">8 Inch (Serves 12-15 people, ~1.5kg)</option>
                            <option value="10 Inch (approx 2.5kg)">10 Inch (Serves 20-25 people, ~2.5kg)</option>
                            <option value="Tiered Deluxe (Custom sizing)">Tiered Deluxe Combination (Custom sizing)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-wider font-bold text-mediumbrown mb-2">
                            Aesthetic Style Theme
                          </label>
                          <input
                            type="text"
                            value={formData.theme}
                            onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                            className="w-full text-xs bg-white border border-blush rounded-xl py-3 px-4 text-darkbrown focus:outline-none focus:ring-1 focus:ring-gold"
                            placeholder="e.g. Modern Pink Safari, Rose Gold Luxury, Drip Caramel..."
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 2: Flavors & Frosting */}
                    {step === 2 && (
                      <div className="space-y-5 text-left">
                        <h4 className="font-serif text-lg font-bold text-darkbrown">
                          Step 2: Taste and Texture Choices
                        </h4>

                        <div>
                          <label className="block text-[10px] uppercase tracking-wider font-bold text-mediumbrown mb-2">
                            Cake Flavor Filling
                          </label>
                          <select
                            value={formData.flavor}
                            onChange={(e) => setFormData({ ...formData, flavor: e.target.value })}
                            className="w-full text-xs bg-white border border-blush rounded-xl py-3 px-4 text-darkbrown focus:outline-none focus:ring-1 focus:ring-gold"
                          >
                            <option value="Belgian Dark Chocolate Truffle">Belgian Dark Chocolate Truffle</option>
                            <option value="Madagascar Vanilla Custard">Madagascar Vanilla Custard</option>
                            <option value="Velvety Red Velvet Cheese">Velvety Red Velvet Cheese</option>
                            <option value="Salted Caramel Roasted Pecan">Salted Caramel Roasted Pecan</option>
                            <option value="Lemon Elderflower Reduction">Lemon Elderflower Reduction</option>
                            <option value="Custom Flavor combination">Other / Custom flavor combination</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-wider font-bold text-mediumbrown mb-2">
                            Frosting Coating Style
                          </label>
                          <select
                            value={formData.frosting}
                            onChange={(e) => setFormData({ ...formData, frosting: e.target.value })}
                            className="w-full text-xs bg-white border border-blush rounded-xl py-3 px-4 text-darkbrown focus:outline-none focus:ring-1 focus:ring-gold"
                          >
                            <option value="Textured Buttercream">Textured Buttercream (Smooth, high-end style)</option>
                            <option value="Semi-Naked Buttercream">Semi-Naked (Rustic, elegant look)</option>
                            <option value="Satin Fondant Wraps">Satin Fondant Wraps (Sculpted design pieces)</option>
                            <option value="Ganache Coating">Ganache Coating (Deep, rich chocolate outer)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-wider font-bold text-mediumbrown mb-2">
                            Design Description & Reference Notes
                          </label>
                          <textarea
                            rows={3}
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            placeholder="Write details about names, colors, inscriptions, or theme details..."
                            className="w-full text-xs bg-white border border-blush rounded-xl py-3 px-4 text-darkbrown focus:outline-none focus:ring-1 focus:ring-gold"
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 3: Logistics & Contact */}
                    {step === 3 && (
                      <div className="space-y-5 text-left">
                        <h4 className="font-serif text-lg font-bold text-darkbrown">
                          Step 3: Contact and Logistics
                        </h4>

                        <div>
                          <label className="block text-[10px] uppercase tracking-wider font-bold text-mediumbrown mb-2">
                            Event/Delivery Date
                          </label>
                          <div className="relative">
                            <input
                              type="date"
                              required
                              value={formData.deliveryDate}
                              onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                              className="w-full text-xs bg-white border border-blush rounded-xl py-3 px-4 text-darkbrown focus:outline-none focus:ring-1 focus:ring-gold"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                          <div>
                            <label className="block text-[10px] uppercase tracking-wider font-bold text-mediumbrown mb-2">
                              Your Full Name
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Sarah Jenkins"
                              className="w-full text-xs bg-white border border-blush rounded-xl py-3 px-4 text-darkbrown focus:outline-none focus:ring-1 focus:ring-gold"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] uppercase tracking-wider font-bold text-mediumbrown mb-2">
                              Phone / WhatsApp Number
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.contact}
                              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                              placeholder="+92 300 1234567"
                              className="w-full text-xs bg-white border border-blush rounded-xl py-3 px-4 text-darkbrown focus:outline-none focus:ring-1 focus:ring-gold"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Controls Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-blush/60">
                      <button
                        type="button"
                        onClick={handlePrev}
                        disabled={step === 1}
                        className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.15em] py-2.5 px-4 rounded-full transition-colors ${
                          step === 1 ? "text-neutral-300 cursor-not-allowed" : "text-mediumbrown hover:bg-cream"
                        }`}
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Back
                      </button>

                      {step < 3 ? (
                        <button
                          type="button"
                          onClick={handleNext}
                          className="bg-darkbrown hover:bg-gold text-white inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] py-3 px-6 rounded-full shadow-md transition-all cursor-pointer"
                        >
                          Next Step
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="bg-gold hover:bg-gold/90 text-white inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] py-3 px-8 rounded-full shadow-md transition-all cursor-pointer"
                        >
                          Submit Setup
                          <Check className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
