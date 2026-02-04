import { Product, Review, Service } from "./types";

export const SALON_INFO = {
  name: "HAIR SECRET",
  address: "No.28, Ground Floor, Sentul Raya Boulevard, Jalan 14/48A, Off Jalan Sentul, 51000 Kuala Lumpur",
  phone: "60178760900",
  whatsapp: "60178760900",
  hours: "10:00 AM - 7:30 PM",
  days: "Open Everyday"
};

export const SERVICES: Service[] = [
  { id: 's1', name: 'Signature Precision Cut', duration: '45m', price: 'RM 60', category: 'Cut' },
  { id: 's2', name: 'Executive Fade & Style', duration: '45m', price: 'RM 55', category: 'Cut' },
  { id: 's3', name: 'Global Colour Perfection', duration: '2h', price: 'RM 220+', category: 'Color' },
  { id: 's4', name: 'Balayage & Foiling', duration: '3h', price: 'RM 350+', category: 'Color' },
  { id: 's5', name: 'Scalp Detox Treatment', duration: '1h', price: 'RM 120', category: 'Treatment' },
  { id: 's6', name: 'Keratin Smoothing', duration: '2.5h', price: 'RM 400+', category: 'Treatment' },
  { id: 's7', name: 'Event Styling', duration: '1h', price: 'RM 100', category: 'Styling' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Revitalizing Gold Shampoo',
    description: 'Infused with argan oil for intense shine and softness.',
    price: 'RM 85',
    category: 'Shampoo',
    image: 'https://picsum.photos/id/40/600/600'
  },
  {
    id: 'p2',
    name: 'Scalp Balance Tonic',
    description: 'Restores pH levels and promotes healthy hair growth.',
    price: 'RM 110',
    category: 'Tonic',
    image: 'https://picsum.photos/id/250/600/600'
  },
  {
    id: 'p3',
    name: 'Deep Repair Mask',
    description: 'Weekly treatment for damaged and color-treated hair.',
    price: 'RM 95',
    category: 'Treatment',
    image: 'https://picsum.photos/id/21/600/600'
  },
  {
    id: 'p4',
    name: 'Volumizing Mousse',
    description: 'Lightweight lift for fine hair without the crunch.',
    price: 'RM 65',
    category: 'Styling',
    image: 'https://picsum.photos/id/20/600/600'
  }
];

export const REVIEWS: Review[] = [
  { id: 'r1', name: 'Sarah L.', comment: 'The most luxurious experience I have had in KL. The cut is precise and easy to manage.', rating: 5, date: 'Oct 2023' },
  { id: 'r2', name: 'Jason M.', comment: 'Great vibes, professional staff. The scalp treatment is a game changer.', rating: 5, date: 'Sep 2023' },
  { id: 'r3', name: 'Priya K.', comment: 'Loved the color result! Exactly what I asked for. Highly recommended.', rating: 4, date: 'Nov 2023' },
  { id: 'r4', name: 'Mei Ling', comment: 'Hair Secret is my go-to. The products they recommend actually work.', rating: 5, date: 'Dec 2023' },
];