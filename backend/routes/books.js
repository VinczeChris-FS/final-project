//* Routes for http://localhost:3001/api/books

const express = require("express");
const router = express.Router();

// Not a database, in-memory storage for now
// Array of objects
const BOOKS = [
  {
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/en/1/1d/Twilightbook.jpg",
    title: "Twilight",
    price: 19.99,
    length: 544,
    publisher: "Little, Brown and Company",
    year: 2005,
    inStock: true,
  },
  {
    id: 2,
    image: "https://upload.wikimedia.org/wikipedia/en/1/1d/Twilightbook.jpg",
    title: "Twilight",
    price: 19.99,
    length: 544,
    publisher: "Little, Brown and Company",
    year: 2005,
    inStock: true,
  },
];

// Middleware for GET by ID
// To avoid repetitive code in GET by ID and PUT http requests
const getBook = (req, res, next) => {
  // Find object by passed ID
  const book = BOOKS.find((b) => b.id === parseInt(req.params.id));
  //   console.log(book);
  if (!book) {
    return res.status(404).json({
      message: "The book with the given ID does not exist",
    });
  }
  // Pass book in response
  res.book = book;
  next();
};

// RESTful endpoints
// GET, POST, PATCH, DELETE
// CRUD - CREATE, READ, UPDATE, and DELETE

//* For GET http requests
router.get("/", (req, res) => {
  res.status(200).json(BOOKS);
});

//* For GET by ID http requests
// Use getBook middleware above
router.get("/:id", getBook, (req, res) => {
  // book in response from getBook
  res.status(200).json(res.book);
});

//* For POST http requests
router.post("/", (req, res) => {
  // Get data from body payload
  const image = req.body.image;
  const title = req.body.title;
  const price = req.body.price;
  const length = req.body.length;
  const publisher = req.body.publisher;
  const year = req.body.year;
  const inStock = req.body.inStock;

  // Create new object
  const newBook = {
    id: BOOKS.length + 1,
    image: image,
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
// Use getBook middleware above
router.put("/:id", getBook, (req, res) => {
  // Get data from body payload
  const image = req.body.image;
  const title = req.body.title;
  const price = req.body.price;
  const length = req.body.length;
  const publisher = req.body.publisher;
  const year = req.body.year;
  const inStock = req.body.inStock;

  // Update object
  // book in response from getBook
  res.book.image = image;
  res.book.title = title;
  res.book.price = price;
  res.book.length = length;
  res.book.publisher = publisher;
  res.book.year = year;
  res.book.inStock = inStock;

  res.status(200).json(res.book);
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

module.exports = router;
