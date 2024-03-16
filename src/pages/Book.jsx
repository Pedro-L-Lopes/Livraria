import React from "react";
import { useParams } from "react-router-dom";

const Book = ({ books }) => {
  const { bookId } = useParams();
  const book = books.find((book) => book.id === parseInt(bookId));

  if (!book) return <div>Livro não encontrado</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full" src={book.img} alt={book.name} />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{book.name}</h1>
        <h3 className="text-gray-600 text-sm">Autor: {book.author}</h3>
        <p className="text-gray-700 text-sm mt-2">Preço: ${book.price}</p>
        <p className="text-gray-700 text-sm mt-2">{book.description}</p>
      </div>
    </div>
  );
};

export default Book;
