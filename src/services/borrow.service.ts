import * as borrowRepo from "../repositories/borrow.repository.js";

interface BorrowBooksPayload {
  items: {
    bookId: string;
    qty: number;
  }[];
}

/**
 * Service to handle borrowing books
 * Validates payload and delegates to repository
 */
export const borrowBooks = async (
  userId: string,
  payload: BorrowBooksPayload
) => {
  // Validate that items array exists and is not empty
  if (!payload.items || payload.items.length === 0) {
    throw new Error("Items array cannot be empty");
  }

  // Validate each item has required fields
  for (const item of payload.items) {
    if (!item.bookId) {
      throw new Error("Each item must have a bookId");
    }
    if (!item.qty || item.qty <= 0) {
      throw new Error("Each item must have a valid quantity (qty > 0)");
    }
  }

  // Call repository to create transaction
  return await borrowRepo.createBorrowTransaction(userId, payload.items);
};

/**
 * Service to get borrowing history for a user
 */
export const getMyBorrowings = async (userId: string) => {
  return await borrowRepo.findByUserId(userId);
};
