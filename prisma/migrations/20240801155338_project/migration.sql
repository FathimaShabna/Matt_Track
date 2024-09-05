/*
  Warnings:

  - You are about to drop the `Creatproject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Creatproject";

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
