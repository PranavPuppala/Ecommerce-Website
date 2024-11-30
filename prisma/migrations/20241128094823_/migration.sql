-- DropForeignKey
ALTER TABLE "Specification" DROP CONSTRAINT "Specification_productId_fkey";

-- AlterTable
ALTER TABLE "Specification" ALTER COLUMN "productId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Specification" ADD CONSTRAINT "Specification_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
