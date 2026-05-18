import { BooksResponse } from "../../types/BookTypes";

function FeatureBook({ books }: BooksResponse) {
  return (
    <div className="flex flex-col ">
      {books.map((book) => {
        return (
          <div key={book.id}>
            <p className="flex-col bg-emerald-400 items-center gap-3.5 justify-end w-full mt-3">
              {book.rating}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default FeatureBook;
