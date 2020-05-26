const express = require('express');
const router = express.Router();

const verifyId = require('../middleware/verifyId');
const Director = require('../db/models/Director');

router.post('/directors', async (req, res) => {
    try {
        const directorData = req.body;
        const director = new Director(directorData);
        await director.save();
        res.status(201).send(director);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/directors', async (req, res) => {
    try {
        const directors = await Director.find({});
        res.status(200).send(directors);
    } catch (e) {
        res.status(500).send();
    }
});

router.get('/directors/:id', verifyId, async (req, res) => {
    try {
        const { id } = req.params;

        const director = await Director.findById(id);
        if (!director) res.status(404).send();

        res.status(200).send(director);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.patch('/directors/:id', verifyId, async (req, res) => {
    try {
        const { id } = req.params;

        const director = await Director.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!director) res.status(404).send();

        res.status(200).send(director);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;
