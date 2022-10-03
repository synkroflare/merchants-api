-- DropForeignKey
ALTER TABLE `department` DROP FOREIGN KEY `Department_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_chatId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_permissionId_fkey`;

-- AlterTable
ALTER TABLE `company` MODIFY `status` BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE `department` ADD CONSTRAINT `department_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `permission`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `message_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `chat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `_chattocontact` RENAME INDEX `_ChatToContact_AB_unique` TO `_chatTocontact_AB_unique`;

-- RenameIndex
ALTER TABLE `_chattocontact` RENAME INDEX `_ChatToContact_B_index` TO `_chatTocontact_B_index`;

-- RenameIndex
ALTER TABLE `_chattouser` RENAME INDEX `_ChatToUser_AB_unique` TO `_chatTouser_AB_unique`;

-- RenameIndex
ALTER TABLE `_chattouser` RENAME INDEX `_ChatToUser_B_index` TO `_chatTouser_B_index`;

-- RenameIndex
ALTER TABLE `_companytocontact` RENAME INDEX `_CompanyToContact_AB_unique` TO `_companyTocontact_AB_unique`;

-- RenameIndex
ALTER TABLE `_companytocontact` RENAME INDEX `_CompanyToContact_B_index` TO `_companyTocontact_B_index`;

-- RenameIndex
ALTER TABLE `_departmenttouser` RENAME INDEX `_DepartmentToUser_AB_unique` TO `_departmentTouser_AB_unique`;

-- RenameIndex
ALTER TABLE `_departmenttouser` RENAME INDEX `_DepartmentToUser_B_index` TO `_departmentTouser_B_index`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_cpf_key` TO `user_cpf_key`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_email_key` TO `user_email_key`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_username_key` TO `user_username_key`;
