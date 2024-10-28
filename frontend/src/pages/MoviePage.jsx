import React from "react";
import { HeartFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const MoviePage = () => {
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
        </div>

        <div className="info-content-controls">
            <div className="icon-controls">
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
