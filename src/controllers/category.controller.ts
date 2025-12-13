import { type Request, type Response } from "express";
import { CategoryServices } from "../services/category.services.js";
import { errorResponse, succesResponse } from "../utils/response.js";

export const getCategory = (req: Request, res: Response) => {
  try {
    const result = CategoryServices.findAll();
    succesResponse(res, "Categories retrieved successfully", result);
  } catch (error) {
    errorResponse(res, "Internal Server Error", 500);
  }
};

export const createCategory = (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const result = CategoryServices.create(name);
    succesResponse(res, "Category created successfully", result, 201);
  } catch (error) {
    errorResponse(res, "Internal Server Error", 500);
  }
};

export const updateCategory = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name } = req.body;
    const result = CategoryServices.update(id, name);
    succesResponse(res, "Category updated successfully", result);
  } catch (error: any) {
    errorResponse(res, error.message, 404);
  }
};

export const deleteCategory = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = CategoryServices.delete(id);
    succesResponse(res, "Category deleted successfully", result);
  } catch (error: any) {
    errorResponse(res, error.message, 404);
  }
};
