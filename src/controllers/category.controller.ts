import { type Request, type Response } from "express";
import { CategoryServices } from "../services/category.services.js";
import { responseError, responseSucces } from "../utils/response.js";

export const getCategory = (req: Request, res: Response) => {
  try {
    const result = CategoryServices.findAll();
    responseSucces(res, result, "Categories retrieved successfully");
  } catch (error) {
    responseError(res, 500, "Internal Server Error");
  }
};

export const createCategory = (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const result = CategoryServices.create(name);
    responseSucces(res, result, "Category created successfully", 201);
  } catch (error) {
    responseError(res, 500, "Internal Server Error");
  }
};

export const updateCategory = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name } = req.body;
    const result = CategoryServices.update(id, name);
    responseSucces(res, result, "Category updated successfully");
  } catch (error: any) {
    responseError(res, 404, error.message);
  }
};

export const deleteCategory = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = CategoryServices.delete(id);
    responseSucces(res, result, "Category deleted successfully");
  } catch (error: any) {
    responseError(res, 404, error.message);
  }
};
