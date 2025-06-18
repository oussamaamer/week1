const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('3imad hade ra Homepage!');
});

router.get('/about', (req, res) => {
  res.send('3imad hade ra About Us page.');
});

module.exports = router;
