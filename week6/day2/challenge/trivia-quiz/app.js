const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

const sessions = {};

const quizRouter = require('./routes/quiz')(sessions, uuidv4);

app.use('/quiz', quizRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Quiz server running at http://localhost:${PORT}/quiz`);
});
