const express = require('express')
const {
    createMovie, getAllMovies, getMovieById
} = require('../controllers/MovieController')

const router = express.Router()

//GET ALL MOVIES
router.get('/', getAllMovies)

//GET MOVIE BY ID
router.get('/:id', getMovieById)

//POST A NEW MOVIE
router.post('/', createMovie)


module.exports = router