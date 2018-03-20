CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price INT NOT NULL,
stock_quantity INT NOT NULL

);

