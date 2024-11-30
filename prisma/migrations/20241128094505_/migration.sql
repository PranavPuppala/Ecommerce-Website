/*
  Warnings:

  - The primary key for the `Specification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[productId]` on the table `Specification` will be added. If there are existing duplicate values, this will fail.
  - Made the column `productId` on table `Specification` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_specificationId_fkey";

-- DropIndex
DROP INDEX "Product_specificationId_key";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "specificationId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Specification" DROP CONSTRAINT "Specification_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "productId" SET NOT NULL,
ADD CONSTRAINT "Specification_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Specification_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Specification_productId_key" ON "Specification"("productId");

-- AddForeignKey
ALTER TABLE "Specification" ADD CONSTRAINT "Specification_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
