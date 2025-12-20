import type { Request, Response } from "express";
import * as bookService from "../services/book.service.js";
import { asyncHandler } from "../utils/async.handler.js";
import { successResponse } from "../utils/response.js";
import { errorResponse } from "../utils/response.js";

export const getAllBooks = asyncHandler(async (req: Request, res: Response) => {
  // Extract query parameters
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const search = req.query.search as string | undefined;
  const sortBy = (req.query.sortBy as string) || "title";
  const sortOrder = (req.query.sortOrder as "asc" | "desc") || "asc";

  // Get books with options
  const result = await bookService.getAllBooks({
    page,
    limit,
    search,
    sortBy,
    sortOrder,
  });

  return successResponse(res, "Books fetched successfully", result, 200);
});

export const getBookById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return errorResponse(res, "Book ID is required", 400);
  }
  const book = await bookService.getBookById(id);
  if (!book) {
    return errorResponse(res, "Book not found", 404);
  }
  return successResponse(res, "Book fetched successfully", book, 200);
});

export const createBook = asyncHandler(async (req: Request, res: Response) => {
  // If file was uploaded, add the path to the request body
  if (req.file) {
    req.body.cover = `/uploads/${req.file.filename}`;
  }

  const book = await bookService.createBook(req.body);
  return successResponse(res, "Book created successfully", book, 201);
});

export const updateBook = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return errorResponse(res, "Book ID is required", 400);
  }

  // If file was uploaded, add the path to the request body
  if (req.file) {
    req.body.cover = `/uploads/${req.file.filename}`;
  }

  const book = await bookService.updateBook(id, req.body);
  return successResponse(res, "Book updated successfully", book, 200);
});

export const deleteBook = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return errorResponse(res, "Book ID is required", 400);
  }

  const book = await bookService.deleteBook(id);
  return successResponse(res, "Book deleted successfully", book, 200);
});
