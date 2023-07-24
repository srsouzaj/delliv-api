/*
  Warnings:

  - A unique constraint covering the columns `[category]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgSrc` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "imgSrc" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "products_category_key" ON "products"("category");
