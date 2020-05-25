const mongoose = require('mongoose');
const DirectorSchema = require('../schemas/Director');

module.exports = mongoose.model('Director', DirectorSchema);
