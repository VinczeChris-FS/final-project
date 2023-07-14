// Routes for http://localhost:3001/books

const express = require("express");
const router = express.Router();

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

// For GET http requests
router.get("/", (req, res) => {
  res.status(200).json(BOOKS);
});

// For GET by ID http requests
router.get("/:id", (req, res) => {
  const book = BOOKS.find((b) => b.id === parseInt(req.params.id));
  //   console.log(book);
  if (!book) {
    return res.status(404).json({
      message: "The book with the given ID does not exist",
    });
  }
  res.status(200).json(book);
});

// For POST http requests
router.post("/", (req, res) => {
  // Get data from body payload
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

// For PUT http requests
router.put("/:id", (req, res) => {
  // Same as GET by ID
  const book = BOOKS.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({
      message: "The book with the given ID does not exist",
    });
  }
  // Get data from body payload
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

module.exports = router;
