const express = require('express');
const app = express();

const router = require('./routes/index');

app.use('/', router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
