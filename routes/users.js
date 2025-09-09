const express = require("express");
const router = express.Router();

// Define a route
router.get("/", (req, res) => {
  res.send("User Home");
});

router.get("/profile", (req, res) => {
  res.send("User Profile Page");
});

// export the router module so that server.js file can use it
module.exports = router; 
