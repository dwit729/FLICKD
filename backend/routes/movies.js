const express = require('express')
const Movie = require('../models/Movie')

const router = express.Router()

//GET ALL MOVIES
router.get('/', (req, res) => {

})

//GET MOVIE BY ID
router.get('/:id', (req, res) => {

})

//POST A NEW MOVIE
router.post('/', async (req, res) => {
    const {title, 
            genre, 
            director, 
            cast, 
            rating, 
            reviewCount, 
            summary, 
            posterUrl, 
            bannerUrl, 
            review } = req.body

    try {
        const movie = await Movie.create({ 
            title, 
            genre, 
            director, 
            cast, 
            rating, 
            reviewCount, 
            summary, 
            posterUrl, 
            bannerUrl, 
            review       
        })
        res.status(200).json(movie)

    } catch (error) {
        res.status(400).json({error: error.message})
    }

})

//DELETE A MOVIE BY ID
router.delete('/:id', (req, res) => {

})

//UPDATE A MOVIE BY ID
router.delete('/:id', (req, res) => {

})


module.exports = router