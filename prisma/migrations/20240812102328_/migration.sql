/*
  Warnings:

  - You are about to drop the column `code` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "code",
ADD COLUMN     "releaseDate" TIMESTAMP(3);
