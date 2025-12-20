import type { Prisma } from "../generated/prisma/index.js";
import prisma from "../prisma.js";

export const findAll = async () => {
  return await prisma.category.findMany({
    where: {
      deletedAt: null,
    },
  });
};

export const findById = async (id: string) => {
  return await prisma.category.findUnique({
    where: {
      id,
      deletedAt: null,
    },
  });
};

export const create = async (data: Prisma.CategoryCreateInput) => {
  return await prisma.category.create({
    data,
  });
};

export const update = async (id: string, data: Prisma.CategoryUpdateInput) => {
  return await prisma.category.update({
    where: { id, deletedAt: null },
    data,
  });
};

export const softDelete = async (id: string) => {
  return await prisma.category.update({
    where: { id, deletedAt: null },
    data: { deletedAt: new Date() },
  });
};
