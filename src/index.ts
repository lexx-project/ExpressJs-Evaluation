import app from "./app.js";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

// Serve static files from public/uploads directory
app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
