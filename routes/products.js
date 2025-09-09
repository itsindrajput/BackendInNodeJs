const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Products Home");
});

router.get("/:id", (req, res) => {
  res.send(`Product ID: ${req.params.id}`);
});

module.exports = router;
