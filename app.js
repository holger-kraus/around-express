const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const status = require('http-status-codes');
const mongoose = require('mongoose');
const cards = require('./routes/cards');
const users = require('./routes/users');

const app = express();

// connect to the MongoDB server
mongoose.connect('mongodb://localhost:27017/aroundbtest', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use((req, res, next) => {
  req.user = {
    _id: '5f66048d38235610f35e6885',
  };

  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use('/cards', cards);
app.use('/users', users);

app.get('*', (req, res) => {
  res.status(status.NOT_FOUND);
  res.send({ message: 'Requested resource not found' });
});

app.listen(3000, () => {});
