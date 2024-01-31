CREATE DATABASE inventory_db;

-- Create two new databases --
DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

-- go into the inventory_db, like changing a directory
-- Use inventory_db --
USE inventory_db;

-- See database in use --
SELECT DATABASE();

-- Database Server : listens to requests and returns data--
-- Data in a query : folder
-- Table in a query : file similar to an excel file ort csv
-- Use named_db : go into the folder called named_db 
-- 