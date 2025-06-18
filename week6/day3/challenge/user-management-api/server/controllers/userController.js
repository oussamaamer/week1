const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const register = async (req, res) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;
    const hashedPwd = await bcrypt.hash(password, 10);
    const user = { email, username, first_name, last_name };
    const userId = await userModel.createUserWithTransaction(user, hashedPwd);
    res.status(201).json({ message: 'User registered', userId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await userModel.getPasswordByUsername(username);

    if (result.rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

    const isValid = await bcrypt.compare(password, result.rows[0].password);
    if (!isValid) return res.status(401).json({ error: 'Invalid credentials' });

    res.json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const result = await userModel.getAllUsers();
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const result = await userModel.getUserById(req.params.id);
    if (result.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const result = await userModel.updateUser(req.params.id, req.body);
    res.json({ message: 'User updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login, getUsers, getUser, updateUser };
