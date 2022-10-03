/*
  Warnings:

  - You are about to drop the `_chattouser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_chattouser` DROP FOREIGN KEY `_ChatToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_chattouser` DROP FOREIGN KEY `_ChatToUser_B_fkey`;

-- DropTable
DROP TABLE `_chattouser`;
