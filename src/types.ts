export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  startingPrice: number;
  image: string;
  popular?: boolean;
  flavors?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
  cakeOrdered?: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  badge: string;
  originalPrice?: number;
  offerPrice: number;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CartItem {
  product: Product | Offer;
  quantity: number;
  selectedFlavor?: string;
  customMessage?: string;
}

export interface CustomCakeRequest {
  tiers: string;
  size: string;
  flavor: string;
  frosting: string;
  theme: string;
  deliveryDate: string;
  notes: string;
  name: string;
  contact: string;
}
