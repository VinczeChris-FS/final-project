// AddBook form component

import { useState } from "react";

// Import component
import FormField from "./FormField";
import CheckField from "./CheckField";

function AddBook() {
  // useState hooks
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredLength, setEnteredLength] = useState("");
  const [enteredPublisher, setEnteredPublisher] = useState("");
  const [enteredYear, setEnteredYear] = useState("");
  const [enteredInStock, setEnteredInStock] = useState(false);

  // Event handler functions for form fields onChange events
  function titleChangeHandler(e) {
    setEnteredTitle(e.target.value);
  }
  function priceChangeHandler(e) {
    setEnteredPrice(e.target.value);
  }

  function lengthChangeHandler(e) {
    setEnteredLength(e.target.value);
  }

  function publisherChangeHandler(e) {
    setEnteredPublisher(e.target.value);
  }

  function yearChangeHandler(e) {
    setEnteredYear(e.target.value);
  }

  function inStockChangeHandler(e) {
    setEnteredInStock(e.currentTarget.checked);
  }

  return (
    <section className="add-book">
      <h2>Add a New Book</h2>
      <form>
        <FormField
          type="text"
          label="Title"
          id="title"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <FormField
          type="number"
          label="Price"
          id="price"
          value={enteredPrice}
          onChange={priceChangeHandler}
        />
        <FormField
          type="number"
          label="Length in Pages"
          id="length"
          value={enteredLength}
          onChange={lengthChangeHandler}
        />
        <FormField
          type="text"
          label="Publisher"
          id="publisher"
          value={enteredPublisher}
          onChange={publisherChangeHandler}
        />
        <FormField
          type="number"
          label="Publication Year"
          id="year"
          value={enteredYear}
          onChange={yearChangeHandler}
        />
        <CheckField
          label="Set as Available"
          id="available"
          value={enteredInStock}
          onChange={inStockChangeHandler}
        />
        <button type="submit">Add Book</button>
      </form>
    </section>
  );
}

export default AddBook;
