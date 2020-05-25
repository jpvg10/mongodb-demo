const { Schema } = require('mongoose');

const DirectorSchema = new Schema({
    name: {
        type: 'String',
        required: true,
        unique: true,
        trim: true
    }
});

module.exports = DirectorSchema;
