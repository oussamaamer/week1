const pool = require('../config/db');

const getAllBooks = async () => {
  const { rows } = await pool.query('SELECT * FROM books ORDER BY id');
  return rows;
};

const getBookById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
  return rows[0];
};

const createBook = async (title, author, publishedYear) => {
  const { rows } = await pool.query(
    'INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING *',
    [title, author, publishedYear]
  );
  return rows[0];
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
};