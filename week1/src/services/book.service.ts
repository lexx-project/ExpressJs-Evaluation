import { type Book, books } from "../models/book.model.js";

export class BookServices {
  static findAll(
    queryTitle?: string,
    queryMinYear?: number,
    queryMaxYear?: number
  ) {
    let result = books;

    if (queryTitle) {
      result = result.filter((book) =>
        book.title.toLowerCase().includes(queryTitle.toLowerCase())
      );
    }
    if (queryMinYear) {
      result = result.filter((book) => book.publishedYear >= queryMinYear);
    }
    if (queryMaxYear) {
      result = result.filter((book) => book.publishedYear <= queryMaxYear);
    }
    return result;
  }

  static findById(id: number): Book | undefined {
    const book = books.find((b) => b.id === id);
    if (!book) {
      throw new Error("Book not found");
    }
    return book;
  }

  static create(bookData: Omit<Book, "id">): Book | undefined {
    const newBook: Book = {
      id: books.length + 1,
      ...bookData,
    };
    books.push(newBook);
    return newBook;
  }

  static update(id: number, bookData: Partial<Book>): Book | undefined {
    const index = books.findIndex((b) => b.id === id);
    if (index === -1) {
      throw new Error("Book not found");
    }
    books[index] = { ...books[index], ...bookData } as Book;
    return books[index];
  }

  static delete(id: number): Book | undefined {
    const index = books.findIndex((b) => b.id === id);

    if (index === -1) {
      throw new Error("Book not found");
    }

    const deletedBook = books.splice(index, 1)[0];
    return deletedBook;
  }
}
