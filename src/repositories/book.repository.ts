import { hasUncaughtExceptionCaptureCallback } from "process";
import type { Prisma } from "../generated/prisma/index.js";
import prisma from "../prisma.js";

interface FindAllOptions {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export const findAll = async (options: FindAllOptions = {}) => {
  const {
    page = 1,
    limit = 10,
    search,
    sortBy = "title",
    sortOrder = "asc",
  } = options;

  // Calculate pagination
  const skip = (page - 1) * limit;

  // Build where clause
  const where: any = {
    deletedAt: null as any,
  };

  // Add search filter if provided
  if (search) {
    where.OR = [
      {
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
      {
        author: {
          contains: search,
          mode: "insensitive",
        },
      },
    ];
  }

  // Execute query with pagination
  const [data, total] = await Promise.all([
    prisma.book.findMany({
      where,
      skip,
      take: limit,
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        [sortBy]: sortOrder,
      },
    }),
    prisma.book.count({ where }),
  ]);

  // Calculate metadata
  const totalPages = Math.ceil(total / limit);

  return {
    data,
    meta: {
      total,
      page,
      limit,
      totalPages,
    },
  };
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
