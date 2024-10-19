const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    movieId: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },  // References the movie
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },    // References the user
    rating: { type: Number, required: true },
    reviewText: { type: String, required: true },
    datePosted: { type: Date, default: Date.now },
  });
  
  
  // Index for fast lookup of reviews by movieId and userId
  reviewSchema.index({ movieId: 1 });
  reviewSchema.index({ userId: 1 });
  // Optional: index on rating for sorting by review rating
  reviewSchema.index({ rating: 1 });
  
  module.exports = mongoose.model('Review', reviewSchema);
  