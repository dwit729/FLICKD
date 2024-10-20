const Review = require('../models/Review');
const Movie = require('../models/Movie');

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
    const reviews = await Review.find({ movie: movieId }).populate('user', 'username');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single review by ID
const getReviewById = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const review = await Review.findById(reviewId).populate('user', 'username');
    
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
    const movie = await Movie.findById(review.movie);
    if (movie) {
      movie.reviews = movie.reviews.filter(r => r.toString() !== reviewId);
      await movie.save();
    }

    // Delete the review
    await Review.findByIdAndDelete(reviewId);

    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { 
  getAllReviewsForMovie, 
  getReviewById, 
  updateReview, 
  deleteReview 
};
