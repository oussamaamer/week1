from db import get_connection

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        conn = get_connection()
        with conn:
            with conn.cursor() as cur:
                cur.execute(
                    "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)",
                    (self.name, self.price)
                )
        conn.close()

    def delete(self):
        conn = get_connection()
        with conn:
            with conn.cursor() as cur:
                cur.execute("DELETE FROM Menu_Items WHERE item_name = %s", (self.name,))
        conn.close()

    def update(self, new_name, new_price):
        conn = get_connection()
        with conn:
            with conn.cursor() as cur:
                cur.execute(
                    "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s",
                    (new_name, new_price, self.name)
                )
        conn.close()
        self.name = new_name
        self.price = new_price
