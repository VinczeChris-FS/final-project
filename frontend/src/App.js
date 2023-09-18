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
  // Array of books - originally moved to db.json and converted to JSON
  const [books, setBooks] = useState([]);

  // Environment variable from .env
  // Update URL in Config Vars in Heroku Settings
  const API_URL = process.env.REACT_APP_API_URL;
  // console.log(API_URL);

  // When App is loaded
  useEffect(() => {
    // Async arrow function example
    // const fetchBooks = async () => { }

    // Async named function
    async function fetchBooks() {
      // Since no longer using then() and catch(),
      // when using async and await, always add try/catch block
      try {
        // GET from db.json
        // const res = await axios.get("http://localhost:8000/books");

        // GET from backend API
        // const res = await axios.get("http://localhost:3001/api/books");

        // Use environment variable from .env
        const res = await axios.get(API_URL);
        // Array of objects from Axios data property
        const data = res.data;
        // Set useState hook with array of books objects
        setBooks(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    // Call above function
    fetchBooks();
  }, [API_URL]);

  //* CRUD functions

  //* Create book function
  // Pass in as props to AddBook component
  // Passed back object of useState values
  // Async arrow function example
  // const addBook = async (passedBook) => { }
  // Async named function/function declaration
  async function addBook(passedBook) {
    try {
      // POST to db.json
      // const res = await axios.post("http://localhost:8000/books", passedBook);

      // POST to backend API
      // const res = await axios.post(
      //   "http://localhost:3001/api/books",
      //   passedBook
      // );

      // Use environment variable from .env
      const res = await axios.post(API_URL, passedBook);

      // New object from Axios data property
      const data = res.data;
      // Set useState hook to copy with spread and add new object
      setBooks([...books, data]);
      alert("Book Added");
    } catch (err) {
      console.log(err.message);
    }
  }

  //* Read books function
  // Called in useEffect above.
  // console.log(books);

  //* Read book by ID function
  async function fetchBook(id) {
    try {
      // GET by id from db.json
      // const res = await axios.get(`http://localhost:8000/books/${id}`);

      // GET from backend API
      // const res = await axios.get(`http://localhost:3001/api/books/${id}`);

      // Use environment variable from .env
      const res = await axios.get(`${API_URL}/${id}`);
      // Array of objects from Axios data property
      const data = res.data;
      // console.log(data);
      return data;
    } catch (err) {
      console.log(err.message);
    }
  }

  //* Update availability function
  // Pass in as props to BookList component
  async function updateAvailability(id) {
    try {
      // Call above function
      const bookToToggle = await fetchBook(id);
      // Toggle inStock property to opposite
      const updatedBook = { ...bookToToggle, inStock: !bookToToggle.inStock };
      // PUT in db.json
      // const res = await axios.put(
      // `http://localhost:8000/books/${id}`,
      // updatedBook
      // );

      // PUT in backend API
      // const res = await axios.put(
      //   `http://localhost:3001/api/books/${id}`,
      //   updatedBook
      // );

      // Use environment variable from .env
      const res = await axios.put(`${API_URL}/${id}`, updatedBook);

      // New updated object from Axios data property
      const data = res.data;

      // For UI, so no reload needed
      // Set useState hook to copy with spread and change inStock property of new object
      // Of the book with passed id or don't change any properties
      setBooks(
        books.map((book) => {
          return book._id === id ? { ...book, inStock: data.inStock } : book;
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  }

  //* Delete book function
  // Pass in as props to BookList component
  // Async arrow function example
  // const deleteBook = async (id) => { }
  // Async named function
  async function deleteBook(id) {
    try {
      // DELETE from db.json
      // await axios.delete(`http://localhost:8000/books/${id}`);

      // DELETE from backend API
      // await axios.delete(`http://localhost:3001/api/books/${id}`);

      // Use environment variable from .env
      await axios.delete(`${API_URL}/${id}`);

      // For UI, so no reload needed
      // Set useState hook to filtered books without the passed id
      setBooks(books.filter((book) => book._id !== id));
    } catch (err) {
      console.log(err.message);
    }
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
