import * as bookRepo from "../repositories/book.repository.js";

export const getAllBooks = async () => {
  const books = await bookRepo.findAll();
  return books;
};

export const getBookById = async (id: string) => {
  const book = await bookRepo.findById(id);
  return book;
};

export const createBook = async (data: any) => {
  return await bookRepo.create(data);
};

export const updateBook = async (id: string, data: any) => {
  return await bookRepo.update(id, data);
};

export const deleteBook = async (id: string) => {
  return await bookRepo.softDelete(id);
};
