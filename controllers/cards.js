const Card = require('../models/card.js');

module.exports.getAllCards = (req, res) => {
  Card.find().populate('owner').populate('likes').then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(500).send({ message: err }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: err }));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: err }));
};
