import express from "express";
import { borrow, getMyHistory } from "../controllers/borrow.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

// POST / - Borrow books (requires authentication)
router.post("/", authenticate, borrow);

// GET /my - Get my borrowing history (requires authentication)
router.get("/my", authenticate, getMyHistory);

export default router;
