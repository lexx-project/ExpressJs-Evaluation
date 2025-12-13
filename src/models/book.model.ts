export interface Book {
  id: number;
  title: string;
  author: string;
  publishedYear: number;
  stock: number;
  isbn: string;
}

export let books: Book[] = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
    stock: 10,
    isbn: "978-0446310789",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
    stock: 5,
    isbn: "978-0451524935",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
    stock: 7,
    isbn: "978-0743273565",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishedYear: 1813,
    stock: 12,
    isbn: "978-0141439518",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishedYear: 1951,
    stock: 8,
    isbn: "978-0316769488",
  },
];
