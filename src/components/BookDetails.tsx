import { BooksResponse } from "../../types/BookTypes";

function BookDetails({ books }: BooksResponse) {
  return (
    <div className="flex flex-col ">
      {books.map((book) => {
        return (
          <div
            className="flex-col bg-emerald-400 items-center gap-3.5 justify-end w-full mt-3"
            key={book.id}
          >
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BookDetails;
