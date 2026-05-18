import BookRow from "./BookRow";
import booksData from "../data/books.json";
function BookList() {
  const books = booksData.books;
  console.log(books);

  return (
    <div >
      <BookRow books={books}></BookRow>
    </div>
  );
}

export default BookList;
