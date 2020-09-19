const router = require('express').Router();
const users = require('../controllers/users');

router.get('/', (req, res) => {
  users.getAllUsers(req, res);
});

router.post('/', (req, res) => {
  users.createUser(req, res);
});

router.get('/:id', (req, res) => {
  users.getUser(req, res);
});

module.exports = router;
