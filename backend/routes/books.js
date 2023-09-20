//* Routes for http://localhost:3001/api/books

const express = require("express");
const router = express.Router();

// Import Mongoose model and create a Book class from model
const Book = require("../models/books");

// Not a database, in-memory storage for now
// Array of objects
// const BOOKS = [
//   {
//     id: 1,
//     image: "https://upload.wikimedia.org/wikipedia/en/1/1d/Twilightbook.jpg",
//     title: "Twilight",
//     price: 19.99,
//     length: 544,
//     publisher: "Little, Brown and Company",
//     year: 2005,
//     inStock: true,
//   },
//   {
//     id: 2,
//     image: "https://upload.wikimedia.org/wikipedia/en/1/1d/Twilightbook.jpg",
//     title: "Twilight",
//     price: 19.99,
//     length: 544,
//     publisher: "Little, Brown and Company",
//     year: 2005,
//     inStock: true,
//   },
// ];

// Middleware for GET by ID
// To avoid repetitive code in GET by ID, PUT, and DELETE HTTP requests
const getBook = async (req, res, next) => {
  // Find object by passed ID
  // const book = BOOKS.find((b) => b.id === parseInt(req.params.id));
  // Use try and catch for async error catching
  let book;
  try {
    // Find book in database from passed ID
    // Use Mongoose findById() method
    book = await Book.findById(req.params.id);
    // console.log(book);
    if (!book) {
      return res.status(404).json({
        message: "The book with the given ID does not exist",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
  // Pass book in response
  res.book = book;
  next();
};

// RESTful endpoints
// GET, POST, PATCH, DELETE
// CRUD - CREATE, READ, UPDATE, and DELETE

//* For GET HTTP requests
router.get("/", async (req, res) => {
  // res.status(200).json(BOOKS);
  try {
    // Find all books in database
    // Use Mongoose find() method
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//* For GET by ID HTTP requests
// Use getBook middleware above
router.get("/:id", getBook, async (req, res) => {
  // book in response from getBook
  res.status(200).json(res.book);
});

//* For POST HTTP requests
router.post("/", async (req, res) => {
  // Get data from body payload
  // const image = req.body.image;
  // const title = req.body.title;
  // const price = req.body.price;
  // const length = req.body.length;
  // const publisher = req.body.publisher;
  // const year = req.body.year;
  // const inStock = req.body.inStock;

  // Create new object
  // const newBook = {
  //   id: BOOKS.length + 1,
  //   image: image,
  //   title: title,
  //   price: price,
  //   length: length,
  //   publisher: publisher,
  //   year: year,
  //   inStock: inStock,
  // };

  // Add new object to array
  // BOOKS.push(newBook);

  // Create a new instance from Book class
  // Get data from body payload
  const book = new Book({
    image: req.body.image,
    author: req.body.author,
    title: req.body.title,
    price: req.body.price,
    length: req.body.length,
    publisher: req.body.publisher,
    year: req.body.year,
    inStock: req.body.inStock,
  });
  // Save to database
  // Use Mongoose save() method
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//* For PUT http requests
// Use getBook middleware above
router.put("/:id", getBook, async (req, res) => {
  // Get data from body payload
  const image = req.body.image;
  const author = req.body.author;
  const title = req.body.title;
  const price = req.body.price;
  const length = req.body.length;
  const publisher = req.body.publisher;
  const year = req.body.year;
  const inStock = req.body.inStock;

  // Update object
  // book in response from getBook
  res.book.image = image;
  res.book.author = author;
  res.book.title = title;
  res.book.price = price;
  res.book.length = length;
  res.book.publisher = publisher;
  res.book.year = year;
  res.book.inStock = inStock;

  // res.status(200).json(res.book);

  // Save to database
  // Use Mongoose save() method
  try {
    const updatedBook = await res.book.save();
    res.status(201).json(updatedBook);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//* For DELETE http requests
// Use getBook middleware above
router.delete("/:id", getBook, async (req, res) => {
  // const book = res.book;
  // if (!book) {
  //   return res.status(404).json({
  //     message: "The book with the given ID does not exist",
  //   });
  // }
  // Delete object
  // const index = BOOKS.indexOf(book);
  // console.log(index);
  // BOOKS.splice(index, 1);
  // res.status(200).json(book);

  // Delete from database
  // Use Mongoose deleteOne() method
  try {
    const deletedBook = await res.book.deleteOne();
    res.status(201).json(deletedBook);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
