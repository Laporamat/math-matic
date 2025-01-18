import express from "express";
import cors from "cors";

const host = "localhost";
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

// Route to add `a + b`
app.post("/aAddB", (req, res) => {
  console.log("Request body:", req.body);

  const { a, b } = req.body;

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ message: "Invalid parameters: a and b must be numbers." });
  }

  const result = a + b;

  const response = { message: "success", result };
  console.log("Response body:", response);

  res.json(response);
});

// Route to calculate `a² + b²`
app.post("/a2AddB2", (req, res) => {
  console.log("Request body:", req.body);

  const { a, b } = req.body;

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ message: "Invalid parameters: a and b must be numbers." });
  }

  const result = a ** 2 + b ** 2;

  const response = { message: "success", result };
  console.log("Response body:", response);

  res.json(response);
});

// Route to calculate `a^b`
app.post("/aPowB", (req, res) => {
  console.log("Request body:", req.body);

  const { a, b } = req.body;

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ message: "Invalid parameters: a and b must be numbers." });
  }

  const result = a ** b;

  const response = { message: "success", result };
  console.log("Response body:", response);

  res.json(response);
});

// Start the server
app.listen(port, () => console.log(`Server running on http://${host}:${port}`));
