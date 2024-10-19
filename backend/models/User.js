const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateJoined: { type: Date, default: Date.now },
  profilePicUrl: { type: String, default: '' },
  favorites: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],  // References movies
  watchlist: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],  // References movies
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]    // References reviews
});

// Create index on the username for efficient search
userSchema.index({ username: 1 });

module.exports = mongoose.model('User', userSchema);
