const mongoose = require('mongoose');

const verifyId = (req, res, next) => {
    const { id } = req.params;
    if (mongoose.isValidObjectId(id)) {
        next();
    } else {
        return res.status(400).send({ message: '"id" param is not a valid ObjectId' });
    }
};

module.exports = verifyId;
