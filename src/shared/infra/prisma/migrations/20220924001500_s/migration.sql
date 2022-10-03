/*
  Warnings:

  - Made the column `roomId` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_roomId_fkey`;

-- AlterTable
ALTER TABLE `user` MODIFY `roomId` INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
