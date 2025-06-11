from db import get_connection
import psycopg2.extras

class User:
    @staticmethod
    def find_by_username(username):
        conn = get_connection()
        with conn:
            with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cur:
                cur.execute("SELECT * FROM users WHERE username = %s", (username,))
                return cur.fetchone()
    
    @staticmethod
    def create(username, hashed_password):
        conn = get_connection()
        with conn:
            with conn.cursor() as cur:
                cur.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, hashed_password))
