export interface Book {
  id: number;
  title: string;
  author: string;
  price?: number;
  originalPrice?: number;
  discount?: number;
  category?: string;
  image?: string;
  description?: string;
  featureBook?: boolean;
}


