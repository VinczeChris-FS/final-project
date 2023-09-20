//* BookList section and unordered list component

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
              key={book._id}
              id={book._id}
              title={book.title}
              author={book.author}
              image={book.image}
              price={book.price}
              length={book.length}
              publisher={book.publisher}
              year={book.year}
              inStock={book.inStock}
              onDelete={props.onDelete}
              onToggle={props.onToggle}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default BookList;
