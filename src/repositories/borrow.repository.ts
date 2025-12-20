import prisma from "../prisma.js";

interface BorrowItemInput {
  bookId: string;
  qty: number;
}

export const createBorrowTransaction = async (
  userId: string,
  items: BorrowItemInput[]
) => {
  return await prisma.$transaction(async (tx) => {
    const borrow = await tx.borrow.create({
      data: {
        userId,
        status: "BORROWED",
      },
    });

    for (const item of items) {
      const book = await tx.book.findUnique({
        where: { id: item.bookId },
      });

      if (!book) {
        throw new Error(`Book with ID ${item.bookId} not found`);
      }

      if (book.deletedAt) {
        throw new Error(`Book "${book.title}" is no longer available`);
      }

      if (book.stock < item.qty) {
        throw new Error(
          `Insufficient stock for book "${book.title}". Available: ${book.stock}, Requested: ${item.qty}`
        );
      }

      await tx.book.update({
        where: { id: item.bookId },
        data: {
          stock: {
            decrement: item.qty,
          },
        },
      });

      await tx.borrowItem.create({
        data: {
          borrowId: borrow.id,
          bookId: item.bookId,
          qty: item.qty,
        },
      });
    }

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
