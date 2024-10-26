import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

const MovieGallery = () => {
    const [Loading, setLoading] = useState(true);
    const [MoviesData, setMoviesData] = useState();

    useEffect(() => {
        axios.get('https://flickd-api.vercel.app/api/movies/').then((response)=>{
            setMoviesData(response)
            console.log(MoviesData)
        }).catch((err)=>{
            console.log(err)
        })
    }, []);


  return (
    <div>

    </div>
  )
}

export default MovieGallery
