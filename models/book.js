const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Array, required: true },
  description: String,
  link:String,
  image:String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
