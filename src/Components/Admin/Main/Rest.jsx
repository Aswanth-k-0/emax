import React, { useState, useEffect } from 'react';
import './Rest.css';
import NowShowing from '../NowShowing/NowShowing';
import Footer from '../../Footer/Footer';
import Upcoming from '../Upcoming/upcoming';
import axios from 'axios';

function Rest() {
  const [state, setState] = useState('up');
  const [movieData, setMovieData] = useState([]); // State to hold movie data
 

  // Function to fetch movies based on status
  const fetchMovies = async (status) => {
    try {
      const response = await axios.get(`http://localhost:3001/get-movies`);
      setMovieData(response.data); // Set the retrieved movie data
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  // Fetch movies whenever the state changes
  useEffect(()=>{
    if (state==='now'){
      fetchMovies('Now Showing');
    }else if(state==='up'){
      fetchMovies('Upcoming');
    }
  },[state])
  const nowShowingMovies = movieData.filter(movie => movie.type === 'Now Showing');
  const upcomingMovies = movieData.filter(movie => movie.type === 'Upcoming');
  console.log(movieData+"this is"+movieData._id);
  let component =<Upcoming movieData={upcomingMovies} />
  if (state === 'now') {
    component = <NowShowing movieData={nowShowingMovies} />;
  } 

  return (
    <div className='rest'>
      <div className="a_contents">
        <div className="buttons">
          <button onClick={() => setState('now')} className="button1">Now Showing</button>
          <button onClick={() => setState('up')} className="button1">Upcoming</button>
          <br />
        </div>
        <div className="content2">
          {component}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Rest;
