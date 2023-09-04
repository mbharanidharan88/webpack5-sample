const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Test Content");
});

app.listen(3000, function () {
  console.info("Application is running on http://localhost:3000/");
});
