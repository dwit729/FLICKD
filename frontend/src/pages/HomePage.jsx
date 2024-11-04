import { React, useState, useEffect } from "react";
import { Carousel, Flex, Layout } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import "../css/Carousel.css";

import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import MovieGallery from "../components/MovieGallery";

const { Header, Footer, Sider, Content } = Layout;





const HomePage = () => {

const [LoggedIn, setLoggedIn] = useState(false);

const checkLoggedIn = () => {
    try {
        const userId = sessionStorage.getItem('userId');
        if(userId){
            setLoggedIn(true)  
           
        }
        else{
          setLoggedIn(false)
        }
    } catch (error) {
        
    }
}

  const movieList = [
    {
      title: "Spider Man: No Way Home",
      year: "2022",
      banner: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/01/Spider-Man-No-Way-Home-All-Three-Spider-Men-Together.jpg",
      cover: "https://images.moviesanywhere.com/5a7e82e7749d6dd8e447fcfeec50c064/55462afc-41ad-4322-ad46-1caca29fcc36.jpg",
      favoriteCount: "11.1K"
    },
    {
      title: "Sherlock",
      year: "2010",
      banner: "https://player.bbc.com/static/posters/1810556/original/1585653092-069c50d32152399ae9f0d81ca5df32e35a7695c9.jpg",
      cover: "https://m.media-amazon.com/images/M/MV5BNTQzNGZjNDEtOTMwYi00MzFjLWE2ZTYtYzYxYzMwMjZkZDc5XkEyXkFqcGc@._V1_.jpg",
      favoriteCount: "11.1K"
    },
    {
      title: "Dead Sea",
      year: "2024",
      banner: "https://www.highonfilms.com/wp-content/uploads/2024/08/Dead-Sea2.jpg",
      cover: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26900448_p_v13_ab.jpg",
      favoriteCount: "11.1K"
    },
    {
      title: "Bad Boys: Ride or Die",
      year: "2024",
      banner: "https://images.bauerhosting.com/empire/2024/06/bad-boys-2.png?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
      cover: "https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg",
      favoriteCount: "11.1K"
    }
  ];

  const navigate = useNavigate();
  function determineArrow(type) {

    return (
      <FontAwesomeIcon
        size="3x"
        icon={type === "right" ? faArrowRight : faArrowLeft}
      />
    );
  }

  useEffect(() => {
    checkLoggedIn();
  }, []);



  return (
    <>
        <div className="content-container">
        <div className="hero-container">
          <div className="carousel-container">
          <Carousel
            arrows
            autoplay={true}
            autoplaySpeed={2000}
            infinite={true}
            nextArrow={determineArrow("right")}
            prevArrow={determineArrow("left")}
          >

            {movieList.map((i) => {
              return (
                <div className="carousel-style">
                  <img src={i.banner} alt="item1" />
                </div>
              );
            })}	

          </Carousel>

        </div>
        <div className="info-container">
          <h1 className="title-heading">
            Watch, Feel, Review, and Share! Experience FLiCKD!
          </h1>

          {!LoggedIn && <a href="/login" type="button" className="button-default m-0">Get Started - It's free!</a>}
          <div className="content-segment">
            <FontAwesomeIcon onClick={()=>{navigate("/admin")}} size="2x" icon={faEye} />
            <p className="text-segment">
              Search for Movies you love and get their details!
            </p>
          </div>
          <div className="content-segment">
            <FontAwesomeIcon size="2x" icon={faHeart} />
            <p className="text-segment">
              Show some love for your favorite films and add them to you favorites list!
            </p>
          </div>
          <div className="content-segment">
            <FontAwesomeIcon size="2x" icon={faStar} />
            <p className="text-segment">
              Rate each film on a five-star scale to record and
              share your reaction
            </p>
          </div>
        </div>
        </div>
        <br/>
        <hr/>
        <div className="gallery-container">
                <MovieGallery/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
