-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_roomId_fkey`;

-- AlterTable
ALTER TABLE `user` MODIFY `roomId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `room`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
