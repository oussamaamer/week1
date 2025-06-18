const pool = require('../config/db');

const createUserWithTransaction = async (user, hashedPwd) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const userInsert = await client.query(
      `INSERT INTO users (email, username, first_name, last_name)
       VALUES ($1, $2, $3, $4) RETURNING id`,
      [user.email, user.username, user.first_name, user.last_name]
    );

    const userId = userInsert.rows[0].id;

    await client.query(
      `INSERT INTO hashpwd (username, password) VALUES ($1, $2)`,
      [user.username, hashedPwd]
    );

    await client.query('COMMIT');
    return userId;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
};

const getAllUsers = () => pool.query('SELECT * FROM users');

const getUserById = (id) =>
  pool.query('SELECT * FROM users WHERE id = $1', [id]);

const updateUser = (id, user) =>
  pool.query(
    `UPDATE users SET email=$1, username=$2, first_name=$3, last_name=$4 WHERE id=$5`,
    [user.email, user.username, user.first_name, user.last_name, id]
  );

const getPasswordByUsername = (username) =>
  pool.query('SELECT password FROM hashpwd WHERE username = $1', [username]);

module.exports = {
  createUserWithTransaction,
  getAllUsers,
  getUserById,
  updateUser,
  getPasswordByUsername,
};
