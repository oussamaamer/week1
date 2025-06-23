const express = require('express');
const app = express();
const PORT = 3001;

const cors = require('cors');
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint
app.get('/api/hello', (req, res) => {
    res.send('Hello From Express');
});

// POST endpoint
app.post('/api/world', (req, res) => {
    console.log('Received POST request with body:', req.body);
    const { message } = req.body;
    res.send(`I received your POST request. This is what you sent me: ${message}`);
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

