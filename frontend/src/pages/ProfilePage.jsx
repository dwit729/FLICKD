import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import { NavLink } from "react-router-dom";

const ProfilePage = () => {

  const [User, setUser] = useState();
  const [ReviewList, setReviewList] = useState([]);
  const [Favorites, setFavorites] = useState([]);
  const [Loaded, setLoaded] = useState(false);

  const id = sessionStorage.getItem("userId")

  const fetchUser = async () => {
    setLoaded(false)
    try {
        const response = await axios.get(`https://flickd-api.vercel.app/api/users/${id}`);
        setUser(response.data);
        setLoaded(true)
    } catch (error) {
          console.log(error)
    }  
  }


  const fetchReviews = async (userId) => {
    setLoaded(false)
    try {
        const response = await axios.get(`https://flickd-api.vercel.app/api/users/${id}/reviews`);
        setReviewList(response.data);
        setLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchFavorites = async (userId) => {
    setLoaded(false)
    try {
        const response = await axios.get(`https://flickd-api.vercel.app/api/users/${id}/favorites`);
        setFavorites(response.data);
        setLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }


    useEffect(() => {
      fetchUser();
      fetchReviews();
      fetchFavorites();
    }, []);



  return (
    <>
      {(Loaded && (User && ReviewList && Favorites)) && 
        <div className="container mx-auto px-4 py-8 max-w-screen-lg">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          {User.username}'s Profile
        </h2>

        {/* Favorites Section */}
        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">Favorites</h3>
          <ul className="space-y-3">
            {Favorites.map((movie) => (
              <li key={movie._id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  <NavLink className="underline" to={`/movie/${movie._id}`}>{movie.title}({movie.year})</NavLink> 
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* User Reviews Section */}
        <div>
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">User Reviews</h3>
          <ul className="space-y-4">
            {ReviewList.map((review) => (
              <li key={review._id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <NavLink to={`/movie/${review.movieId._id}`} className="text-lg font-semibold text-gray-800 dark:text-gray-200 underline">{review.movieId.title}</NavLink>
                <p className="text-yellow-500 font-semibold dark:text-yellow-400">Rating: {review.rating} / 5</p>
                <p className="text-gray-600 dark:text-gray-400">{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>}

    </>
  );
};

export default ProfilePage;
