const express = require('express');

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

module.exports = (sessions, uuidv4) => {
  const router = express.Router();

  router.use((req, res, next) => {
    let sessionId = req.headers['x-session-id'];

    if (!sessionId || !sessions[sessionId]) {
      sessionId = uuidv4();
      sessions[sessionId] = {
        currentQuestion: 0,
        score: 0,
      };
      res.set('X-Session-Id', sessionId);
    }

    req.sessionId = sessionId;
    req.session = sessions[sessionId];
    next();
  });

  router.get('/', (req, res) => {
    const { currentQuestion } = req.session;

    if (currentQuestion >= triviaQuestions.length) {
      return res.json({
        message: "Quiz completed! Get your score at /quiz/score",
      });
    }

    res.json({
      questionNumber: currentQuestion + 1,
      question: triviaQuestions[currentQuestion].question,
    });
  });

  router.post('/', (req, res) => {
    const { currentQuestion, score } = req.session;

    if (currentQuestion >= triviaQuestions.length) {
      return res.json({
        message: "Quiz already completed! See your score at /quiz/score",
      });
    }

    const userAnswer = req.body.answer;
    if (!userAnswer) {
      return res.status(400).json({ error: "Answer is required in request body." });
    }

    const correctAnswer = triviaQuestions[currentQuestion].answer;

    let isCorrect = false;
    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      req.session.score++;
      isCorrect = true;
    }

    req.session.currentQuestion++;

    if (req.session.currentQuestion >= triviaQuestions.length) {
      return res.json({
        correct: isCorrect,
        message: "Quiz finished! Check your score at /quiz/score",
      });
    }

    res.json({
      correct: isCorrect,
      nextQuestion: triviaQuestions[req.session.currentQuestion].question,
    });
  });

  router.get('/score', (req, res) => {
    const { score, currentQuestion } = req.session;
    if (currentQuestion < triviaQuestions.length) {
      return res.json({
        message: "Quiz not finished yet. Keep going!",
        currentQuestion: currentQuestion + 1,
      });
    }
    res.json({
      finalScore: score,
      totalQuestions: triviaQuestions.length,
    });
  });

  return router;
};
