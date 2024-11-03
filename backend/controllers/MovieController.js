const Movie = require('../models/Movie')
const Review = require('../models/Review')



const getAllMovies = async (req, res) => {
  try {
    const { query, sortBy, limit } = req.query;

    // Construct the aggregation pipeline
    const pipeline = [];

    // Add Atlas Search stage for fuzzy multi-field search
    if (query) {
      pipeline.push({
        $search: {
          index: 'search',  // The name of your Atlas Search index
          compound: {
            should: [
              {
                text: {
                  query: query,
                  path: 'title',
                  fuzzy: { maxEdits: 2 }
                }
              },
              {
                text: {
                  query: query,
                  path: 'director',
                  fuzzy: { maxEdits: 2 }
                }
              },
              {
                text: {
                  query: query,
                  path: 'genre',
                  fuzzy: { maxEdits: 2 }
                }
              },
              {
                text: {
                  query: query,
                  path: 'year'
                }
              },
              {
                text: {
                  query: query,
                  path: 'rating'
                }
              }
            ],
            minimumShouldMatch: 1
          }
        }
      });
    }

    // Add sorting stage based on the sortBy parameter
    if (sortBy === 'year') {
      pipeline.push({ $sort: { year: -1 } });
    } else if (sortBy === 'rating') {
      pipeline.push({ $sort: { rating: -1 } });
    }

    // Add limit stage for pagination or result limit
    const resultsLimit = limit ? parseInt(limit) : 10;
    pipeline.push({ $limit: resultsLimit });

    // Execute the aggregation pipeline
    const movies = await Movie.aggregate(pipeline);

    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};




//GET MOVIE BY ID
const getMovieById = async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id)
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
    res.status(error.status).json(error);
  }
};

// Add a review to a movie
const addReviewToMovie = async (req, res) => {
  const { userId, rating, content } = req.body;

  try {
    const movie = await Movie.findById(req.params.movieId);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    // Create a new review
    const review = new Review({
      movieId: req.params.movieId,
      userId: userId,
      rating,
      content
    });

    // Save the review and add it to the movie's reviews array
    await review.save();
    movie.reviews.push(review._id);
    await movie.save();

    res.status(201).json({ message: 'Review added successfully', review });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
    createMovie, getAllMovies, getMovieById, addReviewToMovie
}