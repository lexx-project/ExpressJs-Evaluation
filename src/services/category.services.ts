import prisma from "../prisma.js";
import type { Category } from "../generated/prisma/index.js";

export class CategoryServices {
  static async findAll() {
    return await prisma.category.findMany({
       where: {
         deletedAt: null
       }
    });
  }

  static async create(name: string) {
    return await prisma.category.create({
      data: { name }
    });
  }

  static async findById(id: string) {
    const category = await prisma.category.findUnique({
      where: { id, deletedAt: null }
    });

    if (!category) {
      throw new Error("Category not found");
    }

    return category;
  }

  static async update(id: string, name: string) {
    // Check if exists first
    await this.findById(id); 
    
    return await prisma.category.update({
      where: { id },
      data: { name }
    });
  }

  static async delete(id: string) {
    // Check if exists first
    await this.findById(id);

    return await prisma.category.update({
      where: { id },
      data: { deletedAt: new Date() }
    });
  }
}
