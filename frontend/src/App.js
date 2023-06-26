// App component

import { useState } from "react";

// Import components
import Header from "./components/Header";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  // useState hook
  // Pass in as props to BookList component
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Sample Title1",
      price: "19.99",
      length: "416",
      publisher: "Sample Publisher",
      year: "2022",
      inStock: true,
    },
    {
      id: 2,
      title: "Sample Title2",
      price: "9.99",
      length: "318",
      publisher: "Sample Publisher2",
      year: "2023",
      inStock: true,
    },
    {
      id: 3,
      title: "Sample Title3",
      price: "14.99",
      length: "391",
      publisher: "Sample Publisher3",
      year: "2020",
      inStock: true,
    },
  ]);

  //* CRUD functions
  // Pass in as props to BookList component

  //* Update availability function
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
  function deleteBook(id) {
    // console.log("delete", id);
    // Set useState hook to filtered books without the passed id
    setBooks(books.filter((book) => book.id !== id));
  }

  return (
    <div>
      <Header />
      <AddBook />
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
