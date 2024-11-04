import React, { useState, useEffect } from "react";
import { HeartFilled, StarOutlined } from "@ant-design/icons";
import {Rate, Input, Button, Popconfirm, message} from "antd";
import axios from 'axios';
import {useParams} from 'react-router-dom';
import "../css/Movie.css"
import "../css/Review.css"
import ReviewComponent from "../components/Review";

const {TextArea} = Input;

const MoviePage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [Change, setChange] = useState(true);
  const [Loaded, setLoaded] = useState(false);
  const [DeleteLoading, setDeleteLoading] = useState(false);
  const [LoggedIn, setLoggedIn] = useState(false);
  const [Favorite, setFavorite] = useState(false);
  const [User, setUser] = useState({});
  const { id } = useParams();
  const [Movie, setMovie] = useState();
  const [ReviewList, setReviewList] = useState([]);


  const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];
  const [Rating, setRating] = useState(0);
  const [Content, setContent] = useState("");
  const [Review, setReview] = useState();


  
  const fetchUser = async (userId) => {
    setLoaded(false)
    try {
        const response = await axios.get(`https://flickd-api.vercel.app/api/users/${userId}`);
        setUser(response.data);
        checkIfFavorite()
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

const checkIfFavorite = () => {
    for (let index = 0; index < User.reviews.length; index++) {
        console.log(User.reviews[index])
      
    }
}


const addToFavorites = async () => {
   
}

const postReview = () => {
   if(Rating>0 && Content.length>=5){
    try {
      const UserReview = {
        userId: User._id,
        rating: Rating,
        content: Content
      }
      console.log(UserReview)
      const response = axios.post(`https://flickd-api.vercel.app/api/movies/${id}/reviews`, UserReview);
      
      if(response){
        messageApi.open({
          type: 'success',
          content: 'Review Added',
        });
        setRating(0)
        setContent("")
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (error) {
      console.log(error)
      window.alert("Error Posting Review")
    } 
   }
   else{    
    messageApi.open({
      type: 'error',
      content: 'Invalid Review',
    });
   }
   
}

const handleDeleteReview = (id) => {
  setDeleteLoading(true)
   try {
    const response = axios.delete(`https://flickd-api.vercel.app/api/reviews/${id}`);
   } catch (error) {
      window.alert("Review Delete Error")
   } finally {
      setDeleteLoading(false)
      messageApi.open({
        type: 'success',
        content: 'Review Deleted Succesfully',
      });
      setTimeout(() => {
        window.location.reload();
      }, 500);
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
      checkLoggedIn();
      fetchData();
      fetchReview();
  }, []);



  return (
    <>
    {contextHolder}
    {
      Loaded?
      <div >
            <div className="bg-slate-300 h-50 overflow-hidden">
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
                    {(LoggedIn && !Favorite) && <Button color="primary" variant="outlined" className="mt-5 w-2/3 min-w-32 self-center">Add to Favorites</Button>}
                    {(LoggedIn && Favorite) && <Button color="danger" variant="outlined" className="mt-5 w-2/3 min-w-32 self-center">Delete from Favorites</Button>}
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

                      <br />

                      <TextArea
                        value={Content}
                        onChange={(e)=>{setContent(e.target.value)}} 
                        rows={8} 
                        placeholder="Write a review..." 
                        className="review-section self-center"
                        style={{resize: "none"}}
                      />

                      <button className="button-complimentary text-base self-center mt-5 mb-0" onClick={postReview}>Post Review</button>
                    </div>
                }
            </div>
        <br/>    
        <hr/>
        <div className="reviews-container">
              {ReviewList.map((review) => {
                  return(
                    <ReviewComponent 
                      reviewer={review.userId.username}
                      review={review.content} 
                      rating={review.rating}
                      posted={review.datePosted}
                      userId={sessionStorage.getItem("userId")}
                      reviewId={review.userId._id}
                      handleDeleteReview = {()=> {handleDeleteReview(review._id)}}
                    />
                  )
              })}
        </div>
      </div>
      :
      <h1 className="title text-center mt-20">LOADING.....</h1>
    }
     
    </>
  );
};

export default MoviePage;
