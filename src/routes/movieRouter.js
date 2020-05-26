const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Director = require('../db/models/Director');
const Movie = require('../db/models/Movie');

router.post('/movies', async (req, res) => {
    try {
        const movieData = req.body;

        const director = await Director.findById(movieData.director);
        if (!director) return res.status(404).send({ message: 'Director not found' });

        const movie = new Movie(movieData);

        await movie.save();
        res.status(201).send(movie);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/movies', async (req, res) => {
    try {
        const { director: directorId } = req.query;

        const filterOptions = {};

        if (directorId) {
            if (mongoose.isValidObjectId(directorId)) {
                filterOptions.director = directorId;
            } else {
                return res.status(400).send({
                    message: '"director" param is not a valid ObjectId'
                })
            }
        }

        const movies = await Movie.find(filterOptions).populate('director');
        res.status(200).send(movies);
    } catch (e) {
        res.status(500).send();
    }
});

router.get('/movies/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const movie = await Movie.findById(id).populate('director');
        if (!movie) res.status(404).send();

        res.status(200).send(movie);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
