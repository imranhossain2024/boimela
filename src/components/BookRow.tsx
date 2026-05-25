import { Book } from "../../types/BookTypes";
import BookDetails from "../components/BookDetails";
import FeatureBook from "../components/FeatureBook";

function BookRow({
  book,
  onToggle,
}: {
  book: Book;
  onToggle: (id: number) => void;
}) {
  return (
    <div className="flex justify-between w-full">
      <BookDetails
        title={book.title}
        author={book.author}
        id={book.id}
      ></BookDetails>
      <FeatureBook book={book} onToggle={onToggle}></FeatureBook>
    </div>
  );
}

export default BookRow;
