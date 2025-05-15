CREATE TABLE items(
    id int ,
    nom VARCHAR(50),
    price INT
);

INSERT INTO items(id,nom,price) values (1,'Small Desk' , 100),
                        (2 , 'Large desk' ,300),
                        (3 ,'Fan' ,80);

CREATE TABLE customers (
    id INT,
    nom VARCHAR(50),
    lastnom VARCHAR(50)
);

INSERT INTO customers VALUES (1,'Gred','Jones'),
                                (2,'sandsra','Jones'),
                                (3,'scott','scott'),
                                (4,'trevor','green'),
                                (5,'melanie','johnson');


SELECT * FROM items
SELECT * FROM items WHERE price>80
SELECT * FROM items WHERE price<300
SELECT * FROM customers WHERE lastnom='Smith'
SELECT * FROM customers WHERE lastnom='Jones'
SELECT * FROM customers WHERE nom !='scott'
