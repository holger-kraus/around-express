const status = require('http-status-codes');
const Card = require('../models/card.js');

module.exports.getAllCards = (req, res) => {
  Card.find()
    .populate('owner')
    .populate('likes')
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(status.INTERNAL_SERVER_ERROR)
      .send({ message: 'Internal Server Error' }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({
    name,
    link,
    owner: req.user._id, // comment for the reviewer: please create a user in the database
    // and assign the id of the created user to req.user in app.js, just replace the id that is
    // already there, then then owner won't be null
    // anymore. This was the precondition to make in work from the project brief.
  })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(status.BAD_REQUEST)
          .send({ message: 'Not a valid card object' });
      } else {
        res.status(status.INTERNAL_SERVER_ERROR)
          .send({ message: 'Internal Server Error' });
      }
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => {
      if (card) {
        res.send({ data: card });
      } else {
        res.status(status.NOT_FOUND)
          .send({ message: 'Card does not exist' });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(status.BAD_REQUEST)
          .send({ message: 'Not a valid card id' });
      } else {
        res.status(status.INTERNAL_SERVER_ERROR)
          .send({ message: 'Internal Server Error' });
      }
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .populate('likes')
    .then((card) => {
      if (card) {
        res.send({ data: card });
      } else {
        res.status(status.NOT_FOUND)
          .send({ message: 'Card does not exist' });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(status.BAD_REQUEST)
          .send({ message: 'Not a valid card id' });
      } else {
        res.status(status.INTERNAL_SERVER_ERROR)
          .send({ message: 'Internal Server Error' });
      }
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // remove _id from the array
    { new: true },
  )
    .populate('likes')
    .then((card) => {
      if (card) {
        res.send({ data: card });
      } else {
        res.status(status.NOT_FOUND)
          .send({ message: 'Card does not exist' });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(status.BAD_REQUEST)
          .send({ message: 'Not a valid card id' });
      } else {
        res.status(status.INTERNAL_SERVER_ERROR)
          .send({ message: 'Internal Server Error' });
      }
    });
};
