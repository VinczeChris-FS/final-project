// Import Mongoose third-party package
// To connect to MongoDB database
const mongoose = require("mongoose");

// Create a schema for mongoose
const bookSchema = new mongoose.Schema({
  image: String,
  title: String,
  price: Number,
  length: Number,
  publisher: String,
  year: Number,
  inStock: Boolean,
});

// Compile schema into a model
// Export model and create "books" collection from string
module.exports = mongoose.model("Book", bookSchema);
