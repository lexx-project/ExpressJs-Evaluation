import express from "express";
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/book.controller.js";
import { createBookValidator, deleteBookValidation, getBookValidation, updateBookValidation, validate } from "../middlewares/book.validator.js";

const router = express.Router()

router.get("/", getAllBooks)
router.get("/:id", validate(getBookValidation), getBookById)
router.post("/", validate(createBookValidator), createBook)
router.put("/:id", validate(updateBookValidation), updateBook)
router.delete("/:id", validate(deleteBookValidation), deleteBook)

export default router