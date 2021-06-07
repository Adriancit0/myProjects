const { model, Schema } = require('mongoose');

const schoolModel = Schema({
  info: {
    name: String,
    phone: Number,
    mail: String
  },
  plant: {
    skateBoards: Boolean,
    protections: Boolean,
    shower: Boolean,
    parking: Boolean,
    cofeeShop: Boolean
  },
  activities: [{
    level: String,
    schedule: String,
    price: Number,
    places: Number,
    likes: Number
  }]
});

module.exports = model('School', schoolModel);
