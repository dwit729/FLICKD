import React from "react";
import { useState } from "react";
import {Input} from 'antd';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import '../css/Gallery.css';
import '../App.css'
const {Search} = Input

const SearchPage = () => {

  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState();

  const handleSearch = async () => {
    try {
      setMovies()
      setisLoading(true)
      console.log(`${encodeURIComponent(query)}`)
      const response = await axios.get(`https://flickd-api.vercel.app/api/movies?query=${encodeURIComponent(query)}`);
      setMovies(response.data);
      setisLoading(false)
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  return (
    <>
       <div className=" flex flex-col items-center pt-10 divide-white">

      <h1 className="title text-xl sm:text-3xl">Find anything you want!</h1>
      <Search className="w-11/12"  placeholder="Search movies by title, director, year, genre, rating..." type="text" onChange={(e) => setQuery(e.target.value)} required onSearch={handleSearch} enterButton="Search" size="large" loading={isLoading} />

      <br/>
      <hr className="w-11/12"/><br/>
      {isLoading && <p className="text-xl text-white">LOADING MOVIES....</p>} <br/>
      {movies && <p className="text-xl text-white text-center"> Search Results</p>}
      <div className="gallery-container px-12">   
    
        <div className='gallery-box'>
     
          {
              movies && movies.map((movie)=>{
                  return(
                      <>
                        <div className='flex-column justify-center hover:cursor-pointer'>
                          <div className="gallery-movie" key={movie._id}>
                              <img onClick={()=>{navigate(`/movie/${movie._id}`)}} onError={(e) => {e.target.style.display = 'none'}} src={movie.posterUrl} onLoad={()=>{setisLoading(false)}}/>
                            </div>
                            <p>{movie.title}</p>
                        </div>          
                      </>
                  )
              })
          }

    </div>

      </div>
    </div>
    </>
   
  );
};

export default SearchPage;
