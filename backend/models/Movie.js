const mongoose = require('mongoose')

const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: { type: String, required: true },
    genre: [{ type: String, required: true }],  // Array of genres
    director: { type: String, required: true },
    cast: [{ type: String }],  // Array of cast members
    rating: { type: Number, default: 0 },  // Average rating from reviews
    reviewCount: { type: Number, default: 0 },  // Number of reviews
    summary: { type: String },
    posterUrl: { type: String },
    bannerUrl: {type: String},
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]  // References reviews
  });

  
// Index for movie title for fast search by title (text index)
    movieSchema.index({ title: 'text' });
// Index for searching by year, director, or genre
    movieSchema.index({ director: 1 });
    movieSchema.index({ genre: 1 });
  
  module.exports = mongoose.model('Movie', movieSchema);
  
