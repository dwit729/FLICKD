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
    </div>
  );
};

export default ProfilePage;
