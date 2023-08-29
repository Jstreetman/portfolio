-- to create a new database
-- 
CREATE DATABASE defaultdb;

-- to use database
use defaultdb;

-- creating a new table


CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `adminname` varchar(50) NOT NULL,
  `adminPassword` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

CREATE TABLE contacts (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message VARCHAR(500)

);

-- to show all tables
show tables;

-- to describe table
describe contacts;
describe accounts;