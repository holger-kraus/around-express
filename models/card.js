const mongoose = require('mongoose');

const cardsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    validate: {
      validator(v) {
        return /https?:\/\/(www\.)?([-a-zA-Z0-9:%_+.#//]*)/.test(v);
      },
    },
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  }], // default is empty array, doesn't have to be configured
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardsSchema);
