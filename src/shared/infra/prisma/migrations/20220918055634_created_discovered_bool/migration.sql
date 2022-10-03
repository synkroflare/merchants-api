-- AlterTable
ALTER TABLE `company` ADD COLUMN `discovered` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `status` BOOLEAN NOT NULL DEFAULT true;
