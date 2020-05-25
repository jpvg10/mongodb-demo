const express = require('express');
const router = express.Router();

const Director = require('../db/models/Director');

router.post('/directors', async (req, res) => {
    const directorData = req.body;
    const director = new Director(directorData);
    try {
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

router.get('/directors/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const director = await Director.findById(id);

        if (!director) res.status(404).send();

        res.status(200).send(director);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
