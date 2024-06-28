const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello from the Node.js Backend!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

