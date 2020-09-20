const express = require('express');
const bodyParser = require('body-parser');
const status = require('http-status-codes');
const mongoose = require('mongoose');
const cards = require('./routes/cards');
const users = require('./routes/users');

const app = express();

// connect to the MongoDB server
mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use((req, res, next) => {
  req.user = {
    _id: '5f677eafb752466f8eca00fd',
  };
  next();
});
app.use(bodyParser.json());
app.use('/cards', cards);
app.use('/users', users);

app.get('*', (req, res) => {
  res.status(status.NOT_FOUND);
  res.send({ message: 'Requested resource not found' });
});

app.listen(3000, () => {});
