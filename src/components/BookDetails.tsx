import { Book } from "../../types/BookTypes";

function BookDetails({ title, author }:Book) {
  return (
    <div className="shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{author}</p>
    </div>
  );
}

export default BookDetails;
