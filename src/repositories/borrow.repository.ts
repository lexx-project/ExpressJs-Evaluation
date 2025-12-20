import prisma from "../prisma.js";

interface BorrowItemInput {
  bookId: string;
  qty: number;
}

/**
 * Creates a borrow transaction with stock management
 * Uses Prisma transaction to ensure atomicity
 */
export const createBorrowTransaction = async (
  userId: string,
  items: BorrowItemInput[]
) => {
  return await prisma.$transaction(async (tx) => {
    // Create the Borrow header record
    const borrow = await tx.borrow.create({
      data: {
        userId,
        status: "BORROWED",
      },
    });

    // Process each item
    for (const item of items) {
      // Check if book exists and get current stock
      const book = await tx.book.findUnique({
        where: { id: item.bookId },
      });

      if (!book) {
        throw new Error(`Book with ID ${item.bookId} not found`);
      }

      // Check if book is soft deleted
      if (book.deletedAt) {
        throw new Error(`Book "${book.title}" is no longer available`);
      }

      // Check if enough stock is available
      if (book.stock < item.qty) {
        throw new Error(
          `Insufficient stock for book "${book.title}". Available: ${book.stock}, Requested: ${item.qty}`
        );
      }

      // Decrement book stock
      await tx.book.update({
        where: { id: item.bookId },
        data: {
          stock: {
            decrement: item.qty,
          },
        },
      });

      // Create BorrowItem record
      await tx.borrowItem.create({
        data: {
          borrowId: borrow.id,
          bookId: item.bookId,
          qty: item.qty,
        },
      });
    }

    // Return the complete borrow with relations
    return await tx.borrow.findUnique({
      where: { id: borrow.id },
      include: {
        borrowItems: {
          include: {
            book: true,
          },
        },
      },
    });
  });
};

/**
 * Finds all borrow records for a specific user
 * Includes related items and book details
 */
export const findByUserId = async (userId: string) => {
  return await prisma.borrow.findMany({
    where: { userId },
    include: {
      borrowItems: {
        include: {
          book: true,
        },
      },
    },
    orderBy: {
      borrowDate: "desc",
    },
  });
};
