DROP DATABASE IF EXISTS track_employee_db;
CREATE DATABASE track_employee_db;

USE track_employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

