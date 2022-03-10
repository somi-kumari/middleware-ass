const express = require("express");
const app = express();

app.use(allBooks);
app.get("/books", (req, res) => {
  return res.send("Hii Users");
});
app.get("/books/:name", (req, res) => {
  console.log("books collection");
  return res.send({ bookName: req.Name });
});
function allBooks(req, re, next) {
  console.log("fetching books data");
  next();
}
app.listen(3000, () => {
  console.log("Listening port on 3000...");
});
