const express = require('express');
const router = express.Router();
const { 
  registerUser, 
  loginUser, 
  getUserProfile, 
  updateUserProfile, 
  addToFavorites, 
  removeFromFavorites,
  getUserFavorites,
  getUserReviews
} = require('../controllers/UserController');

// Register a new user
router.post('/register', registerUser);

// Login user (standard username/password matching)
router.post('/login', loginUser);

// Get user profile by ID
router.get('/:userId', getUserProfile);

// Update user profile by ID
router.put('/:userId', updateUserProfile);

// Add a movie to favorites
router.post('/:userId/favorites', addToFavorites);

// Remove a movie from favorites
router.delete('/:userId/favorites/:movieId', removeFromFavorites);

// Get user favorites by id
router.get('/:userId/favorites', getUserFavorites);

// Get user reviews by id
router.get('/:userId/reviews', getUserReviews);

module.exports = router;
