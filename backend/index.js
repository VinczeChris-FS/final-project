// Express web server
// Runs on http://localhost:3001/

const express = require("express");
const path = require("path");

// Heroku will provide environment variable for port or 3001
const PORT = process.env.PORT || 3001;

const app = express();

// Allow both React and Node.js apps to be deployed on the same domain

// Allow Node.js to serve the static files from the built React app
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

// If a GET request comes in not handled by API endpoint, return React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
