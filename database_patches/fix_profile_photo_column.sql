-- Fix live profile photo column for smartend_users_registers.
-- Run this in phpMyAdmin / cPanel SQL while the live database is selected.

SET @has_good_profile_photo := (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'smartend_users_registers'
    AND COLUMN_NAME = 'profile_photo'
);

SET @has_bad_profile_photo := (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'smartend_users_registers'
    AND COLUMN_NAME = CONCAT(CHAR(9), 'profile_photo')
);

SET @sql := CASE
  WHEN @has_good_profile_photo = 0 AND @has_bad_profile_photo > 0 THEN 'ALTER TABLE `smartend_users_registers` CHANGE COLUMN `	profile_photo` `profile_photo` VARCHAR(255) NULL DEFAULT NULL'
  WHEN @has_good_profile_photo = 0 THEN 'ALTER TABLE `smartend_users_registers` ADD COLUMN `profile_photo` VARCHAR(255) NULL DEFAULT NULL AFTER `products_services`'
  ELSE 'SELECT ''profile_photo column already ok'' AS message'
END;

PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
