import React, { useState, useEffect } from 'react';
import './Rest.css';
import NowShowing from '../NowShowing/NowShowing';
import Footer from '../../Footer/Footer';
import axios from 'axios';
import Upcoming from '../Upcoming/upcoming';

function Rest() {
  const [state, setState] = useState('');
  const [movieData, setMovieData] = useState([]); // State to hold movie data

  useEffect(() => {
    // Fetch movie data based on selected state
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/movies/${state}`);
        setMovieData(response.data); // Set the movie data
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    if (state) {
      fetchMovies(); // Fetch movies when state changes
    }
  }, [state]);

  let component =<Upcoming movieData={movieData} />
  if (state === 'now') {
    component = <NowShowing movieData={movieData} />;
  } else if (state === 'up') {
    component = <Upcoming movieData={movieData} />;
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
