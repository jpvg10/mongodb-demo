const { Schema } = require('mongoose');

const AwardSchema = require('./Award');
const DirectorSchema = require('./Director');

const MovieSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    director: {
        type: DirectorSchema,
        required: true
    },
    year: {
        type: Number,
        required: true,
        validate(value) {
            const currentYear = new Date().getFullYear();
            if (value > currentYear) {
                throw new Error("You can't add movies from the future!")
            }
        }
    },
    awards: {
        type: [AwardSchema]
    }
});

module.exports = MovieSchema;
