import React, { useState, useEffect } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/Postes/RowPost';
import Footer from './Components/Footer/Footer';
import axios from 'axios';

function Main() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/get-movies');
        setMovieData(response.data); // Set the retrieved movie data
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies(); // Call the function to fetch movies
  }, []);

  // Filter movies based on their type (Now Showing and Upcoming)
  const nowShowingMovies = movieData.filter(movie => movie.type === 'Now Showing');
  const upcomingMovies = movieData.filter(movie => movie.type === 'Upcoming');

  return (
    <div className="App">
      <Navbar />
      <Banner movieData={movieData} />
      <RowPost title="Now Showing" movieData={nowShowingMovies} />
      <RowPost title="Upcoming" movieData={upcomingMovies} />
      <Footer />
    </div>
  );
}

export default Main;
