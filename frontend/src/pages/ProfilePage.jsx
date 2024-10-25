import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <div className="banner"></div>
      <div className="profile-section">
        <div className="img-template">
          <img
            src="https://static.thenounproject.com/png/65476-200.png"
            alt="user_icon"
          />
        </div>
        <div className="profile-info">
          <h1 className="title">Username</h1>
        </div>
      </div>
      <div className="movie-info">
        <h1 className="title">Recently Viewed:</h1>
        <div className="movie-container">
          <div className="movie-section">
            <div className="movie-template"></div>
            <h1 className="title">Movie Name</h1>
          </div>
          <div className="movie-section">
            <div className="movie-template"></div>
            <h1 className="title">Movie Name</h1>
          </div>
          <div className="movie-section">
            <div className="movie-template"></div>
            <h1 className="title">Movie Name</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
