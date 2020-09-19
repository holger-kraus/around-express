const User = require('../models/user.js');

module.exports.getAllUsers = (req, res) => {
  User.find().then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: err })); // TODO more meaningful error message
};

module.exports.getUser = (req, res) => {
  const userId = req.params.id;
  User.findById(userId).then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: err }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: err }));
};
