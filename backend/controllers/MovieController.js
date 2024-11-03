const Movie = require('../models/Movie')




const getAllMovies = async (req, res) => {
  try {
    const { genre, year, director, title, sortBy, limit } = req.query;


    const matchStage = {};
    if (genre) matchStage.genre = { $in: genre.split(',') };
    if (year) matchStage.year = Number(year);
    if (director) matchStage.director = { $regex: director, $options: 'i' };


    const pipeline = [];


    if (title) {
      pipeline.push({
        $search: {
          index: 'title_text', 
          text: {
            query: title,
            path: 'title',
            fuzzy: {
              maxEdits: 4  
            }
          }
        }
      });
    }


    if (Object.keys(matchStage).length > 0) {
      pipeline.push({ $match: matchStage });
    }


    if (sortBy === 'year') {
      pipeline.push({ $sort: { year: -1 } });
    } else if (sortBy === 'rating') {
      pipeline.push({ $sort: { rating: -1 } });
    }

    const resultsLimit = limit ? parseInt(limit) : 10;
    pipeline.push({ $limit: resultsLimit });

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
      movie: req.params.movieId,
      user: userId,
      rating,
      content
    });

    // Save the review and add it to the movie's reviews array
    await review.save();
    movie.reviews.push(review._id);
    await movie.save();

    res.status(201).json({ message: 'Review added successfully', review });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
    createMovie, getAllMovies, getMovieById, addReviewToMovie
}