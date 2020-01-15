DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  item_id DECIMAL NULL,
  product_name VARCHAR(105) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(45) NULL,
  Stock_quantity DECIMAL(10,4)NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, price)
VALUES (12, "water 12 pack", 15);

INSERT INTO products (item_id, product_name, price)
VALUES (9000, "The BFG 9000", 9000);

INSERT INTO products (item_id, product_name, price)
VALUES (15, "The force", 114);

INSERT INTO products (item_id, product_name, price)
VALUES (51, "A portal to Hell", 666);

INSERT INTO products (item_id, product_name, price)
VALUES (999, "the pretor suit", 92);

INSERT INTO products (item_id, product_name, price)
VALUES (100, "an AI companion", 234);

INSERT INTO products (item_id, product_name, price)
VALUES (876, "Samsung galaxy 20", 2000);

INSERT INTO products (item_id, product_name, price)
VALUES (434, "The rights to Half Life", 40000000);

INSERT INTO products (item_id, product_name, price)
VALUES (432, "A lightsaber", 600);

INSERT INTO products (item_id, product_name, price)
VALUES (122, "Starcruiser", 50000);