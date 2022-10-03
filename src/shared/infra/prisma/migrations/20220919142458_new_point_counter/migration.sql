/*
  Warnings:

  - You are about to drop the column `companyId` on the `department` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `department` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `department` table. All the data in the column will be lost.
  - You are about to drop the `_departmenttouser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `points` to the `department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reasearches` to the `department` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_departmenttouser` DROP FOREIGN KEY `_DepartmentToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_departmenttouser` DROP FOREIGN KEY `_DepartmentToUser_B_fkey`;

-- DropForeignKey
ALTER TABLE `department` DROP FOREIGN KEY `department_companyId_fkey`;

-- AlterTable
ALTER TABLE `department` DROP COLUMN `companyId`,
    DROP COLUMN `imageUrl`,
    DROP COLUMN `name`,
    ADD COLUMN `points` INTEGER NOT NULL,
    ADD COLUMN `reasearches` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_departmenttouser`;
