import * as categoryRepo from "../repositories/category.repository.js";

export const getAllCategories = async () => {
  return await categoryRepo.findAll();
};

export const getCategoryById = async (id: string) => {
  return await categoryRepo.findById(id);
};

export const createCategory = async (data: any) => {
  return await categoryRepo.create(data);
};

export const updateCategory = async (id: string, data: any) => {
  return await categoryRepo.update(id, data);
};

export const deleteCategory = async (id: string) => {
  return await categoryRepo.softDelete(id);
};
