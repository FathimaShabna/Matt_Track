/*
  Warnings:

  - The `approvelStatus` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `projectStatus` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `projectType` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "approvelStatus",
ADD COLUMN     "approvelStatus" TEXT,
DROP COLUMN "projectStatus",
ADD COLUMN     "projectStatus" TEXT,
DROP COLUMN "projectType",
ADD COLUMN     "projectType" TEXT;
