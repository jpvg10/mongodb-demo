const { Schema } = require('mongoose');

const AwardSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    count: {
        type: Number,
        required: true
    }
}, {
    _id: false
});

module.exports = AwardSchema;
