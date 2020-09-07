const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const status = require('http-status-codes');

router.get('/', (req, res) => {
  const dataPath = path.join(__dirname, '../data/users.json');
  fs.readFile(dataPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.error(err);
      res.status(status.INTERNAL_SERVER_ERROR);
      res.send({ message: 'Internal Server Error' });
      return;
    }
    const users = JSON.parse(data);
    res.send(users);
  });
});

router.get('/:id', (req, res) => {
  const dataPath = path.join(__dirname, '../data/users.json');
  fs.readFile(dataPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.error(err);
      res.status(status.INTERNAL_SERVER_ERROR);
      res.send({ message: 'Internal Server Error' });
      return;
    }
    const users = JSON.parse(data);
    const user = users.filter((item) => item._id === req.params.id);

    if (user.length === 0) {
      res.status(status.NOT_FOUND);
      res.send({ message: 'User ID not found' });
    } else {
      res.send(user[0]);
    }
  });
});

module.exports = router;
