export interface MenuItem {
  id: string;
  name: string;
  category: 'hot-coffee' | 'cold-coffee' | 'natural-brews' | 'shakeys' | 'waffles-pancakes';
  categoryLabel: string;
  price: number;
  description: string;
  isSignature?: boolean;
  dietary?: 'veg' | 'non-veg';
  badge?: string;
  image?: string;
}

export interface MenuCategory {
  id: 'hot-coffee' | 'cold-coffee' | 'natural-brews' | 'shakeys' | 'waffles-pancakes';
  name: string;
  tagline: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  tag: string;
  source: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  src: string;
  aspect?: string;
}

export interface ReservationFormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequest: string;
}
