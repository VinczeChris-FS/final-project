//* Routes for http://localhost:3001/api/books

const express = require("express");
const router = express.Router();

// To use Joi package to perform input validation
const Joi = require("joi");

// Not a database, in-memory storage for now
// Array of objects
const BOOKS = [
  {
    id: 1,
    title: "Sample Title1",
    price: 19.99,
    length: 416,
    publisher: "Sample Publisher",
    year: 2022,
    inStock: true,
  },
  {
    id: 2,
    title: "Sample Title2",
    price: 9.99,
    length: 321,
    publisher: "Sample Publisher2",
    year: 2021,
    inStock: true,
  },
];

//* For GET http requests
router.get("/", (req, res) => {
  res.status(200).json(BOOKS);
});

//* For GET by ID http requests
router.get("/:id", (req, res) => {
  // Find object by passed ID
  const book = BOOKS.find((b) => b.id === parseInt(req.params.id));
  //   console.log(book);
  if (!book) {
    return res.status(404).json({
      message: "The book with the given ID does not exist",
    });
  }
  res.status(200).json(book);
});

//* For POST http requests
router.post("/", (req, res) => {
  // Use Joi to validate, pass in body payload
  // If error is returned, then invalid
  const { error } = validateBook(req.body);
  // If invalid, return error
  if (error) return res.status(400).send(error.details[0].message);

  // Else, get data from body payload
  const title = req.body.title;
  const price = req.body.price;
  const length = req.body.length;
  const publisher = req.body.publisher;
  const year = req.body.year;
  const inStock = req.body.inStock;

  // Create new object
  const newBook = {
    id: BOOKS.length + 1,
    title: title,
    price: price,
    length: length,
    publisher: publisher,
    year: year,
    inStock: inStock,
  };

  // Add new object to array
  BOOKS.push(newBook);

  res.status(201).json(newBook);
});

//* For PUT http requests
// PUT to replace, PATCH to partial update
router.put("/:id", (req, res) => {
  // Same as GET by ID
  const book = BOOKS.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({
      message: "The book with the given ID does not exist",
    });
  }
  // Use Joi to validate, pass in body payload
  // If error is returned, then invalid
  const { error } = validateBook(req.body);
  // If invalid, return error
  if (error) return res.status(400).send(error.details[0].message);

  // Else, get data from body payload
  const title = req.body.title;
  const price = req.body.price;
  const length = req.body.length;
  const publisher = req.body.publisher;
  const year = req.body.year;
  const inStock = req.body.inStock;

  // Update object
  book.title = title;
  book.price = price;
  book.length = length;
  book.publisher = publisher;
  book.year = year;
  book.inStock = inStock;

  res.status(200).json(book);
});

//* For DELETE http requests
router.delete("/:id", (req, res) => {
  // Same as GET by ID
  const book = BOOKS.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({
      message: "The book with the given ID does not exist",
    });
  }
  // Delete object
  const index = BOOKS.indexOf(book);
  // console.log(index);
  BOOKS.splice(index, 1);
  res.status(200).json(book);
});

// Use Joi package to validate object from body payload
function validateBook(book) {
  const schema = Joi.object({
    // Check properties
    // Make sure it is a string/number/boolean, with minimum characters, and the property is required
    title: Joi.string().min(2).required(),
    price: Joi.number().strict().min(1).required(),
    length: Joi.number().strict().integer().min(1).required(),
    publisher: Joi.string().min(2).required(),
    year: Joi.number().strict().integer().min(1900).max(2023).required(),
    inStock: Joi.boolean().required(),
  });
  // Return validation object
  // console.log(schema.validate(book));
  return schema.validate(book);
}

module.exports = router;
