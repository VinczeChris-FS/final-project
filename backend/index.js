// RESTful API using Express
// Runs on http://localhost:3001/books

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

// API routes
const books = require("./routes/books");

// Heroku will provide environment variable for port or 3001
const PORT = process.env.PORT || 3001;

const app = express();

// Use cors for cross-origin communication
app.use(cors());

// Body parse for JSON
app.use(express.json());

// HTTP request logger middleware
app.use(morgan("dev"));

// Allow both React and Node.js apps to be deployed on the same domain

// Allow Node.js to serve the static files from the built React app
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

// For API endpoint
app.use("/books", books);

// If a GET request comes in not handled by API endpoint, return React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
