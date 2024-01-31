-- for POST route
-- adds new rows of information, id and name are column names, 
-- these new rows will go into biographies tables
INSERT INTO biographies (id, name)
VALUES
    ( 001, "Diary of Anne Frank"),
    ( 002, "Frida: A Biography of Frida Kahlo"),
    ( 003, "Long Walk to Freedom");

-- READ all columns from the biographies table
SELECT * FROM biographies;
