const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

const upload = multer({ dest: "uploads/" });

// In-memory metadata
let images = [];

app.post("/upload", upload.single("image"), (req, res) => {
  const { title, description } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).send("No file uploaded.");
  }

  images.push({
    filename: file.filename,
    title,
    description
  });

  res.send("File uploaded successfully.");
});

app.get("/uploads", (req, res) => {
  res.json(images);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));