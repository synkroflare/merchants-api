-- DropIndex
DROP INDEX `user_roomId_fkey` ON `user`;

-- AlterTable
ALTER TABLE `user` ALTER COLUMN `roomId` DROP DEFAULT;
