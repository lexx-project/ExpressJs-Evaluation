import { body, param } from "express-validator";
import { handleValidation } from "./validator.middleware.js";

export const createCategoryValidator = [
  body("name").notEmpty().withMessage("Category name is required"),
  handleValidation,
];

export const updateCategoryValidator = [
  param("id").isInt().withMessage("Invalid ID format"),
  body("name").notEmpty().withMessage("Category name is required"),
  handleValidation,
];

export const deleteCategoryValidator = [
  param("id").isInt().withMessage("Invalid ID format"),
  handleValidation,
];
