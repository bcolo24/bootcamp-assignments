DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
USE books_db;

-- Add biography table --
CREATE TABLE biographies (
    id INT NOT NULL, 

    name VARCHAR(100) NOT NULL
);

INSERT INTO biographies ( id, name )
VALUES (1, "John F. Kennedy");

SELECT * FROM biographies;
-- to see more info of table
DESCRIBE biographies;

SHOW TABLES;