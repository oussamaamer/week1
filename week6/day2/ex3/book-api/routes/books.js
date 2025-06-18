const express = require('express');
const router = express.Router();

let books = [];
let currentId = 1;

router.get('/', (req, res) => {
  res.json(books);
});

router.post('/', (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }

  const newBook = {
    id: currentId++,
    title,
    author,
    year: year || null,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, year } = req.body;

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;
  if (year !== undefined) book.year = year;

  res.json(book);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  books.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
