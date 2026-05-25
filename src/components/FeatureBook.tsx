import { Star } from "lucide-react";
import { Book } from "../../types/BookTypes";

function FeatureBook({
  book,
  onToggle,
}: {
  book: Book;
  onToggle: (id: number) => void;
}) {
  console.log(`[Rendering FeatureBook] ID: ${book.id} | featureBook: ${book.featureBook}`);

  return (
    <>
      <button onClick={() => onToggle(book.id)} className="cursor-pointer">
        <Star 
          color={book.featureBook ? "#22c55e" : "#9ca3af"} 
          fill={book.featureBook ? "#22c55e" : "transparent"} 
        />
      </button>
    </>
  );
}

export default FeatureBook;
