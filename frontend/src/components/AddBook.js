//* AddBook form component
// section, h2, form, button

import { useState } from "react";

// Import component
import FormField from "./FormField";
import CheckField from "./CheckField";

function AddBook(props) {
  // useState hooks
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [length, setLength] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year, setYear] = useState("");
  const [inStock, setInStock] = useState(true);

  // Event handler functions for form fields onChange events
  // onChange event happens when user types something in a field
  function imageChangeHandler(e) {
    setImage(e.target.value);
  }

  function titleChangeHandler(e) {
    setTitle(e.target.value);
  }

  function authorChangeHandler(e) {
    setAuthor(e.target.value);
  }

  function priceChangeHandler(e) {
    setPrice(parseFloat(e.target.value));
  }

  function lengthChangeHandler(e) {
    setLength(parseFloat(e.target.value));
  }

  function publisherChangeHandler(e) {
    setPublisher(e.target.value);
  }

  function yearChangeHandler(e) {
    setYear(parseFloat(e.target.value));
  }

  function inStockChangeHandler(e) {
    // console.log(e.currentTarget.checked);
    // e.target.checked = false
    setInStock(e.currentTarget.checked);
  }

  function submitHandler(e) {
    e.preventDefault();
    // Pass back an object of useState values to App.js
    props.onAdd({
      image,
      title,
      author,
      price,
      length,
      publisher,
      year,
      inStock,
    });

    // Clear useState values
    setImage("");
    setTitle("");
    setAuthor("");
    setPrice("");
    setLength("");
    setPublisher("");
    setYear("");
    setInStock("");
    setInStock(true);
  }

  return (
    <section className="add-book">
      <h2>Add a New Book</h2>
      <form onSubmit={submitHandler}>
        <FormField
          type="text"
          label="Image"
          id="image"
          value={image}
          onChange={imageChangeHandler}
        />
        <FormField
          type="text"
          label="Title"
          id="title"
          value={title}
          onChange={titleChangeHandler}
        />
        <FormField
          type="text"
          label="Author"
          id="author"
          value={author}
          onChange={authorChangeHandler}
        />
        <FormField
          type="number"
          label="Price"
          id="price"
          value={price}
          onChange={priceChangeHandler}
        />
        <FormField
          type="number"
          label="Length in Pages"
          id="length"
          value={length}
          onChange={lengthChangeHandler}
        />
        <FormField
          type="text"
          label="Publisher"
          id="publisher"
          value={publisher}
          onChange={publisherChangeHandler}
        />
        <FormField
          type="number"
          label="Publication Year"
          id="year"
          value={year}
          onChange={yearChangeHandler}
        />
        <CheckField
          label="Set as Available"
          id="available"
          value={inStock}
          onChange={inStockChangeHandler}
        />
        <button type="submit">Add Book</button>
      </form>
    </section>
  );
}

export default AddBook;
