const express = require('express');
const app = express();
const path = require('path');

app.use('/', (req, res, next) => {
  console.log(`${req.method} received from ${req.url}`);
  next();
});

app.use(express.static(path.resolve(__dirname, '../')));

app.listen(4000, () => console.log('...listening on port 4000'));