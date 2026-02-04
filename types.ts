export interface Service {
  id: string;
  name: string;
  duration: string; // e.g., "1h 30m"
  price: string;
  category: 'Cut' | 'Color' | 'Treatment' | 'Styling';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Shampoo' | 'Tonic' | 'Treatment' | 'Styling';
}

export interface Review {
  id: string;
  name: string;
  comment: string;
  rating: number;
  date: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}