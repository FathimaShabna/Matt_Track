/*
  Warnings:

  - The values [DECLIEND] on the enum `ApprovelStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ApprovelStatus_new" AS ENUM ('APPROVED', 'DECLINED');
ALTER TABLE "Project" ALTER COLUMN "approvelStatus" TYPE "ApprovelStatus_new" USING ("approvelStatus"::text::"ApprovelStatus_new");
ALTER TYPE "ApprovelStatus" RENAME TO "ApprovelStatus_old";
ALTER TYPE "ApprovelStatus_new" RENAME TO "ApprovelStatus";
DROP TYPE "ApprovelStatus_old";
COMMIT;
