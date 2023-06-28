// Routes for http://localhost:3001/books

const express = require("express");
const router = express.Router();

// Not a database, in-memory storage for now
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
    title: "Sample Title2",
    price: 9.99,
    length: 321,
    publisher: "Sample Publisher2",
    year: 2021,
    inStock: true,
    id: 2,
  },
];

// For GET http requests
router.get("/", (req, res) => {
  res.status(200).json(BOOKS);
});

module.exports = router;
