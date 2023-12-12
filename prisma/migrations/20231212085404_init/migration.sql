/*
  Warnings:

  - You are about to drop the `Date` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Date" DROP CONSTRAINT "Date_yardSaleId_fkey";

-- DropTable
DROP TABLE "Date";

-- CreateTable
CREATE TABLE "YardSaleDate" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "yardSaleId" TEXT NOT NULL,

    CONSTRAINT "YardSaleDate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "YardSaleDate" ADD CONSTRAINT "YardSaleDate_yardSaleId_fkey" FOREIGN KEY ("yardSaleId") REFERENCES "YardSale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
