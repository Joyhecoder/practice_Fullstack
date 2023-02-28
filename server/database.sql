CREATE DATABASE pernPractice2;
CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY,
    fName VARCHAR(30),
    lName VARCHAR(50),
    email VARCHAR,
    password VARCHAR
);
