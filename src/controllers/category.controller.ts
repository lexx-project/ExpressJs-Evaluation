import { type Request, type Response } from "express";
import { asyncHandler } from "../utils/async.handler.js";
import * as categoryService from "../services/category.services.js";
import { errorResponse, successResponse } from "../utils/response.js";

export const getCategory = asyncHandler(
  async (_req: Request, res: Response) => {
    const result = await categoryService.getAllCategories();
    successResponse(res, "Categories retrieved successfully", result);
  }
);

export const getCategoryById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await categoryService.getCategoryById(id!);
    successResponse(res, "Category retrieved successfully", result);
  }
);

export const createCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const { name } = req.body;
    const result = await categoryService.createCategory({ name });
    successResponse(res, "Category created successfully", result, 201);
  }
);

export const updateCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    const result = await categoryService.updateCategory(id!, { name });
    successResponse(res, "Category updated successfully", result);
  }
);

export const deleteCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await categoryService.deleteCategory(id!);
    successResponse(res, "Category deleted successfully", result);
  }
);
