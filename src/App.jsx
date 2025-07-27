import "./App.css";
import Header from "./components/header";
import Hero from "./components/HeroSection";
import BookList from "./components/BookList";
import AddBook from "./components/AddBookForm";
import SearchBook from "./components/SearchBook";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <AddBook onAdd={addBook}></AddBook>
      <SearchBook query={query} setQuery={setQuery}></SearchBook>
      <div className="flex justify-center items-center mt-6 mb-4">
        <h2 className="text-4xl font-medium ">Daftar Buku</h2>
      </div>

      <BookList books={filteredBooks}></BookList>
      <Footer></Footer>
    </>
  );
}

export default App;
