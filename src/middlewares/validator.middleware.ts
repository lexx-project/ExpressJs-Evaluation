import { type Request, type Response, type NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { responseError } from "../utils/response.js";

export const handleValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return responseError(res, 400, "Validation Error", errors.array());
  }
  next();
};

export const validateBook = [
  body("title").notEmpty().withMessage("Judul wajib diisi"),
  body("author").notEmpty().withMessage("Penulis wajib diisi"),
  body("publishedYear")
    .isInt({ min: 1000, max: 2025 })
    .withMessage("Tahun tidak valid"),
  body("stock").isInt({ min: 0 }).withMessage("Stok tidak boleh minus"),
  body("isbn").isString().withMessage("ISBN harus string"),
  handleValidation,
];

export const validateCategory = [
  body("name").notEmpty().withMessage("Category name is required"),
  handleValidation,
];
