import { useState, useEffect } from "react";
import BookList from "./BookList";
import Header from "./Header";
import Search from "./Search";
import booksData from "../data/books.json";
import { Book } from "../../types/BookTypes";

const Boimela = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // ১. প্রথমে LocalStorage থেকে ডেটা লোড করার চেষ্টা করা হচ্ছে, না থাকলে JSON ফাইল থেকে নেওয়া হচ্ছে
  const [books, setBooks] = useState<Book[]>(() => {
    const savedBooks = localStorage.getItem("boimela_books");
    return savedBooks ? JSON.parse(savedBooks) : booksData.books;
  });

  // ২. books স্টেট যখনই পরিবর্তন হবে, তা LocalStorage-এ সেভ করা হচ্ছে
  useEffect(() => {
    localStorage.setItem("boimela_books", JSON.stringify(books));
  }, [books]);

  const handleFeaturedBook = (id: number) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, featureBook: !book.featureBook } : book,
      ),
    );
  };
  console.log(books);

  return (
    <div className="mx-auto p-4">
      <Header></Header>
      <Search searchTerm={searchTerm} onSearchBook={setSearchTerm}></Search>
      <BookList
        searchTerm={searchTerm}
        books={books}
        onToggle={handleFeaturedBook}
      ></BookList>
    </div>
  );
};

export default Boimela;
