import React from "react";
import { useState } from "react";
import {Input} from 'antd';
const {Search} = Input

const SearchPage = () => {


  const [isLoading, setisLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      setisLoading(true)
      const response = await axios.get(`https://flickd-api.vercel.app/api/movies?title=${encodeURIComponent(query)}`);
      const data = await response.json();
      setMovies(data);
      setisLoading(false)
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  return (
    <div className=" flex flex-col items-center pt-10">

      <h1 className="title text-xl sm:text-3xl">Find anything you want!</h1>
      <Search className="w-11/12" placeholder="input search text" type="text" onChange={(e) => setQuery(e.target.value)} required onSearch={handleSearch} enterButton="Search" size="large" loading={isLoading} />

      <hr/><br/><br/>

      <div className="gallery-container">
        <div className='gallery-box'>
          {isLoading && <p>LOADING MOVIES....</p>}
          {
              movies && movies.map((movie)=>{
                  return(
                      <>
                        <div className='flex-column justify-center'>
                          <div className="gallery-movie" key={movie._id}>
                              <img onError={(e) => {e.target.style.display = 'none'}} src={movie.posterUrl} onLoad={()=>{setisLoading(false)}}/>
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
  );
};

export default SearchPage;
