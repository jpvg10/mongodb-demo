const { Schema } = require('mongoose');

const MovieSchema = new Schema({
    name: {
        type: String
    },
    director: {
        type: String
    },
    year: {
        type: Number
    }
});

module.exports = MovieSchema;
