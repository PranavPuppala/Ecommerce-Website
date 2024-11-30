/*
  Warnings:

  - You are about to drop the column `isOnSale` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `salePrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `specificationId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `originalPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `productId` on table `Specification` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Specification" DROP CONSTRAINT "Specification_productId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "isOnSale",
DROP COLUMN "salePrice",
DROP COLUMN "specificationId",
ADD COLUMN     "originalPrice" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Specification" ALTER COLUMN "productId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Specification" ADD CONSTRAINT "Specification_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
