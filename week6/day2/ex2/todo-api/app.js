const express = require('express');
const app = express();

app.use(express.json()); 

const todoRouter = require('./routes/todos');
app.use('/todos', todoRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use('/todos', todoRouter);
