/*
  Warnings:

  - The `areas` column on the `UpdatedData` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "UpdatedData" DROP COLUMN "areas",
ADD COLUMN     "areas" TEXT[];
