const mongoose = require('mongoose');
const MovieSchema = require('../schemas/Movie');

module.exports = mongoose.model('Movie', MovieSchema);
