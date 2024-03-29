//* BookItem list item component

// If inStock property, add "available" class for CSS styling
function BookItem(props) {
  return (
    <li
      //  className="book-item"
      className={`book-item ${props.inStock === true ? "available" : ""}`}
      onDoubleClick={() => props.onToggle(props.id)}
    >
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>
        <strong>{props.author}</strong>
      </p>
      <p>Price: ${props.price}</p>
      <p>Length: {props.length}</p>
      <p>Publisher: {props.publisher}</p>
      <p>Year: {props.year}</p>
      <button
        type="button"
        className="delete-btn"
        onClick={() => props.onDelete(props.id)}
      >
        Delete Book
      </button>
      <p className="availability-msg">Double-click to change availability</p>
    </li>
  );
}

export default BookItem;
