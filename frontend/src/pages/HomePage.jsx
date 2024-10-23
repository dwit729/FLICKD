import React from "react";
import { Carousel, Flex, Layout } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "../css/Carousel.css";
import "../css/Button.css";

const { Header, Footer, Sider, Content } = Layout;

const HomePage = () => {
  
  function determineArrow(type) {
    return <FontAwesomeIcon size="3x" icon={type === "right" ? faArrowRight : faArrowLeft } />;
  }

  return (
    <>
      <div className="content-container">
        <div className="carousel-container">
          <Carousel
            arrows
            autoplay={true}
            autoplaySpeed={2000}
            infinite={true}
            nextArrow={determineArrow("right")}
            prevArrow={determineArrow("left")}
            
          >
            <div className="carousel-style">
              <img
                src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/01/Spider-Man-No-Way-Home-All-Three-Spider-Men-Together.jpg"
                alt="item1"
              />
            </div>
            <div className="carousel-style">
              <img
                src="https://player.bbc.com/static/posters/1810556/original/1585653092-069c50d32152399ae9f0d81ca5df32e35a7695c9.jpg"
                alt="item2"
              />
            </div>
            <div className="carousel-style">
              <img
                src="https://www.highonfilms.com/wp-content/uploads/2024/08/Dead-Sea2.jpg"
                alt="item3"
              />
            </div>
            <div className="carousel-style">
              <img
                src="https://images.bauerhosting.com/empire/2024/06/bad-boys-2.png?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
                alt="item4"
              />
            </div>
          </Carousel>

          <div className="cover-section">
              <div className="cover-template">
                  <img src="https://images.moviesanywhere.com/5a7e82e7749d6dd8e447fcfeec50c064/55462afc-41ad-4322-ad46-1caca29fcc36.jpg" className="cover-img" alt="img-cover" />
              </div>
          </div>
        </div>
        <div className="info-container">
          <h1 className="title-heading">
            Watch, Feel, Review, and Share! Experience FLiCKD!
          </h1>

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
