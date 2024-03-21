// Hooks
import { Link } from "react-router-dom";

// Components
import BookCard from "../components/BookCard";

// Books
import { books } from "../utils/books";

const Books = () => {
  return (
    <main style={{ height: "99vh" }}>
      <article className="grid grid-cols-2 md:flex md:flex-row justify-center items-center">
        {books.map((book) => (
          <div key={book.id}>
            <Link to={`/books/${book.id}`}>
              <BookCard book={book} />
            </Link>
          </div>
        ))}
      </article>
    </main>
  );
};

export default Books;
