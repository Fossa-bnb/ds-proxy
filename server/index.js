const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const port = process.env.PORT || 4000;

app.use(morgan('dev'));

app.use('/', (req, res, next) => {
  console.log(`${req.method} received from ${req.url}`);
  next();
});

app.use(express.static(path.resolve(__dirname, '../')));

app.listen(port, () => console.log(`...listening on http://localhost:${port}`));