const express = require('express');

const Movies = require('../controllers/movieController');

const router = express.Router();

router.post('/', Movies.createMovie);
router.get('/', Movies.getMovies);
router.get('/:id', Movies.getMovieById);
router.patch('/:id', Movies.updateMovie);
router.delete('/:id', Movies.deleteMovie);

module.exports = router;
