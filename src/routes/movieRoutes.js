const express = require('express');

const Movies = require('../controllers/movieController');
const Validation = require('../validation/movieValidation');

const router = express.Router();

router.post('/', Validation.createMovie, Movies.createMovie);
router.get('/', Movies.getMovies);
router.get('/:id', Movies.getMovieById);
router.patch('/:id', Validation.updateMovie, Movies.updateMovie);
router.delete('/:id', Movies.deleteMovie);

module.exports = router;
