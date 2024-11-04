import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPage() {
  const [movies, setMovies] = useState([]);
  const [editMovie, setEditMovie] = useState(null);
  const [newMovie, setNewMovie] = useState({
    title: '',
    year: '',
    cast: '',
    genre: '',
    director: '',
    summary: '',
    posterUrl: '',
    bannerUrl: '',
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://flickd-api.vercel.app/api/movies');
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://flickd-api.vercel.app/api/movies/${id}`);
      fetchMovies();
      alert('Movie deleted successfully');
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditMovie({
      ...editMovie,
      [name]: name === 'cast' || name === 'genre' ? value.split(','): value,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://flickd-api.vercel.app/api/movies/${editMovie._id}`, editMovie);
      setEditMovie(null);
      fetchMovies();
      alert('Movie updated successfully');
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  const openEditForm = (movie) => {
    setEditMovie(movie);
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: name === 'cast' || name === 'genre' ? value.split(',') : value,
    });
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://flickd-api.vercel.app/api/movies', newMovie);
      setNewMovie({
        title: '',
        year: '',
        cast: '',
        genre: '',
        director: '',
        summary: '',
        posterUrl: '',
        bannerUrl: '',
      });
      fetchMovies();
      alert('Movie added successfully');
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin Page - Movie Management</h2>

      {/* Add Movie Form */}
      <div className="bg-gray-800 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">Add New Movie</h3>
        <form onSubmit={handleAddSubmit} className="grid gap-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newMovie.title}
            onChange={handleAddChange}
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
          />
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={newMovie.year}
            onChange={handleAddChange}
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
          />
          <input
            type="text"
            name="director"
            placeholder="Director"
            value={newMovie.director}
            onChange={handleAddChange}
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
          />
          <input
            type="text"
            name="cast"
            placeholder="Cast (comma-separated)"
            value={newMovie.cast}
            onChange={handleAddChange}
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre (comma-separated)"
            value={newMovie.genre}
            onChange={handleAddChange}
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
          />
          <textarea
            name="summary"
            placeholder="Summary"
            value={newMovie.summary}
            onChange={handleAddChange}
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
          />
          <input
            type="url"
            name="posterUrl"
            placeholder="Poster URL"
            value={newMovie.posterUrl}
            onChange={handleAddChange}
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
          />
          <input
            type="url"
            name="bannerUrl"
            placeholder="Banner URL"
            value={newMovie.bannerUrl}
            onChange={handleAddChange}
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add Movie
          </button>
        </form>
      </div>

      {/* Movie List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <div key={movie._id} className="p-4 bg-gray-800 shadow-md rounded-lg flex flex-col items-start">
            <img src={movie.posterUrl} alt={`${movie.title} Poster`} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{movie.year}</p>
            <p className="text-sm mb-2"><strong>Director:</strong> {movie.director}</p>
            <p className="text-sm mb-2"><strong>Genre:</strong> {movie.genre.join(', ')}</p>
            <p className="text-sm mb-2"><strong>Cast:</strong> {movie.cast.join(', ')}</p>
            <p className="text-sm mb-2"><strong>Summary:</strong> {movie.summary}</p>
            <div className="flex mt-auto space-x-2">
              <button
                onClick={() => openEditForm(movie)}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(movie._id)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Movie Modal */}
      {editMovie && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4">Edit Movie</h3>
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="title"
                value={editMovie.title}
                onChange={handleEditChange}
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded mb-2"
                placeholder="Title"
              />
              <input
                type="number"
                name="year"
                value={editMovie.year}
                onChange={handleEditChange}
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded mb-2"
                placeholder="Year"
              />
              <input
                type="text"
                name="director"
                value={editMovie.director}
                onChange={handleEditChange}
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded mb-2"
                placeholder="Director"
              />
              {/* More fields for genre, cast, etc. */}
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  onClick={() => setEditMovie(null)}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
