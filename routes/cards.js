const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const status = require('http-status-codes');

router.get('/', (req, res) => {
  const dataPath = path.join(__dirname, '../data/cards.json');
  fs.readFile(dataPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.error(err);
      res.status(status.INTERNAL_SERVER_ERROR);
      res.send({ message: 'Internal Server Error' });
      return;
    }
    const cards = JSON.parse(data);
    res.send(cards);
  });
});

module.exports = router;
