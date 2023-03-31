const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/endpoint', (req, res) => {
  res.send('Hello from the endpoint!');
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
