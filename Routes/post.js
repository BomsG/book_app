const { Router } = require("express");

const router = Router();

router.get("/", (req, res, next) => {
  res.end("hello post");
});

module.exports = router;
