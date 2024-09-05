/*
  Warnings:

  - You are about to drop the column `duriation` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "duriation",
ADD COLUMN     "duration" TEXT;
