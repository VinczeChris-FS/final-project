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

  // When App is loaded
  useEffect(() => {
    // Async arrow function example
    // const getBooks = async () => { }
    // Async named function
    async function getBooks() {
      // Call read books function below
      const booksFromServer = await fetchBooks();
      // Set useState hook with array of books objects
      setBooks(booksFromServer);
    }
    // Call above function
    getBooks();
  }, []);

  //* CRUD functions

  //* Create book function
  // Pass in as props to AddBook component
  // Passed back object of useState values
  // Async arrow function example
  // const addBook = async (passedBook) => { }
  // Async named function
  async function addBook(passedBook) {
    // POST to db.json
    const res = await axios.post("http://localhost:8000/books", passedBook);
    // New object from Axios data property
    const data = res.data;
    // Set useState hook to copy with spread and add new object
    setBooks([...books, data]);

    // ID no longer needed
    // console.log(passedBook);
    // Create an ID from useState hook array length
    // const id = books.length + 1;
    // Create new object with id and passed object, copy properties with spread
    // const newBook = { id, ...passedBook };
    // console.log(newBook);
    // Set useState hook to copy with spread and add new object
    // setBooks([...books, newBook]);
  }

  //* Read books function, called in useEffect above.
  // Async arrow function example
  // const fetchBooks = async () => { }
  // Async named function
  async function fetchBooks() {
    // GET from db.json
    const res = await axios.get("http://localhost:8000/books");
    // Array of objects from Axios data property
    const data = res.data;
    // console.log(data);
    return data;
  }

  //* Read book function
  async function fetchBook(id) {
    // GET by id from db.json
    const res = await axios.get(`http://localhost:8000/books/${id}`);
    // Array of objects from Axios data property
    const data = res.data;
    // console.log(data);
    return data;
  }

  //* Update availability function
  // Pass in as props to BookList component
  async function updateAvailability(id) {
    // Call above function
    const bookToToggle = await fetchBook(id);
    // Toggle inStock property
    const updatedBook = { ...bookToToggle, inStock: !bookToToggle.inStock };
    // PUT in db.json
    const res = await axios.put(
      `http://localhost:8000/books/${id}`,
      updatedBook
    );
    // New updated object from Axios data property
    const data = res.data;

    // For UI, so no reload needed
    // Set useState hook to copy with spread and change inStock property to opposite
    // Of book with passed id or don't change any properties
    // Set useState hook to copy with spread and change inStock property of new object
    // Of book with passed id or don't change any properties
    setBooks(
      books.map((book) =>
        // book.id === id ? { ...book, inStock: !book.inStock } : book
        book.id === id ? { ...book, inStock: data.inStock } : book
      )
    );
  }

  //* Delete book function
  // Pass in as props to BookList component
  // Async arrow function example
  // const deleteBook = async (id) => { }
  // Async named function
  async function deleteBook(id) {
    // DELETE from db.json
    await axios.delete(`http://localhost:8000/books/${id}`);

    // Set useState hook to filtered books without the passed id
    // For UI, so no reload needed
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
