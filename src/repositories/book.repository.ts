import { hasUncaughtExceptionCaptureCallback } from "process";
import type { Prisma } from "../generated/prisma/index.js";
import prisma from "../prisma.js";

export const findAll = async () => {
  return await prisma.book.findMany({
    where: {
      deletedAt: null as any,
    },
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });
};

export const findById = async (id: string) => {
  return await prisma.book.findUnique({
    where: { id },
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });
};

export const create = async (data: Prisma.BookCreateInput) => {
  return await prisma.book.create({
    data,
  });
};

export const update = async (id: string, data: Prisma.BookUpdateInput) => {
  return await prisma.book.update({
    where: { id },
    data,
  });
};

export const softDelete = async (id: string) => {
  return await prisma.book.update({
    where: { id },
    data: {
      deletedAt: new Date(),
    },
  });
};
