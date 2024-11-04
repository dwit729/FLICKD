const express = require('express')
const {
    createMovie, getAllMovies, getMovieById, addReviewToMovie, updateMovie, deleteMovie
} = require('../controllers/MovieController')

const router = express.Router()

//GET ALL MOVIES
router.get('/', getAllMovies)

//GET MOVIE BY ID
router.get('/:id', getMovieById)

//POST A NEW MOVIE
router.post('/', createMovie)

// ADD REVIEW TO MOVIE
router.post('/:movieId/reviews', addReviewToMovie);

//UPDATE MOVIE
router.put('/:id', updateMovie)

//DELETE MOVIE
router.delete('/:id', deleteMovie)

module.exports = router