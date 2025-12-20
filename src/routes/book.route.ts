import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "../controllers/book.controller.js";
import {
  createBookValidator,
  deleteBookValidation,
  getBookValidation,
  updateBookValidation,
  validate,
} from "../middlewares/book.validator.js";
import { adminOnly, authenticate } from "../middlewares/auth.middleware.js";
import { uploadCover } from "../middlewares/upload.middleware.js";

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", validate(getBookValidation), getBookById);
router.post(
  "/",
  uploadCover,
  authenticate,
  adminOnly,
  validate(createBookValidator),
  createBook
);
router.put(
  "/:id",
  uploadCover,
  authenticate,
  adminOnly,
  validate(updateBookValidation),
  updateBook
);
router.delete(
  "/:id",
  authenticate,
  adminOnly,
  validate(deleteBookValidation),
  deleteBook
);

export default router;
