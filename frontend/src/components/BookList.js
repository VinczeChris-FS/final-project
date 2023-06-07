// BookList section and list component

// Import BookItem component
import BookItem from "./BookItem";

function BookList() {
  return (
    <section className="books">
      <ul className="book-list">
        <BookItem
          title="Sample Title1"
          price="19.99"
          length="416"
          publisher="Sample Publisher"
          year="2023"
        />
        <BookItem
          title="Sample Title2"
          price="19.99"
          length="416"
          publisher="Sample Publisher"
          year="2023"
        />
      </ul>
    </section>
  );
}

export default BookList;
