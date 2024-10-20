const Movie = require('../models/Movie');
const User = require('../models/User');
const bcrypt = require('bcryptjs');  // For password hashing

// Register a new user
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if email already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new user
    user = new User({
      username,
      email,
      passwordHash: hashedPassword
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Login a user by matching username and password
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Return user info if login is successful
    res.json({ message: 'Login successful', userId: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user profile by user ID
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select('-passwordHash');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update user profile by user ID
const updateUserProfile = async (req, res) => {
  const { username, email } = req.body;

  try {
    // Find the user and update their info
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { username, email },
      { new: true }
    ).select('-passwordHash');

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a movie to user's favorites
const addToFavorites = async (req, res) => {
  const { userId } = req.params;
  const { movieId } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the movie exists
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    // Check if the movie is already in favorites
    if (user.favorites.includes(movieId)) {
      return res.status(400).json({ message: 'Movie already in favorites' });
    }

    // Add movie to favorites
    user.favorites.push(movieId);
    await user.save();

    res.json({ message: 'Movie added to favorites', favorites: user.favorites });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Remove a movie from user's favorites
const removeFromFavorites = async (req, res) => {
  const { userId, movieId } = req.params;

  try {
    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the movie is in favorites
    if (!user.favorites.includes(movieId)) {
      return res.status(400).json({ message: 'Movie not found in favorites' });
    }

    // Remove the movie from favorites
    user.favorites = user.favorites.filter(favMovieId => favMovieId.toString() !== movieId);
    await user.save();

    res.json({ message: 'Movie removed from favorites', favorites: user.favorites });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { 
  registerUser, 
  loginUser, 
  getUserProfile, 
  updateUserProfile, 
  addToFavorites, 
  removeFromFavorites 
};
