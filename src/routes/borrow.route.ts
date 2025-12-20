import express from "express";
import { borrow, getMyHistory } from "../controllers/borrow.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, borrow);
router.get("/my", authenticate, getMyHistory);

export default router;
