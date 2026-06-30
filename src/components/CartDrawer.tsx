import React, { useState } from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, Truck, Calendar, ChevronRight, MessageSquareCode, Sparkles } from "lucide-react";
import { CartItem } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQty: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem
}: CartDrawerProps) {
  const [deliveryType, setDeliveryType] = useState<"pickup" | "delivery">("delivery");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryNotes, setDeliveryNotes] = useState("");
  const [customerName, setCustomerName] = useState("");

  const subtotal = cartItems.reduce((acc, item) => {
    const price = "startingPrice" in item.product ? item.product.startingPrice : item.product.offerPrice;
    return acc + price * item.quantity;
  }, 0);

  const deliveryCharge = deliveryType === "delivery" ? 10 : 0;
  const total = subtotal + deliveryCharge;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    // Generate WhatsApp text
    let text = `Hi Tehreem! I visited Tehreems Homebakes website and would love to place a bakery order:\n\n` +
      `👤 Name: ${customerName || "Customer"}\n` +
      `📅 Fulfillment Date: ${deliveryDate || "Not Specified"}\n` +
      `🚚 Option: ${deliveryType === "delivery" ? "Doorstep Delivery (DHA Lahore)" : "Self-Pickup from Studio"}\n`;

    if (deliveryNotes.trim()) {
      text += `📝 Notes: ${deliveryNotes}\n`;
    }

    text += `\n🛒 Order Items:\n`;

    cartItems.forEach((item, idx) => {
      const price = "startingPrice" in item.product ? item.product.startingPrice : item.product.offerPrice;
      const itemName = "name" in item.product ? item.product.name : item.product.title;
      text += `• ${item.quantity}x ${itemName} ($${price} each)`;
      if (item.selectedFlavor) {
        text += `\n  Flavor: ${item.selectedFlavor}`;
      }
      if (item.customMessage) {
        text += `\n  Writing: "${item.customMessage}"`;
      }
      text += `\n`;
    });

    text += `\n💳 Subtotal: $${subtotal}\n`;
    if (deliveryType === "delivery") {
      text += `🚚 Temp-Controlled Delivery: $${deliveryCharge}\n`;
    }
    text += `💰 Total Due: $${total}\n\n` +
      `Can you please confirm slot availability and provide bank transfer coordinates? Thank you!`;

    const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden text-left">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
          />

          {/* Drawer Body */}
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-cream flex flex-col shadow-2xl border-l border-blush"
            >
              {/* Header */}
              <div className="bg-darkbrown text-white p-6 flex items-center justify-between border-b border-softbrown/20">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-gold" />
                  <span className="font-serif text-lg font-bold">Your Active Order</span>
                  <span className="text-xs bg-gold text-white font-bold px-2 py-0.5 rounded-full border border-white/10">
                    {cartItems.length}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {cartItems.length > 0 ? (
                  <>
                    <div className="space-y-4">
                      {cartItems.map((item, idx) => {
                        const price = "startingPrice" in item.product ? item.product.startingPrice : item.product.offerPrice;
                        const itemName = "name" in item.product ? item.product.name : item.product.title;
                        return (
                          <div
                            key={idx}
                            className="bg-white rounded-2xl p-4 border border-blush shadow-sm flex gap-3 relative group"
                          >
                            {/* Product Image */}
                            <div className="w-16 h-16 rounded-xl overflow-hidden bg-cream shrink-0">
                              <img
                                src={item.product.image}
                                alt={itemName}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Details */}
                            <div className="flex-grow flex flex-col justify-between pr-4">
                              <div>
                                <h4 className="font-serif text-sm font-bold text-darkbrown leading-tight">
                                  {itemName}
                                </h4>
                                {item.selectedFlavor && (
                                  <span className="text-[10px] text-mediumbrown font-sans block mt-0.5">
                                    Flavor: <strong className="text-darkbrown">{item.selectedFlavor}</strong>
                                  </span>
                                )}
                                {item.customMessage && (
                                  <span className="text-[10px] text-white bg-gold rounded px-1.5 py-0.5 font-sans mt-1.5 inline-block">
                                    Writing: "{item.customMessage}"
                                  </span>
                                )}
                              </div>

                              {/* Qty Adjustment Controls */}
                              <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-2 border border-blush rounded-lg p-1 bg-cream">
                                  <button
                                    onClick={() => onUpdateQty(idx, item.quantity - 1)}
                                    className="p-1 rounded bg-white text-darkbrown hover:text-gold transition-colors"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="text-xs font-bold font-sans px-2 min-w-[15px] text-center text-darkbrown">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => onUpdateQty(idx, item.quantity + 1)}
                                    className="p-1 rounded bg-white text-darkbrown hover:text-gold transition-colors"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>

                                <span className="font-serif text-sm font-bold text-gold">
                                  ${price * item.quantity}
                                </span>
                              </div>
                            </div>

                            {/* Remove Trigger */}
                            <button
                              onClick={() => onRemoveItem(idx)}
                              className="absolute top-4 right-4 text-neutral-300 hover:text-rose-500 transition-colors p-1"
                              title="Delete Item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    {/* Delivery Preferences Form */}
                    <form onSubmit={handleCheckout} className="space-y-4 pt-6 border-t border-blush">
                      <h4 className="font-serif text-sm font-bold text-darkbrown">
                        Delivery & Pickup Preferences
                      </h4>

                      {/* Name input */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider font-bold text-mediumbrown mb-1.5">
                          Your Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="Sarah Jenkins"
                          className="w-full text-xs bg-white border border-blush rounded-lg p-2.5 text-darkbrown focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>

                      {/* Pick option */}
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setDeliveryType("delivery")}
                          className={`p-3 rounded-xl border text-[10px] font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            deliveryType === "delivery"
                              ? "bg-darkbrown text-white border-darkbrown shadow-sm"
                              : "bg-white text-darkbrown border-blush hover:border-gold"
                          }`}
                        >
                          <Truck className="w-4 h-4" />
                          Delivery
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeliveryType("pickup")}
                          className={`p-3 rounded-xl border text-[10px] font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            deliveryType === "pickup"
                              ? "bg-darkbrown text-white border-darkbrown shadow-sm"
                              : "bg-white text-darkbrown border-blush hover:border-gold"
                          }`}
                        >
                          <Calendar className="w-4 h-4" />
                          Self-Pickup
                        </button>
                      </div>

                      {/* Delivery Date */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider font-bold text-mediumbrown mb-1.5">
                          Preferred Pickup / Delivery Date
                        </label>
                        <input
                          type="date"
                          required
                          value={deliveryDate}
                          onChange={(e) => setDeliveryDate(e.target.value)}
                          className="w-full text-xs bg-white border border-blush rounded-lg p-2.5 text-darkbrown focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>

                      {/* Extra Instructions */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider font-bold text-mediumbrown mb-1.5">
                          Global Special Instructions (Optional)
                        </label>
                        <textarea
                          rows={2}
                          value={deliveryNotes}
                          onChange={(e) => setDeliveryNotes(e.target.value)}
                          placeholder="e.g. Ring doorbell twice / deliver after 4pm..."
                          className="w-full text-xs bg-white border border-blush rounded-lg p-2.5 text-darkbrown placeholder-mediumbrown/40 focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>
                    </form>
                  </>
                ) : (
                  /* Empty State */
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 bg-blush/40 rounded-full flex items-center justify-center text-darkbrown mb-6 shadow-inner">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-darkbrown">Your basket is empty</h4>
                    <p className="mt-2 text-xs text-mediumbrown font-sans max-w-[200px] leading-relaxed">
                      Add delicious cupcakes, cookies, or cakes from our menu to begin your order.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-6 bg-darkbrown hover:bg-gold text-white font-sans text-xs font-bold uppercase tracking-widest py-3 px-6 rounded-full shadow-md"
                    >
                      Start Browsing
                    </button>
                  </div>
                )}
              </div>

              {/* Checkout pricing panel footer */}
              {cartItems.length > 0 && (
                <div className="bg-white border-t border-blush p-6 space-y-4 shadow-[0_-4px_12px_rgba(0,0,0,0.02)]">
                  <div className="space-y-2 text-xs text-mediumbrown font-sans">
                    <div className="flex justify-between">
                      <span>Bakes Subtotal:</span>
                      <span className="font-bold text-darkbrown">${subtotal}</span>
                    </div>
                    {deliveryType === "delivery" && (
                      <div className="flex justify-between">
                        <span>Temperature-Controlled Delivery:</span>
                        <span className="font-bold text-darkbrown">${deliveryCharge}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-base font-serif font-bold text-darkbrown pt-2 border-t border-softbrown/10">
                      <span>Total Invoice:</span>
                      <span className="text-gold">${total}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={!customerName || !deliveryDate}
                    className="w-full bg-gold hover:bg-gold/90 disabled:bg-neutral-300 text-white font-sans text-[11px] uppercase tracking-[0.15em] font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquareCode className="w-4 h-4" />
                    Send Order to WhatsApp
                  </button>
                  
                  {!customerName || !deliveryDate ? (
                    <span className="text-[9px] text-mediumbrown/60 block text-center font-sans">
                      Please enter your Name and Delivery Date to checkout.
                    </span>
                  ) : null}
                </div>
              )}

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
