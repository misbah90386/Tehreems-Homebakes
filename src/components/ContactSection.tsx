import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquareCode,
  CheckCircle,
  Instagram,
  Facebook
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Custom Cake Inquiry",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // reset form
      setFormData({ name: "", email: "", subject: "Custom Cake Inquiry", message: "" });
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <Phone className="w-5 h-5 text-gold" />,
      title: "Call / WhatsApp Us",
      val: "+92 300 1234567",
      link: "tel:+923001234567"
    },
    {
      icon: <Mail className="w-5 h-5 text-gold" />,
      title: "Email Address",
      val: "hello@tehreemshomebakes.com",
      link: "mailto:hello@tehreemshomebakes.com"
    },
    {
      icon: <MapPin className="w-5 h-5 text-gold" />,
      title: "Studio Address",
      val: "House 24, Block D, Phase 5, DHA, Lahore, Pakistan",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="w-5 h-5 text-gold" />,
      title: "Baking Hours",
      val: "Mon - Sat: 10:00 AM - 08:00 PM (Sunday Deliveries Only)",
      link: null
    }
  ];

  const socialHandles = [
    { label: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com", color: "hover:bg-gold" },
    { label: "Facebook", icon: <Facebook className="w-5 h-5" />, url: "https://facebook.com", color: "hover:bg-gold" },
    {
      label: "TikTok",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10V9a4 4 0 0 0-4-4h-.5a1 1 0 0 0 0 2h.5a2 2 0 0 1 2 2v2a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4V2z" />
        </svg>
      ),
      url: "https://tiktok.com",
      color: "hover:bg-gold"
    }
  ];

  const getWhatsAppMessageLink = () => {
    const greeting = encodeURIComponent(
      "Hi Tehreem! I visited your beautiful website and would love to ask about your delicious cakes and availability."
    );
    return `https://wa.me/923001234567?text=${greeting}`;
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-t border-softbrown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-darkbrown tracking-tight leading-tight">
            Connect With Our Baking Studio
          </h2>
          <div className="w-16 h-0.5 bg-gold/50 mx-auto my-4" />
          <p className="font-sans text-mediumbrown text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Have a custom design question, flavor request, or general inquiry? Fill our secure form, drop by our DHA Lahore studio, or text Tehreem directly on WhatsApp for an instant response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="bg-cream rounded-3xl p-8 border border-blush shadow-sm flex-grow flex flex-col justify-between gap-8">
              
              <div className="space-y-6 text-left">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-darkbrown">
                  Studio Information
                </h3>
                
                <div className="space-y-5">
                  {contactDetails.map((detail, idx) => (
                    <div key={idx} className="flex gap-4 items-start text-left">
                      <div className="p-3 bg-white border border-blush rounded-xl flex items-center justify-center shrink-0">
                        {detail.icon}
                      </div>
                      <div>
                        <h4 className="text-[9px] uppercase tracking-wider font-extrabold text-mediumbrown font-sans">
                          {detail.title}
                        </h4>
                        {detail.link ? (
                          <a
                            href={detail.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs sm:text-sm font-sans font-semibold text-darkbrown hover:text-gold transition-colors mt-0.5 block"
                          >
                            {detail.val}
                          </a>
                        ) : (
                          <span className="text-xs sm:text-sm font-sans font-semibold text-darkbrown mt-0.5 block">
                            {detail.val}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Channels and WhatsApp Direct Trigger */}
              <div className="space-y-6 pt-6 border-t border-softbrown/10 text-left">
                <div>
                  <h4 className="text-[9px] uppercase tracking-wider font-extrabold text-mediumbrown font-sans mb-3 text-left">
                    Follow Our Decorating Journey
                  </h4>
                  <div className="flex items-center gap-3">
                    {socialHandles.map((soc) => (
                      <a
                        key={soc.label}
                        href={soc.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-3 rounded-xl bg-white border border-blush text-darkbrown hover:text-white transition-all duration-300 ${soc.color} cursor-pointer`}
                        title={soc.label}
                      >
                        {soc.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={getWhatsAppMessageLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-bold uppercase tracking-widest py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
                  >
                    <MessageSquareCode className="w-4 h-4 animate-bounce" />
                    Chat with Tehreem on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFF8F2] rounded-3xl p-8 border border-blush shadow-sm h-full">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-inner animate-float">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-darkbrown">
                      Message Received!
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-mediumbrown font-sans max-w-sm leading-relaxed">
                      Thank you for contacting Tehreems Homebakes. Tehreem will review your query and respond via email or WhatsApp within the next few hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 bg-darkbrown hover:bg-gold text-white font-sans text-xs font-bold uppercase tracking-widest py-3 px-6 rounded-full shadow-md cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left h-full flex flex-col justify-between"
                  >
                    <div className="space-y-5">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-darkbrown">
                        Send a Message
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-mediumbrown mb-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Sarah Jenkins"
                            className="w-full text-xs bg-white border border-blush rounded-xl py-3.5 px-4 text-darkbrown focus:outline-none focus:ring-1 focus:ring-gold focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-mediumbrown mb-2">
                            Your Email
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="sarah@example.com"
                            className="w-full text-xs bg-white border border-blush rounded-xl py-3.5 px-4 text-darkbrown focus:outline-none focus:ring-1 focus:ring-gold focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-mediumbrown mb-2">
                          Subject / Occasion
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full text-xs bg-white border border-blush rounded-xl py-3.5 px-4 text-darkbrown focus:outline-none focus:ring-1 focus:ring-gold focus:border-transparent transition-all"
                        >
                          <option value="Custom Cake Inquiry">Custom Celebration Cake Design</option>
                          <option value="Wedding Order Inquiry">Wedding Consultation Package</option>
                          <option value="Bulk Order inquiry">Bulk Dessert Box Order</option>
                          <option value="Dietary Options query">Dietary Restrictions Options</option>
                          <option value="General Feedback">Praise & Sweet Feedback</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-mediumbrown mb-2">
                          Your Inquiry Notes
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us what you'd like us to bake, dates required, flavors preferred..."
                          className="w-full text-xs bg-white border border-blush rounded-xl py-3.5 px-4 text-darkbrown focus:outline-none focus:ring-1 focus:ring-gold focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-6 bg-darkbrown hover:bg-gold disabled:bg-neutral-300 text-white font-sans text-xs font-bold uppercase tracking-widest py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Inquiry...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Beautiful Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Beautiful styled visual map block representing the DHA Lahore studio locality */}
        <div className="mt-16 bg-cream rounded-3xl border border-blush overflow-hidden shadow-sm aspect-[16/6] min-h-[250px] relative">
          <div className="absolute inset-0 bg-cream/60 opacity-60">
            {/* Soft cream-pastel mock styled map grids */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="border-r border-b border-blush/40" />
              ))}
            </div>
            
            {/* Elegant streets representation */}
            <div className="absolute top-[35%] left-0 w-full h-8 bg-white shadow-inner -rotate-6" />
            <div className="absolute top-[20%] left-[45%] w-8 h-full bg-white shadow-inner rotate-12" />
            <div className="absolute top-[60%] left-0 w-full h-12 bg-white shadow-inner rotate-3" />
            
            {/* Green areas representation */}
            <div className="absolute top-[10%] left-[10%] w-32 h-16 bg-blush/20 rounded-full blur-xl" />
            <div className="absolute bottom-[10%] right-[15%] w-44 h-20 bg-blush/20 rounded-full blur-xl" />
          </div>

          {/* Map details block Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
            <div className="p-3.5 bg-gold text-white rounded-full shadow-lg animate-float">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg font-bold text-darkbrown mt-3">
              Tehreems Homebakes Studio
            </h4>
            <p className="text-xs text-mediumbrown font-sans mt-1 max-w-sm leading-relaxed">
              Phase 5, DHA, Lahore, Pakistan. (Safe, residential pickups in a sanitised environment)
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-4 bg-white hover:bg-cream text-darkbrown border border-blush font-sans text-[9px] font-bold uppercase tracking-widest py-2 px-4 rounded-full shadow-sm cursor-pointer"
            >
              Get Directions on Map
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
