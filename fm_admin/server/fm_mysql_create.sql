CREATE TABLE `users` (
	`id` int(100) NOT NULL AUTO_INCREMENT,
	`name` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL UNIQUE,
	`password` varchar(1000) NOT NULL,
	`userkey` varchar(1000) NOT NULL,
	`roleid` int(100) NOT NULL,
	`createdAt` int(100) NOT NULL,
	`updatedAt` int(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
	`id` int(100) NOT NULL AUTO_INCREMENT,
	`name` varchar(100) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `main_category` (
	`id` int(100) NOT NULL AUTO_INCREMENT,
	`name` varchar(100) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `sub_category` (
	`id` int(100) NOT NULL AUTO_INCREMENT,
	`name` varchar(100) NOT NULL,
	`type` int(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `shops` (
	`id` int(100) NOT NULL AUTO_INCREMENT,
	`name` varchar(100) NOT NULL,
	`addressId` int(100) NOT NULL,
	`bannerImage` varchar(100) NOT NULL,
	`createdAt` int(100) NOT NULL,
	`updatedAt` int(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `address` (
	`id` int(100) NOT NULL AUTO_INCREMENT,
	`address1` varchar(100) NOT NULL,
	`address2` varchar(100) NOT NULL,
	`phone1` varchar(100) NOT NULL,
	`phone2` varchar(100) NOT NULL,
	`area` varchar(100) NOT NULL,
	`city` varchar(100) NOT NULL,
	`pin` varchar(100) NOT NULL,
	`state` varchar(100) NOT NULL,
	`country` varchar(100) NOT NULL,
	`latitude` varchar(100) NOT NULL,
	`longitude` varchar(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ratings` (
	`id` int(100) NOT NULL AUTO_INCREMENT,
	`shopId` int(100) NOT NULL,
	`userId` int(100) NOT NULL,
	`value` int(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `reviews` (
	`id` int(100) NOT NULL AUTO_INCREMENT,
	`shop_id` int(100) NOT NULL,
	`user_id` int(100) NOT NULL,
	`reviews` int(100) NOT NULL,
	`createdAt` int(100) NOT NULL,
	`updatedAt` int(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `shop_images` (
	`id` int(100) NOT NULL AUTO_INCREMENT,
	`shopId` int(100) NOT NULL,
	`imageUrl` varchar(1000) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `shop_cateogory` (
	`id` int(100) NOT NULL AUTO_INCREMENT,
	`shopId` int(100) NOT NULL,
	`categoryId` int(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `areas` (
	`id` int(100) NOT NULL AUTO_INCREMENT,
	`name` varchar(100) NOT NULL,
	`cityId` int(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `cities` (
	`id` int(100) NOT NULL AUTO_INCREMENT,
	`name` varchar(100) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `users` ADD CONSTRAINT `users_fk0` FOREIGN KEY (`roleid`) REFERENCES `roles`(`id`);

ALTER TABLE `sub_category` ADD CONSTRAINT `sub_category_fk0` FOREIGN KEY (`type`) REFERENCES `main_category`(`id`);

ALTER TABLE `shops` ADD CONSTRAINT `shops_fk0` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`);

ALTER TABLE `ratings` ADD CONSTRAINT `ratings_fk0` FOREIGN KEY (`shopId`) REFERENCES `shops`(`id`);

ALTER TABLE `ratings` ADD CONSTRAINT `ratings_fk1` FOREIGN KEY (`userId`) REFERENCES `users`(`id`);

ALTER TABLE `reviews` ADD CONSTRAINT `reviews_fk0` FOREIGN KEY (`shop_id`) REFERENCES `shops`(`id`);

ALTER TABLE `reviews` ADD CONSTRAINT `reviews_fk1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `shop_images` ADD CONSTRAINT `shop_images_fk0` FOREIGN KEY (`shopId`) REFERENCES `shops`(`id`);

ALTER TABLE `shop_cateogory` ADD CONSTRAINT `shop_cateogory_fk0` FOREIGN KEY (`shopId`) REFERENCES `shops`(`id`);

ALTER TABLE `shop_cateogory` ADD CONSTRAINT `shop_cateogory_fk1` FOREIGN KEY (`categoryId`) REFERENCES `sub_category`(`id`);

ALTER TABLE `areas` ADD CONSTRAINT `areas_fk0` FOREIGN KEY (`cityId`) REFERENCES `cities`(`id`);

