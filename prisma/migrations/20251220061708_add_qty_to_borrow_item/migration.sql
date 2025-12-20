/*
  Warnings:

  - Added the required column `qty` to the `borrow_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "borrow_items" ADD COLUMN     "qty" INTEGER NOT NULL;
