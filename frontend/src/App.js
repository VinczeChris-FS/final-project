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
    },
    {
      id: 2,
      title: "Sample Title2",
      price: "9.99",
      length: "318",
      publisher: "Sample Publisher2",
      year: "2023",
    },
    {
      id: 3,
      title: "Sample Title3",
      price: "14.99",
      length: "391",
      publisher: "Sample Publisher3",
      year: "2020",
    },
  ]);

  // Delete book function
  // Pass in as props to BookList component
  function deleteBook(id) {
    // console.log("delete", id);
    // useState hook
    setBooks(books.filter((book) => book.id !== id));
  }

  return (
    <div>
      <Header />
      <AddBook />
      <BookList books={books} onDelete={deleteBook} />
    </div>
  );
}

export default App;
