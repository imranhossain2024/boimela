import { BooksResponse } from "../../types/BookTypes";
import BookDetails from "./BookDetails";
import FeatureBook from "./FeatureBook";

function BookRow({ books }: BooksResponse) {
  return (
   <div className="flex bg-red-600 justify-center items-start gap-8 max-w-6xl mx-auto">
  
  <div className="">
    <BookDetails books={books} />
  </div>

  <div className="">
    <FeatureBook books={books} />
  </div>

</div>
  );
}

export default BookRow;
