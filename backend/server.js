const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Simple register test route (NO DB, NO BCRYPT)
app.post("/register", (req, res) => {
  console.log("Register API HIT");
  res.json({ message: "Register working" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});