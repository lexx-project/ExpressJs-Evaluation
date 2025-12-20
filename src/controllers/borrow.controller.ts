import type { Request, Response } from "express";
import * as borrowService from "../services/borrow.service.js";
import { asyncHandler } from "../utils/async.handler.js";
import { successResponse } from "../utils/response.js";

export const borrow = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const result = await borrowService.borrowBooks(userId, req.body);
  return successResponse(res, "Books borrowed successfully", result, 201);
});

export const getMyHistory = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?.id;

    if (!userId) {
      throw new Error("User not authenticated");
    }

    const history = await borrowService.getMyBorrowings(userId);
    return successResponse(
      res,
      "Borrowing history fetched successfully",
      history,
      200
    );
  }
);
