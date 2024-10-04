import React, { useState, useEffect } from 'react';
import './RowPost.css';
import axios from 'axios';

function RowPost(props) {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/get-movies?status=${props.title}`);
        setMovieData(response.data); // Set the retrieved movie data
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies(); // Call the function to fetch movies
  }, [props.title]); // Only run this effect when props.title changes

  return (
    <div className='row'>
      <h2 className='rowTitle'>{props.title}</h2>
      <div className="posters">
        {movieData.map((movie, index) => (
          <img 
            key={index} 
            className='poster1' 
            src={movie.imageBase + movie.poster_path} 
            alt={movie.title} 
          />
        ))}
      </div>
    </div>
  );
}

export default RowPost;
