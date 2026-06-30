import React, { useState } from "react";
import { Search, ShoppingBag, Eye, Heart, Sparkles } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "../data";
import { Product } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface ProductSectionProps {
  onAddToCart: (product: Product, flavor: string, customMessage: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function ProductSection({
  onAddToCart,
  searchQuery,
  setSearchQuery
}: ProductSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedFlavors, setSelectedFlavors] = useState<{ [productId: string]: string }>({});
  const [customMessages, setCustomMessages] = useState<{ [productId: string]: string }>({});
  const [favorites, setFavorites] = useState<string[]>([]);

  // Filter products based on search and category
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.categoryId === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleFlavorChange = (productId: string, flavor: string) => {
    setSelectedFlavors((prev) => ({ ...prev, [productId]: flavor }));
  };

  const handleMessageChange = (productId: string, msg: string) => {
    setCustomMessages((prev) => ({ ...prev, [productId]: msg }));
  };

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const handleAddClick = (product: Product) => {
    const flavor = selectedFlavors[product.id] || (product.flavors && product.flavors[0]) || "";
    const msg = customMessages[product.id] || "";
    onAddToCart(product, flavor, msg);
    
    // Clear message state for this product after adding to let user write a new one
    setCustomMessages((prev) => ({ ...prev, [product.id]: "" }));
  };

  return (
    <section id="menu" className="py-24 bg-cream border-t border-softbrown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block">
            Handcrafted Treasures
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-darkbrown tracking-tight leading-tight">
            Our Signature Creations
          </h2>
          <div className="w-16 h-0.5 bg-gold/50 mx-auto my-4" />
          <p className="font-sans text-mediumbrown text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Every cake, cupcake, and pastry is custom-crafted from scratch inside our studio, ensuring incredible freshness, luxurious taste, and magnificent presentation.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="mb-14 flex flex-col gap-6">
          {/* Mobile Search Input */}
          <div className="sm:hidden relative">
            <input
              type="text"
              placeholder="Search baked items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 text-xs rounded-xl border border-blush bg-white text-darkbrown focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <Search className="w-4 h-4 text-mediumbrown/60 absolute left-3 top-3.5" />
          </div>

          {/* Categories Pill Horizontal Scroller */}
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blush scrollbar-track-transparent justify-start sm:justify-center">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold cursor-pointer whitespace-nowrap transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-darkbrown text-white shadow-sm border border-darkbrown"
                  : "bg-white text-darkbrown border border-blush hover:border-gold hover:text-gold"
              }`}
            >
              All Delicacies
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold cursor-pointer whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-darkbrown text-white shadow-sm border border-darkbrown"
                    : "bg-white text-darkbrown border border-blush hover:border-gold hover:text-gold"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredProducts.map((product) => {
                const currentFlavor = selectedFlavors[product.id] || (product.flavors && product.flavors[0]) || "";
                const isFavorite = favorites.includes(product.id);

                return (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between border border-blush p-4"
                  >
                    {/* Product Image Section */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-cream shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-darkbrown/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        {product.popular && (
                          <span className="flex items-center gap-1 bg-gold text-white text-[9px] uppercase tracking-[0.15em] font-bold px-2.5 py-1 rounded-full shadow-md">
                            <Sparkles className="w-3 h-3" />
                            Popular Choice
                          </span>
                        )}
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className={`absolute top-3 right-3 p-2 rounded-full shadow-md backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                          isFavorite
                            ? "bg-rose-500 text-white hover:scale-110"
                            : "bg-white/80 text-darkbrown hover:text-rose-500 hover:bg-white"
                        }`}
                        aria-label="Add to Favorites"
                      >
                        <Heart className="w-3.5 h-3.5 fill-current" />
                      </button>
                    </div>

                    {/* Product Body */}
                    <div className="pt-5 flex-grow flex flex-col justify-between gap-4">
                      <div>
                        {/* Title & Starting Price */}
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-base sm:text-lg font-bold text-darkbrown tracking-tight leading-tight group-hover:text-gold transition-colors">
                            {product.name}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="mt-2 text-xs text-mediumbrown font-sans leading-relaxed line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      {/* Customization Details (Flavors + Custom Message) */}
                      <div className="space-y-3 bg-cream/60 p-3 rounded-xl border border-blush/40">
                        {/* Flavor dropdown if available */}
                        {product.flavors && product.flavors.length > 0 && (
                          <div>
                            <label className="block text-[9px] uppercase tracking-wider font-bold text-mediumbrown mb-1">
                              Select Flavor:
                            </label>
                            <select
                              value={currentFlavor}
                              onChange={(e) => handleFlavorChange(product.id, e.target.value)}
                              className="w-full text-[11px] bg-white border border-blush/60 rounded-md py-1 px-2 text-darkbrown focus:outline-none focus:ring-1 focus:ring-gold"
                            >
                              {product.flavors.map((fl) => (
                                <option key={fl} value={fl}>
                                  {fl}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        {/* Optional custom icing/topping writing */}
                        <div>
                          <label className="block text-[9px] uppercase tracking-wider font-bold text-mediumbrown mb-1">
                            Custom Note (Optional):
                          </label>
                          <input
                            type="text"
                            placeholder="e.g., 'Happy Birthday Sarah!'"
                            value={customMessages[product.id] || ""}
                            onChange={(e) => handleMessageChange(product.id, e.target.value)}
                            className="w-full text-[11px] bg-white border border-blush/60 rounded-md py-1.5 px-2 text-darkbrown placeholder-mediumbrown/40 focus:outline-none focus:ring-1 focus:ring-gold"
                          />
                        </div>
                      </div>

                      {/* Pricing and CTA Button */}
                      <div className="flex items-center justify-between gap-2 pt-2 border-t border-softbrown/10 shrink-0">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider font-semibold text-mediumbrown block">
                            Starting Price
                          </span>
                          <span className="font-serif text-base sm:text-lg font-bold text-gold">
                            ${product.startingPrice}
                          </span>
                        </div>

                        <button
                          onClick={() => handleAddClick(product)}
                          className="flex items-center gap-1.5 bg-darkbrown hover:bg-gold text-white font-sans text-[10px] uppercase tracking-[0.2em] font-bold py-3 px-4 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add Order
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white rounded-2xl border border-blush p-8 max-w-lg mx-auto"
            >
              <h3 className="font-serif text-lg font-bold text-darkbrown">No baked items found</h3>
              <p className="mt-2 text-xs text-mediumbrown font-sans leading-relaxed">
                We couldn't find any goodies matching your query. Let us know what you want and Tehreem can bake it custom for you!
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-6 inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white font-sans text-xs font-bold uppercase tracking-widest py-3 px-6 rounded-full shadow-md"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
