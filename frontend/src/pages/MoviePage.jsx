import React, { useState } from "react";
import { HeartFilled, StarOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { Input } from "antd";

const { TextArea } = Input;

const MoviePage = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div className="banner-template"></div>
      <div className="body-content">
        <div className="movie-cover-section">
          <div className="cover-display">
            <div className="movie-cover-template">
              <img
                className="movie-cover"
                src="https://m.media-amazon.com/images/M/MV5BNTQzNGZjNDEtOTMwYi00MzFjLWE2ZTYtYzYxYzMwMjZkZDc5XkEyXkFqcGc@._V1_.jpg"
                alt="cover"
              />
            </div>
            <div className="movie-controls">
              <div className="icon-style">
                <HeartFilled />
                <h1>11.1k</h1>
              </div>

              <FontAwesomeIcon
                className="icon"
                size="3x"
                icon={faArrowUpFromBracket}
              />
            </div>
          </div>
        </div>

        <div className="primary-content">
          <div className="cover-info-title">
            <h1>Sherlock </h1>
            <div className="year-tag">
              <h1>2024</h1>
            </div>
          </div>
          <div className="body-content-controls">
            <p className="control-tab">Sypnosis</p>
            <p className="control-tab">Description</p>
            <p className="control-tab">Sypnosis</p>
          </div>

          <div className="body-content-info">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sed auctor odio. Fusce et auctor dui. Phasellus placerat ante non
              urna maximus volutpat. Sed sollicitudin, lorem ac aliquam
              sollicitudin, enim dui eleifend arcu, sit amet mollis justo enim
              ac ligula. Morbi sit amet rhoncus nulla. Fusce efficitur, risus eu
              condimentum mollis, dui orci varius tortor, feugiat lobortis nisi
              tortor eu enim. Pellentesque sed ornare nunc, a auctor neque.
              Suspendisse lobortis convallis arcu, at tempus augue sodales non.
              Cras dictum sem in augue maximus, in bibendum massa lacinia.
              Nullam ipsum sapien, porttitor ac velit id, tempor porta eros.
              Pellentesque volutpat porta sollicitudin. Phasellus iaculis neque
              vitae elit efficitur venenatis. Nullam ac velit eu magna efficitur
              consectetur dignissim nec dolor. Pellentesque ac lorem malesuada,
              fringilla nulla sit amet, imperdiet erat.
            </p>
          </div>

          <hr className="separator"/>

          <h1 className="title">Cast:</h1>
          <div className="cast-section">  
            <div className="cast-tag">
                <h1 className="tag-name">Name</h1>
                <p className="tag-role">Role</p>
            </div>
            <div className="cast-tag">
                <h1 className="tag-name">Name</h1>
                <p className="tag-role">Role</p>
            </div>
            <div className="cast-tag">
                <h1 className="tag-name">Name</h1>
                <p className="tag-role">Role</p>
            </div>
            <div className="cast-tag">
                <h1 className="tag-name">Name</h1>
                <p className="tag-role">Role</p>
            </div>
            
          </div>
        </div>

        <div className="info-content-controls">
          <div className="icon-controls">
            <span className="icon-set">
              <FontAwesomeIcon icon={faBookmark} />
              Save
            </span>
            <span className="icon-set active">
              <HeartFilled />
              Liked
            </span>
          </div>

          <div className="rating-section">
            <div className="rating">
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
            </div>
            <h1>Rate</h1>
          </div>

          <div className="comment-section">
            <TextArea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Write a Review"
              autoSize={{
                minRows: 3,
                maxRows: 5,
              }}
            />
          </div>

          <div className="share-section">
            <FontAwesomeIcon icon={faShareNodes} />
            <h1>Share</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
