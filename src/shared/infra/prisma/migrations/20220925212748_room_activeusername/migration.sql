-- AlterTable
ALTER TABLE `room` ADD COLUMN `activeUserName` VARCHAR(191) NOT NULL DEFAULT 'default_active_user';
