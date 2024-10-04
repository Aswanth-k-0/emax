import React, { useEffect, useState } from 'react';
import "./Banner.css";

function Banner({ movieData }) {
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    if (movieData && movieData.length > 0) {
      let validMovie = null;

      // Loop to ensure we get a movie with a valid backdrop_path
      while (!validMovie) {
        const randomIndex = Math.floor(Math.random() * movieData.length);
        const selectedMovie = movieData[randomIndex];

        // Check if the selected movie has a valid backdrop_path
        if (selectedMovie.backdrop_path) {
          validMovie = selectedMovie;
        }

        // Break the loop if all movies lack a backdrop, prevent infinite loop
        if (movieData.every(movie => !movie.backdrop_path)) {
          validMovie = { title: "Default Title", description: "Default Description", backdrop_path: "default_image_path.jpg" };
          break;
        }
      }
      setRandomMovie(validMovie);
    }
  }, [movieData]);

  if (!randomMovie) {
    return null; // Don't render anything if no random movie is selected yet
  }

  return (
    <div 
      style={{ backgroundImage: `url(${randomMovie.imageBase + randomMovie.backdrop_path})` }} 
      className='banner'
    >
      <div className='content'>
        <h1 className='title'>{randomMovie.title || "No Title Available"}</h1>
        <h1 className='description'>{randomMovie.overview || "No Description Available"}</h1>
      </div>
      <div className='fade_bottom'></div>
    </div>
  );
}

export default Banner;
