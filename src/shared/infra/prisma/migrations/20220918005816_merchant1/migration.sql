/*
  Warnings:

  - You are about to drop the column `cnpj` on the `company` table. All the data in the column will be lost.
  - Added the required column `slot1` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slot2` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slot3` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slot4` to the `company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `company` DROP COLUMN `cnpj`,
    ADD COLUMN `slot1` VARCHAR(191) NOT NULL,
    ADD COLUMN `slot2` VARCHAR(191) NOT NULL,
    ADD COLUMN `slot3` VARCHAR(191) NOT NULL,
    ADD COLUMN `slot4` VARCHAR(191) NOT NULL;
