import { Book } from "../../types/BookTypes";
import BookRow from "./BookRow";

function BookList({
  searchTerm,
  books,
  onToggle,
}: {
  searchTerm: string;
  books: Book[];
  onToggle: (id: number) => void;
}) {
  const rows: React.ReactElement[] = [];
  books.forEach((book) => {
    if (
      book.title.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) ===
      -1
    ) {
      return;
    }
    rows.push(<BookRow key={book.id} book={book} onToggle={onToggle} />);
  });

  return (
    <div className="space-y-4 flex-col items-center justify-between p-4 bg-white text-black shadow rounded-lg">
      {rows}
    </div>
  );
}

export default BookList;
