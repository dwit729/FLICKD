import React from "react";
import { Carousel, Flex, Layout } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart, faStar } from '@fortawesome/free-regular-svg-icons'

import "../css/Carousel.css";
import "../css/Button.css";

const { Header, Footer, Sider, Content } = Layout;

const HomePage = () => {
  return (
    <>
      <div className="content-container">
        <div className="carousel-container">
          <Carousel arrows autoplay={true} autoplaySpeed={2000} infinite={true}>
            <div>
              <h3 className="carousel-style">1</h3>
            </div>
            <div>
              <h3 className="carousel-style">2</h3>
            </div>
            <div>
              <h3 className="carousel-style">3</h3>
            </div>
            <div>
              <h3 className="carousel-style">4</h3>
            </div>
          </Carousel>
        </div>
        <div className="info-container">
          <h1 className="title-heading"> Watch, Feel, Review, and Share! Experience FLiCKD! </h1>

          <button className="button-default">Get Started - It's free!</button>

          <div className="content-segment">
            <FontAwesomeIcon size="3x" icon={faEye} />
            <p className="text-segment">
              Keep track of every film you’ve ever watched (or just start from
              the day you join)
            </p>
          </div>
          <div className="content-segment">
            <FontAwesomeIcon size="3x" icon={faHeart} />
            <p className="text-segment">
              Show some love for your favorite films, lists and reviews with a
              “like”
            </p>
          </div>
          <div className="content-segment">
            <FontAwesomeIcon size="3x" icon={faStar} />
            <p className="text-segment">
              Rate each film on a five-star scale (with halves) to record and
              share your reaction
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
