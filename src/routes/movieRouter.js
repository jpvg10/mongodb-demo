const express = require('express');
const router = express.Router();

const Movie = require('../db/models/Movie');

router.post('/movies', async (req, res) => {
    const movieData = req.body;
    const movie = new Movie(movieData);
    try {
        await movie.save();
        res.status(201).send(movie);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send(movies);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
