// Import Express
import express from "express";

// Initialize the app
const app = express();

// Define a port
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Hello, World with Import!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
