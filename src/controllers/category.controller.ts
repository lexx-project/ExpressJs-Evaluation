import { type Request, type Response } from "express";
import { asyncHandler } from "../utils/async.handler.js";
import { CategoryServices } from "../services/category.services.js";
import { errorResponse, succesResponse } from "../utils/response.js";

export const getCategory = asyncHandler(async (req: Request, res: Response) => {
  const result = await CategoryServices.findAll();
  succesResponse(res, "Categories retrieved successfully", result);
});

export const getCategoryById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryServices.findById(id!);
  succesResponse(res, "Category retrieved successfully", result);
});

export const createCategory = asyncHandler(async (req: Request, res: Response) => {
  const { name } = req.body;
  const result = await CategoryServices.create(name);
  succesResponse(res, "Category created successfully", result, 201);
});

export const updateCategory = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const result = await CategoryServices.update(id!, name); // id! because route validation should ensure it exists
  succesResponse(res, "Category updated successfully", result);
});

export const deleteCategory = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryServices.delete(id!);
  succesResponse(res, "Category deleted successfully", result);
});
