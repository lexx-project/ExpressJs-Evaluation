import express from "express";
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/book.controller.js";
import { createBookValidator, deleteBookValidation, getBookValidation, updateBookValidation } from "../middlewares/book.validator.js";

const router = express.Router()

router.get("/api/books", getAllBooks)
router.get("/api/books/:id", getBookValidation, getBookById)
router.post("/api/books",createBookValidator, createBook)
router.put("/api/books/:id",updateBookValidation, updateBook)
router.delete("/api/books/:id", deleteBookValidation, deleteBook)

export default router