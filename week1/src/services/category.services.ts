import { categories, type Category } from "../models/category.model.js";

export class CategoryServices {
  static findAll() {
    return categories;
  }

  static create(name: string) {
    const newCategory = { id: categories.length + 1, name: name };
    categories.push(newCategory);
    return newCategory;
  }

  static update(id: number, name: string): Category {
    const index = categories.findIndex((category) => category.id === id);

    if (index === -1) {
      throw new Error("Category not found");
    }

    categories[index] = { ...categories[index], name };
    return categories[index];
  }

  static delete(id: number): Category {
    const index = categories.findIndex((category) => category.id === id);

    if (index === -1) {
      throw new Error("Category not found");
    }

    const deletedCategory = categories.splice(index, 1)[0];
    return deletedCategory;
  }
}
