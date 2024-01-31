-- checks to see if books_db exists, then drops it if it does
DROP DATABASE IF EXISTS books_db;
-- creates a folder called books_db (aka database)
CREATE DATABASE books_db;

--goes into the books_db database (folder)
USE books_db;

--create a table file called biographies
CREATE TABLE biographies (
  --specifies a column name id of type integer and it is required
  id INT NOT NULL,
  --specifies a column name of type varachar (100 characters or less)
  --cannot be null
  name VARCHAR(100) NOT NULL
);

