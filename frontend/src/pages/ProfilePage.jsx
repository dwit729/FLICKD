import React from "react";

const ProfilePage = () => {

  const user = {
    username: "movieLover123",
    favorites: [
      { id: 1, title: "Inception", year: "2010" },
      { id: 2, title: "The Dark Knight", year: "2008" },
      { id: 3, title: "Interstellar", year: "2014" },
    ],
    reviews: [
      { id: 1, movie: "Inception", rating: 5, comment: "Mind-blowing experience!" },
      { id: 2, movie: "The Dark Knight", rating: 4.5, comment: "Epic and intense." },
      { id: 3, movie: "Interstellar", rating: 4.8, comment: "A visual masterpiece." },
    ],
  };

  return (
    <>
          <div className="container mx-auto px-4 py-8 max-w-screen-lg">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          {user.username}'s Profile
        </h2>

        {/* Favorites Section */}
        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">Favorites</h3>
          <ul className="space-y-3">
            {user.favorites.map((movie) => (
              <li key={movie.id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {movie.title} ({movie.year})
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* User Reviews Section */}
        <div>
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">User Reviews</h3>
          <ul className="space-y-4">
            {user.reviews.map((review) => (
              <li key={review.id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{review.movie}</p>
                <p className="text-yellow-500 font-semibold dark:text-yellow-400">Rating: {review.rating} / 5</p>
                <p className="text-gray-600 dark:text-gray-400">{review.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    </>
  );
};

export default ProfilePage;
