// BookList section and list component

// Import BookItem component
import BookItem from "./BookItem";

// useState hook passed in from App.js
function BookList(props) {
  return (
    <section className="books">
      <ul className="book-list">
        {props.books.map((book) => {
          return (
            <BookItem
              key={book.id}
              id={book.id}
              title={book.title}
              price={book.price}
              length={book.length}
              publisher={book.publisher}
              year={book.year}
              onDelete={props.onDelete}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default BookList;
