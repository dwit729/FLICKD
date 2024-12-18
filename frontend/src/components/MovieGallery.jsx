import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import "../css/Gallery.css";
import "../App.css"

const MovieGallery = () => {
    const [Loading, setLoading] = useState(true);
    const [MoviesData, setMoviesData] = useState([]);
    const [Error, setError] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
              setLoading(true)
              const response = await axios.get('https://flickd-api.vercel.app/api/movies/');
              setMoviesData(response.data);
              console.log(MoviesData)
            } catch (err) {
              setError(err.message);
              console.log(Error)
            } finally {
              setLoading(false)
            }
          };
          fetchMovies();
    }, []);


  return (
    <div className='gallery-box'>
        {Loading && <p>LOADING MOVIES....</p>}
        {
            MoviesData && MoviesData.map((movie)=>{
                return(
                    <>
                        <div className='flex-column justify-center hover:cursor-pointer'>
                          <div className="gallery-movie" onClick={()=>{navigate(`/movie/${movie._id}`)}} key={movie._id}>
                              <img onError={(e) => {e.target.style.display = 'none'}} src={movie.posterUrl} onLoad={()=>{setLoading(false)}}/>
                            </div>
                            <p>{movie.title}</p>
                        </div>          
                    </>
                )
            })
        }

    </div>
  )
}

export default MovieGallery
