import express from "express";
import {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";
import { validateCategory } from "../middlewares/validator.middleware.js";

const router = express.Router();

router.get("/", getCategory);
router.post("/", validateCategory, createCategory);
router.put("/:id", validateCategory, updateCategory);
router.delete("/:id", deleteCategory);

export default router;
