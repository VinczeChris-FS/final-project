// RESTful API using Express
// Runs on http://localhost:3001/api/books

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

// Use Dotenv for environment variables
require("dotenv").config();
// require("dotenv").config({
//   path: "./.env.development.local",
// });

// API routes
const books = require("./routes/books");

// Heroku will automatically provide environment variable for port or 3001
const PORT = process.env.PORT || 3001;

// Use Express, a lightweight and simple framework for building web servers
const app = express();

// Middleware

// Use cors for cross-origin communication
app.use(cors());

// Read JSON from body payloads
app.use(express.json());

// HTTP request logger in Terminal
app.use(morgan("dev"));

// Connect to localhost:27017 and books database, view in MongoDB Compass app
// mongoose.connect("mongodb://localhost/books")

// Environment variable from .env
// Update URL in Config Vars in Heroku Settings
const database_url = process.env.DATABASE_URL;
mongoose
  .connect(database_url)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDb...", err));

// Allow both React and Node.js apps to be deployed on the same domain
// Allow Node.js to serve the static files from the built React app
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

// For API endpoint
app.use("/api/books", books);

// If a GET request comes in not handled by API endpoint, return React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
