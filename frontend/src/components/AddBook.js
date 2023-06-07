// AddBook form component

// Import component
import FormField from "./FormField";

function AddBook() {
  return (
    <section className="add-book">
      <h2>Add a New Book</h2>
      <form>
        <FormField type="text" label="Title" id="title" />
        <FormField type="number" label="Price" id="price" />
        <FormField type="number" label="Length in Pages" id="length" />
        <FormField type="text" label="Publisher" id="publisher" />
        <FormField type="number" label="Publication Year" id="year" />
        <button type="submit">Add Book</button>
      </form>
    </section>
  );
}

export default AddBook;
