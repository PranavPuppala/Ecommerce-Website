/*
  Warnings:

  - A unique constraint covering the columns `[specificationId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "specificationId" INTEGER;

-- CreateTable
CREATE TABLE "Specification" (
    "id" SERIAL NOT NULL,
    "processor" TEXT,
    "graphics" TEXT,
    "memory" TEXT,
    "storage" TEXT,
    "displayType" TEXT,
    "screenSize" TEXT,
    "screenResolution" TEXT,
    "color" TEXT,
    "productId" TEXT,

    CONSTRAINT "Specification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_specificationId_key" ON "Product"("specificationId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_specificationId_fkey" FOREIGN KEY ("specificationId") REFERENCES "Specification"("id") ON DELETE SET NULL ON UPDATE CASCADE;
