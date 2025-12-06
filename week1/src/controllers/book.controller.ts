import type { Request, Response } from "express";
import { BookServices } from "../services/book.service.js";
import { responseError, responseSucces } from "../utils/response.js";

export const getBooks = (req: Request, res: Response) => {
  try {
    const { title, minYear, maxYear } = req.query;

    const result = BookServices.findAll(
      title as string | undefined,
      minYear ? Number(minYear) : undefined,
      maxYear ? Number(maxYear) : undefined
    );

    if (result.length === 0) {
      responseError(res, 404, "No books found");
      return;
    }

    responseSucces(res, result, "Books retrieved successfully");
  } catch (error: any) {
    responseError(res, 500, error.message, 500);
  }
};

export const getBookById = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const result = BookServices.findById(id);

    responseSucces(res, result, "Book retrieved successfully");
  } catch (error: any) {
    responseError(res, 404, error.message);
  }
};

export const createBook = (req: Request, res: Response) => {
  try {
    const bookData = req.body;
    const result = BookServices.create(bookData);
    responseSucces(res, result, "Book created successfully", 201);
  } catch (error: any) {
    responseError(res, error.message);
  }
};
export const updateBook = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const bookData = req.body;
    const result = BookServices.update(id, bookData);

    responseSucces(res, result, "Book updated successfully", 201);
  } catch (error: any) {
    responseError(res, 404, error.message);
  }
};

export const deleteBook = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = BookServices.delete(id);

    responseSucces(res, result, "Book deleted successfully");
  } catch (error: any) {
    responseError(res, 404, error.message);
  }
};
