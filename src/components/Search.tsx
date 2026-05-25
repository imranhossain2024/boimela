import { SearchProps } from "../../types/SearchProps";

function Search({ searchTerm, onSearchBook }: SearchProps) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        className="mb-4 w-full rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchBook(event.target.value)}
        placeholder="Enter here"
      />
    </form>
  );
}

export default Search;
