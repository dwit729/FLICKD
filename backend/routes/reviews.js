const express = require('express');
const router = express.Router();
const { 
  getAllReviewsForMovie, 
  getReviewById, 
  updateReview, 
  deleteReview 
} = require('../controllers/ReviewController');

// Get all reviews for a specific movie
router.get('/movie/:movieId', getAllReviewsForMovie);

// Get a single review by ID
router.get('/:reviewId', getReviewById);

// Update a review by ID
router.put('/:reviewId', updateReview);

// Delete a review by ID
router.delete('/:reviewId', deleteReview);

module.exports = router;
