const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: [true, "Same title must not exist"],
  },
  year: {
    type: Number,
    required: true,
    max: [2021, "year must be less than or equals 2021"],
  },
  description: {
    type: "string",
    required: true,
  },
  author: {
    type: "string",
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  ReadAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("books", bookSchema);
