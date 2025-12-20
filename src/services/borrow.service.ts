import * as borrowRepo from "../repositories/borrow.repository.js";

interface BorrowBooksPayload {
  items: {
    bookId: string;
    qty: number;
  }[];
}

export const borrowBooks = async (
  userId: string,
  payload: BorrowBooksPayload
) => {
  if (!payload.items || payload.items.length === 0) {
    throw new Error("Items array cannot be empty");
  }

  for (const item of payload.items) {
    if (!item.bookId) {
      throw new Error("Each item must have a bookId");
    }
    if (!item.qty || item.qty <= 0) {
      throw new Error("Each item must have a valid quantity (qty > 0)");
    }
  }

  return await borrowRepo.createBorrowTransaction(userId, payload.items);
};

export const getMyBorrowings = async (userId: string) => {
  return await borrowRepo.findByUserId(userId);
};
