import React, { useState, useEffect } from "react";
import { HeartFilled, StarOutlined } from "@ant-design/icons";
import {Rate, Input} from "antd";
import axios from 'axios';
import {useParams} from 'react-router-dom';
import "../css/Movie.css"


const MoviePage = () => {
  const [Loaded, setLoaded] = useState(false);
  const [LoggedIn, setLoggedIn] = useState(true);
  const [User, setUser] = useState();
  const { id } = useParams();
  const [Movie, setMovie] = useState();
  const [ReviewList, setReviewList] = useState([]);


  const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];
  const [Rating, setRating] = useState(0);


  const [Review, setReview] = useState();


  
  const fetchUser = async (userId) => {
    try {
        const response = await axios.get(`https://flickd-api.vercel.app/api/users/${userId}`);
        setUser(response.data);
    } catch (error) {
        
    }
}

const checkLoggedIn = () => {
    try {
        const userId = sessionStorage.getItem('userId');
        if(userId){
            setLoggedIn(true)
            fetchUser(userId)
        }
    } catch (error) {
        
    }
}


  const fetchData = async () => {
      try {
        const response = await axios.get(`https://flickd-api.vercel.app/api/movies/${id}`)
        console.log(`https://flickd-api.vercel.app/api/movies/${id}`)
        setMovie(response.data);
        setLoaded(true)
      } catch (error) {
        console.log(error)
      }
  }

  const fetchReview = async () => {
      setLoaded(false)
    try {
      const response = await axios.get(`https://flickd-api.vercel.app/api/reviews/movie/${id}`)
      setReviewList(response.data);
      console.log(ReviewList)
      setLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() =>{
      checkLoggedIn()
      fetchData();
      fetchReview()
  }, []);



  return (
    <>
    {
      Loaded && 
      <div>
            <div className="bg-slate-300 h-40  overflow-hidden">
              <img  onError={(e) => {e.target.style.display = 'none'}} src={Movie.bannerUrl} className="banner"/>     
            </div>
            <div>
              <h1 className="text-white font-bold text-2xl text-center m-10">{Movie.title}</h1>
            </div>
            <div className="px-10 flex flex-col md:flex-row gap-0 md:gap-5">
                <div className="segment flex-1">
                    <div className="poster-box">
                        <img src={Movie.posterUrl}/>
                    </div> 
                </div>
                <div className="segment">
                    <div>
                        <h1 className="movie-field">Directed by: {Movie.director}</h1>
                        <h3>{Movie.year}</h3> <br/>
                        <h1 className="movie-field">Synopsis:</h1>
                        <p>{Movie.summary}</p> <br/>
                        <h1 className="movie-field">Cast:</h1>
                        <div className="cast-container">
                          {Movie.cast.map((cast)=>{
                            return(
                              <>
                                <div>
                                    <p className="cast-box">{cast}</p>
                                </div>
                              </>
                            )
                          })}
                        </div>
                    </div>
                </div>
                { LoggedIn &&
                    <div className="segment">
                      <h1>Rate this Movie:</h1>
                      <Rate className="self-center" tooltips={desc} onChange={(e) => {setRating(e)}} defaultValue={Rating} />
                      {Rating ? <p className="text-center">{desc[Rating - 1]}</p> : ''}
                    </div>
                }
            </div>
        <br/>    
        <hr/>
        <div className="reviews-container">
              {ReviewList.map((review) => {
                  return(
                    <>
                      <p>{review.content}</p>
                    </>
                  )
              })}
        </div>
      </div>
    }
     
    </>
  );
};

export default MoviePage;
