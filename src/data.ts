import { Category, Product, Testimonial, Offer, FAQItem } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "birthday-cakes",
    name: "Birthday Cakes",
    description: "Elegant, hand-crafted birthday cakes that taste as spectacular as they look.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "wedding-cakes",
    name: "Wedding Cakes",
    description: "Bespoke tier cakes created with luxurious textures, custom flora, and timeless style.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "custom-cakes",
    name: "Custom Cakes",
    description: "Personalized masterpieces designed around your special themes and events.",
    image: "/src/assets/images/custom_luxury_cake_1782831537497.jpg"
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    description: "Bite-sized bliss with creamy frostings, light crumbs, and beautiful decorations.",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "brownies",
    name: "Brownies",
    description: "Rich, dense, and fudgy Belgian chocolate brownies with custom toppings.",
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "cookies",
    name: "Cookies",
    description: "Freshly baked premium cookies with crisp edges and soft, chewy centers.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "pastries",
    name: "Pastries",
    description: "Flaky, buttery hand-rolled French pastries, croissants, and fruit danishes.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "cheesecakes",
    name: "Cheesecakes",
    description: "Silky, dense, and rich New York and Japanese style baked cheesecakes.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "dessert-boxes",
    name: "Dessert Boxes",
    description: "Curated gift boxes containing a divine selection of our signature bakes.",
    image: "/src/assets/images/gourmet_desserts_1782831552074.jpg"
  },
  {
    id: "seasonal-specials",
    name: "Seasonal Specials",
    description: "Limited-edition delicacies crafted with seasonal berries, spices, and ingredients.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
  }
];

export const PRODUCTS: Product[] = [
  // Birthday Cakes
  {
    id: "choc-truffle-delight",
    categoryId: "birthday-cakes",
    name: "Belgian Chocolate Truffle Cake",
    description: "Three layers of moist dark chocolate sponge filled and frosted with velvety premium Belgian chocolate ganache.",
    startingPrice: 45,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    popular: true,
    flavors: ["Belgian Dark Chocolate", "Milk Chocolate", "White Chocolate Raspberry"]
  },
  {
    id: "classic-vanilla-bean",
    categoryId: "birthday-cakes",
    name: "Madagascar Vanilla Bean Celebration",
    description: "Light and airy vanilla sponge layered with real Madagascar vanilla bean seeds, Swiss meringue buttercream, and fresh strawberry compote.",
    startingPrice: 40,
    image: "https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&q=80&w=800",
    flavors: ["Classic Vanilla", "Vanilla Lemon Chiffon", "Vanilla Almond Pecan"]
  },

  // Wedding Cakes
  {
    id: "royal-floral-cascade",
    categoryId: "wedding-cakes",
    name: "The Royal Floral Cascade Tiered Cake",
    description: "A breathtaking tiered wedding masterpiece coated in silky textured buttercream, adorned with cascading organic edible flowers and fine gold detailing.",
    startingPrice: 220,
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800",
    popular: true,
    flavors: ["Red Velvet Cream Cheese", "Amaretto Almond", "Zesty Lemon Elderflower"]
  },
  {
    id: "modern-minimalist-gold",
    categoryId: "wedding-cakes",
    name: "Modernist Hand-Painted Gold Leaf Cake",
    description: "A sophisticated minimalist architectural tier cake featuring clean geometric lines, delicate hand-painted 24k edible gold foil, and white blossoms.",
    startingPrice: 250,
    image: "https://images.unsplash.com/photo-1525146337625-f9480c51b0a3?auto=format&fit=crop&q=80&w=800",
    flavors: ["Carrot & Walnut Ginger", "Rich Chocolate Espresso", "Pistachio Rosewater"]
  },

  // Custom Cakes
  {
    id: "tehreems-floral-dream",
    categoryId: "custom-cakes",
    name: "Tehreem's Signature Floral Dream",
    description: "Our award-winning custom cake featuring soft blush tones, gold dust splatters, and gorgeous hand-sculpted white sugar flowers.",
    startingPrice: 85,
    image: "/src/assets/images/custom_luxury_cake_1782831537497.jpg",
    popular: true,
    flavors: ["Salted Caramel Pecan", "Blush Pink Strawberry", "Earl Grey Lavender"]
  },

  // Cupcakes
  {
    id: "rainbow-frost-cupcakes",
    categoryId: "cupcakes",
    name: "Artisan Dream Cupcake Set",
    description: "Assorted gourmet cupcakes with custom piping, featuring velvety cream fillings, real fruit reductions, and soft gold pearls.",
    startingPrice: 18,
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=800",
    flavors: ["Red Velvet", "Triple Chocolate Melt", "Lemon Meringue Pie", "Salted Caramel"]
  },

  // Brownies
  {
    id: "fudge-walnut-slabs",
    categoryId: "brownies",
    name: "Belgian Chocolate Fudgy Brownie Slab",
    description: "Our signature dense chocolate brownies made with rich butter, high-percentage cacao, and packed with walnuts or molten salted caramel.",
    startingPrice: 15,
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&q=80&w=800",
    flavors: ["Triple Chocolate Walnut", "Molten Salted Caramel", "Lotus Biscoff Crumble"]
  },

  // Cookies
  {
    id: "sea-salt-choc-cookies",
    categoryId: "cookies",
    name: "Gourmet Sea Salt Chocolate Chunk Cookies",
    description: "The ultimate giant cookies, crisp on the edges, warm and chewy inside, filled with premium chocolate pools and sprinkled with Maldon sea salt.",
    startingPrice: 12,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800",
    flavors: ["Classic Sea Salt Chocolate", "Dark Cocoa Pecan", "White Chocolate Macadamia"]
  },

  // Pastries
  {
    id: "buttery-french-croissants",
    categoryId: "pastries",
    name: "Premium Hand-Rolled Butter Croissants",
    description: "Flaky, multi-layered golden pastries hand-rolled over three days using premium French butter. Crispy outside and honeycomb-light inside.",
    startingPrice: 16,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800",
    flavors: ["Traditional Butter", "Almond Frangipane", "Pain au Chocolat"]
  },

  // Cheesecakes
  {
    id: "basque-burnt-cheesecake",
    categoryId: "cheesecakes",
    name: "Authentic Basque Burnt Cheesecake",
    description: "Baked at high heat to achieve a deeply caramelized dark exterior and an incredibly rich, molten custard center.",
    startingPrice: 38,
    image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&q=80&w=800",
    flavors: ["Original Vanilla Bean", "Matcha Ceremonial Grade", "Rich Pistachio"]
  },

  // Dessert Boxes
  {
    id: "gourmet-luxury-box",
    categoryId: "dessert-boxes",
    name: "The Signature Sweetheart Box",
    description: "A gorgeous curated box containing two cupcakes, two fudgy brownie squares, three luxury macarons, and two sea-salt chocolate cookies.",
    startingPrice: 28,
    image: "/src/assets/images/gourmet_desserts_1782831552074.jpg",
    popular: true,
  },

  // Seasonal Specials
  {
    id: "spiced-cinnamon-apple",
    categoryId: "seasonal-specials",
    name: "Spiced Apple & Maple Pecan Tart",
    description: "Crisp flaky buttery crust filled with caramelized organic orchard apples, warm autumn spices, and topped with rich toasted maple pecans.",
    startingPrice: 24,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "Bride",
    rating: 5,
    text: "Tehreem made our wedding day absolutely magical! The Royal Floral Cascade cake was the talk of the evening. Not only was it a breathtaking work of art, but the taste—lemon elderflower with fresh curd—was incredibly moist and light. Perfect delivery too!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    cakeOrdered: "Royal Floral Cascade Cake"
  },
  {
    id: "2",
    name: "Zainab Chaudhry",
    role: "Mother of Two",
    rating: 5,
    text: "I always order custom cakes for my kids' birthdays from Tehreems Homebakes. The attention to detail is remarkable. My kids love the adorable theme designs, and I feel safe knowing they use top-quality hygienic ingredients. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    cakeOrdered: "Custom Safari Theme Cake"
  },
  {
    id: "3",
    name: "David Sterling",
    role: "Corporate Coordinator",
    rating: 5,
    text: "Ordered 50 Signature Sweetheart Dessert Boxes for an annual corporate celebration. The packaging was so luxurious, with ribbons and gold-embossed notes. The brownies were rich and decadent. Every client raved about the fresh taste!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    cakeOrdered: "50 Dessert Gift Boxes"
  },
  {
    id: "4",
    name: "Ayesha Ahmed",
    role: "Influencer & Food Blogger",
    rating: 5,
    text: "The Signature Floral Dream is genuinely the best cake I have ever eaten in my life. It has that perfect home-baked love but looks like it came from a Michelin-star pastry shop. Tehreem is a genius baker!",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    cakeOrdered: "Signature Floral Dream Cake"
  }
];

export const OFFERS: Offer[] = [
  {
    id: "offer-birthday-pack",
    title: "Signature Birthday Celebration Bundle",
    description: "Get a 2kg Premium Belgian Chocolate Cake, a box of 6 gourmet cupcakes, and a signature candle set. Perfect for a hassle-free premium celebration.",
    badge: "Most Popular",
    originalPrice: 75,
    offerPrice: 59,
    image: "https://images.unsplash.com/photo-1530101121243-cce971128ae7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "offer-wedding-special",
    title: "The Dream Wedding Tasting Package",
    description: "An elegant tasting box featuring 6 slices of our premium wedding cake flavors, private visual consultation, and a 10% discount voucher on your final wedding booking.",
    badge: "Limited Edition",
    originalPrice: 45,
    offerPrice: 29,
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "offer-weekend-box",
    title: "Weekend Indulgence Dessert Box",
    description: "Treat your family with a supersized box of 4 Belgian chocolate brownies, 4 chocolate-chip cookies, and 4 mini strawberry cheesecakes.",
    badge: "Weekend Only",
    originalPrice: 48,
    offerPrice: 35,
    image: "/src/assets/images/gourmet_desserts_1782831552074.jpg"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I place an order with Tehreems Homebakes?",
    answer: "You can place an order directly on our website! Simply browse our beautiful categories, add your favorite bakes to the cart, choose your flavors/custom messages, and click 'Checkout via WhatsApp' or fill our checkout form. You can also customize your cake request using our 'Custom Cake' section which builds a direct design proposal for Tehreem."
  },
  {
    id: "faq-2",
    question: "How much advance notice is required?",
    answer: "For standard cakes, cupcakes, and dessert boxes, we require at least 24 to 48 hours notice. For complex custom themed cakes, and multi-tier wedding cakes, we recommend booking at least 5 to 7 days in advance to ensure slot availability and perfect curing of designs."
  },
  {
    id: "faq-3",
    question: "Do you make fully customized cakes?",
    answer: "Yes, customization is our ultimate specialty! Tehreems Homebakes specializes in crafting bespoke cakes tailored around your celebration theme, color schemes, and favorite flavors. Use our visual custom cake builder to specify the tiers, frosting, flavor, and reference notes, and we will get back to you with a sketch and quote."
  },
  {
    id: "faq-4",
    question: "Do you offer doorstep delivery?",
    answer: "Yes! We offer temperature-controlled doorstep delivery across the city to ensure your delicate cakes and cold cheesecakes arrive in pristine, perfect condition. Delivery rates are calculated based on your distance. Self-pickups from our studio are also happily welcome."
  },
  {
    id: "faq-5",
    question: "What payment methods do you accept?",
    answer: "We accept secure Bank Transfers, popular Mobile Wallets (JazzCash, EasyPaisa), credit/debit cards, and 50% advance bank deposits for highly customized tier cakes, with the remaining balance payable upon pickup or delivery."
  },
  {
    id: "faq-6",
    question: "Can I request special gluten-free, eggless, or vegan bakes?",
    answer: "Absolutely! We believe everyone deserves a sweet celebration. We offer eggless variants, gluten-free almond flour bases, and refined sugar-free options for most of our cakes. Please specify your dietary preferences in the order notes or custom request forms."
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    tag: "Cakes",
    title: "Double Tier Blush Floral Cake",
    image: "/src/assets/images/custom_luxury_cake_1782831537497.jpg"
  },
  {
    id: "g2",
    tag: "Cupcakes",
    title: "Pastel Lavender & Gold Rose Cupcakes",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g3",
    tag: "Cookies",
    title: "Gourmet Triple Chocolate Sea Salt Cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g4",
    tag: "Brownies",
    title: "Fudgy Chocolate Brownie Slabs",
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g5",
    tag: "Dessert Tables",
    title: "Luxurious Birthday Dessert Setup",
    image: "/src/assets/images/hero_bakery_banner_1782831525043.jpg"
  },
  {
    id: "g6",
    tag: "Baking Process",
    title: "Dusting Organic Cacao & Sweet Glazes",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g7",
    tag: "Happy Customer Orders",
    title: "Kids Theme Pastel Safari Birthday Cake",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g8",
    tag: "Cakes",
    title: "Gold-Leaf Chocolate Espresso Drip Cake",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=800"
  }
];
