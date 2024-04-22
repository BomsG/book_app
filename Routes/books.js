const { Router } = require("express");
const bookSchema = require("../model/book");

const bookRouter = Router();

bookRouter.get("/", (req, res, next) => {
  bookSchema
    .find({})
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

bookRouter.get("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  bookSchema
    .findById(id)
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

bookRouter.post("/", (req, res, next) => {
  const book = req.body;
  console.log(book);
  bookSchema
    .create(book)
    .then((book) => {
      res.status(200).send({
        message: "book successfully added",
        data: book,
      });
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

bookRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const book = req.body;

  bookSchema
    .findByIdAndUpdate(id, book, { new: true })
    .then((book) => {
      res.status(200).send({
        message: "book successfully updated",
        data: book,
      });
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

bookRouter.delete("/:id", (req, res) => {
  const id = req.params.id;

  bookSchema
    .findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({
        message: "book successfully deleted",
        data: "",
      });
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

module.exports = bookRouter;
