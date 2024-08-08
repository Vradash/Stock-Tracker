CREATE SCHEMA `stocktrackerdb` ;

CREATE TABLE `stocktrackerdb`.`prices` (
`priceid` INT NOT NULL,
`itemname` VARCHAR(255) NULL,
`itemprice` FLOAT NULL,
PRIMARY KEY (`priceid`));

LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:/<YOUR_FILE_PATH>/prices.csv' 
INTO TABLE `prices`
CHARACTER SET armscii8 
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' LINES TERMINATED BY '\r\n' ;

CREATE TABLE `stocktrackerdb`.`item_quan_price` (
`itemid` INT NOT NULL AUTO_INCREMENT,
`itemname` VARCHAR(255) NULL,
`quantity` VARCHAR(45) NULL,
PRIMARY KEY (`itemid`));

LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:/<YOUR_FILE_PATH>/item_quan_price.csv' 
INTO TABLE `prices`
CHARACTER SET armscii8 
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' LINES TERMINATED BY '\r\n' ;

CREATE TABLE `stocktrackerdb`.`itemlist` (
`id` INT NOT NULL AUTO_INCREMENT,
`itemname` VARCHAR(255) NULL,
`quantity` VARCHAR(45) NULL,
`price` FLOAT NULL,
PRIMARY KEY (`id`));

-- SELECT itemid AS id,prices.itemname,quantity,itemprice AS price
-- FROM item_quan_price
-- LEFT JOIN prices ON itemid=priceid;

INSERT INTO itemlist(id, itemname, quantity, price)
  SELECT itemid AS id,prices.itemname,quantity,itemprice AS price
	FROM item_quan_price
	LEFT JOIN prices ON itemid=priceid;

CREATE TABLE `stocktrackerdb`.`recommendations` (
`recommendationid` INT NOT NULL AUTO_INCREMENT,
`antecedents` VARCHAR(45) NULL,
`consequents` VARCHAR(45) NULL,
PRIMARY KEY (`recommendationid`));

LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:/<YOUR_FILE_PATH>/assosciation.csv' 
INTO TABLE `recommendations`
CHARACTER SET armscii8 
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' LINES TERMINATED BY '\r\n' ;

