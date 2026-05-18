export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  originalPrice: number;
  discount: number;
  category: string;
  image: string;
  rating: number;
  stock: number;
  description: string;
}

export interface BooksResponse {
  books: Book[];
}