const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecommerce"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

// Get all products
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Add a product
app.post("/products", (req, res) => {
  const { name, price } = req.body;
  db.query("INSERT INTO products (name, price) VALUES (?, ?)", [name, price], err => {
    if (err) throw err;
    res.json({ message: "Product added!" });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
