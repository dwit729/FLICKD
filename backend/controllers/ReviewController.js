const Review = require('../models/Review');
const Movie = require('../models/Movie');
const User = require('../models/User');

// Get all reviews for a specific movie
const getAllReviewsForMovie = async (req, res) => {
  try {
    const { movieId } = req.params;

    // Check if the movie exists
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    // Find all reviews related to the movie
    const reviews = await Review.find({ movieId: movieId }).populate('userId', 'username');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single review by ID
const getReviewById = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const review = await Review.findById(reviewId).populate('userId', 'username');
    
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.json(review);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


// Update a review by ID
const updateReview = async (req, res) => {
  const { reviewId } = req.params;
  const { rating, content } = req.body;

  try {
    // Find and update the review
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      { rating, content },
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.json({ message: 'Review updated successfully', review: updatedReview });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a review by ID
const deleteReview = async (req, res) => {
  const { reviewId } = req.params;

  try {
    // Find and delete the review
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    // Remove the review from the associated movie's reviews array
    const movie = await Movie.findById(review.movieId);
    if (movie) {
      movie.reviews = movie.reviews.filter(r => r.toString() !== reviewId);
      await movie.save();
    }

    const user = await User.findById(review.userId);
    if (user) {
      user.reviews = user.reviews.filter(r => r.toString() !== reviewId);
      await user.save();
    }

    // Delete the review
    await Review.findByIdAndDelete(reviewId);

    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all reviews for a specific user
const getAllReviewsForUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find all reviews related to the user
    const reviews = await Review.find({ userId }).populate('movieId', 'title year');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { 
  getAllReviewsForMovie, 
  getReviewById, 
  updateReview, 
  deleteReview,
  getAllReviewsForUser
};
