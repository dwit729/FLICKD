const Movie = require('../models/Movie')



//GET ALL MOVIES WITH FILTERS
const getAllMovies = async (req, res) => {
    try {
      // Extract filters from the query parameters
      const { genre, year, director, sortBy, limit } = req.query;
  
      const filter = {};
      if (genre) filter.genre = { $in: genre.split(',') };  
      if (year) filter.year = Number(year);  
      if (director) filter.director = { $regex: director, $options: 'i' }; 
  

      const sortOptions = {};
      if (sortBy === 'year') sortOptions.year = -1;  // Sort by year descending
      if (sortBy === 'rating') sortOptions.rating = -1;  // Sort by rating descending
  
      // Apply a limit on the number of results (optional)
      const resultsLimit = limit ? parseInt(limit) : 10;
  
      // Execute the query with filters, sorting, and limiting
      const movies = await Movie.find(filter).sort(sortOptions).limit(resultsLimit);
  
      res.json(movies);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };

//GET MOVIE BY ID
const getMovieById = async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.movieId).populate('reviews');
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.json(movie);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };

//POST A NEW MOVIE-----------------------------
const createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};



module.exports = {
    createMovie, getAllMovies, getMovieById
}