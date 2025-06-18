const express = require('express');
const app = express();

app.use(express.json()); 

const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use('/books', booksRouter);
