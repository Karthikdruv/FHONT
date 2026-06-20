/*
  Warnings:

  - A unique constraint covering the columns `[shop]` on the table `TypographySettings` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TypographySettings_shop_key" ON "TypographySettings"("shop");
