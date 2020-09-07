const express = require('express');
const path = require('path');
const status = require('http-status-codes');
const cards = require('./routes/cards');
const users = require('./routes/users');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/cards', cards);
app.use('/users', users);

app.get('*', (req, res) => {
  res.status(status.NOT_FOUND);
  res.send({ message: 'Requested resource not found' });
});

app.listen(3000, () => {});
