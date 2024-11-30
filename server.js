// Import Express
import express from "express";
import connectToDatabase from "./db.js";

// Initialize the app
const app = express();

// Define a port
const PORT = 4000;

// Middleware to parse JSON requests
app.use(express.json());

connectToDatabase();
// Sample route
app.get("/", (req, res) => {
  res.send("Hello, World with Import!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
