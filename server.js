const express = require("express");
const app = express();

// Include route files
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");

// Use routes
app.use("/user", userRoutes);
app.use("/products", productRoutes);

app.get("/", (req, resp) => {
  resp.send("<h1>Hello From Express Server!</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Is Running On Port ${port}`);
});
