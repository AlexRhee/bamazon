USE bamazon;

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
 ("Basketball Jersey", "Apparel", 80, 25),
 ("Football Jersey", "Apparel", 80, 45), 
 ("Soccer Jersey", "Apparel", 80, 2),
 ("Jordan Basketball Shoes", "Shoes", 180, 11),
 ("Nike Basketball Shoes", "Shoes", 140, 30),
 ("Adidas Basketball Shoes", "Shoes", 100, 85),
 ("Spalding Basketball", "Accessories", 60, 60),
 ("Nike Headband", "Accessories", 12, 200),
 ("Nike Wristband", "Accessories", 8, 250),
 ("Jordan Backpack", "Accessories", 95, 15);
 