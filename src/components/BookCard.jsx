function BookCard({ book }) {
  return (
    <main className="w-60 max-h-96 mx-auto bg-white shadow-lg rounded-lg hover:shadow-xl overflow-hidden">
      <img
        className="max-w-48 max-h-60 mx-auto"
        src={book.img}
        alt={book.name}
      />
      <div className="p-4">
        <h1 className="text-sm font-semibold h-10 truncate">{book.name}</h1>
        <h3 className="text-gray-600 text-xs h-5">{book.author}</h3>
        <h2 className="text-gray-800 text-sm mt-2">R${book.price}</h2>
      </div>
    </main>
  );
}

export default BookCard;
