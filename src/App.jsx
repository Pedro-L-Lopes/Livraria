// Hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Book from "./pages/Book";

// Books
import { books } from "./utils/books";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/books/:bookId" element={<Book books={books} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
