/*
  Warnings:

  - You are about to drop the column `endDate` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Project` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('CLIENT', 'INTERNAL');

-- CreateEnum
CREATE TYPE "ApprovelStatus" AS ENUM ('APPROVED', 'DECLIEND');

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('STARTED', 'IN_PROGRESS', 'CLOSED');

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "endDate",
DROP COLUMN "startDate",
ADD COLUMN     "duriation" TEXT,
ADD COLUMN     "noofsprint" TEXT;
