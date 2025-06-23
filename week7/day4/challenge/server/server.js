const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello From Express' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.post('/api/world', (req, res) => {
  console.log('Received POST request:', req.body);
  res.send({
    message: `I received your POST request. This is what you sent me: ${req.body.input}`
  });
});
