-- DropIndex
DROP INDEX `Todos_title_key` ON `Todos`;

-- AlterTable
ALTER TABLE `Todos` MODIFY `title` VARCHAR(50) NOT NULL;
