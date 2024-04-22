const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
require("dotenv").config();
const user = require("./Routes/user");
const post = require("./Routes/post");
const bookRouter = require("./Routes/books");

const app = express();
const Port = 8000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:8000" }));

app.use("/users", user);
app.use("/posts", post);
app.use("/books", bookRouter);

connect(process.env.MONGO_URI)
  .then(
    app.listen(Port, () => {
      console.log(`Server is running on http://localhost:${Port}`);
    })
  )
  .catch((error) => {
    console.log(error);
  });
