// App component

import { useState, useEffect } from "react";

import axios from "axios";

// Import components
import Header from "./components/Header";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  // useState hook
  // Pass in as props to BookList component
  // Array of books - moved to db.json and converted to JSON
  const [books, setBooks] = useState([]);

  // When page app is loaded
  useEffect(() => {
    const getBooks = async () => {
      const booksFromServer = await fetchBooks();
      // Set useState hook with array of books objects
      setBooks(booksFromServer);
    };
    getBooks();
  }, []);

  //* CRUD functions

  //* Create book function
  // Pass in as props to AddBook component
  // Passed back object of useState values
  function addBook(passedBook) {
    // console.log(passedBook);
    // Create an ID from useState hook array length
    const id = books.length + 1;
    // Create new object with id and passed object, copy properties with spread
    const newBook = { id, ...passedBook };
    // console.log(newBook);
    // Set useState hook to copy with spread and add new object
    setBooks([...books, newBook]);
  }

  //* Read books function, called in useEffect above.
  const fetchBooks = async () => {
    const res = await axios("http://localhost:8000/books");
    const data = res.data;
    // console.log(data);
    return data;
  };

  //* Update availability function
  // Pass in as props to BookList component
  function updateAvailability(id) {
    // console.log("update", id);
    // Set useState hook to copy with spread and change inStock property to opposite
    // Of books with passed id or don't change any properties
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, inStock: !book.inStock } : book
      )
    );
  }

  //* Delete book function
  // Pass in as props to BookList component
  function deleteBook(id) {
    // console.log("delete", id);
    // Set useState hook to filtered books without the passed id
    setBooks(books.filter((book) => book.id !== id));
  }

  return (
    <div>
      <Header />
      <AddBook onAdd={addBook} />
      {books.length > 0 ? (
        <BookList
          books={books}
          onDelete={deleteBook}
          onToggle={updateAvailability}
        />
      ) : (
        <section className="books">
          <h2>No Books to Show... Add one?</h2>
        </section>
      )}
    </div>
  );
}

export default App;
