// Express web server
// Runs on http://localhost:3001/

const express = require("express");

// Heroku will provide environment variable for port or 3001
const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
