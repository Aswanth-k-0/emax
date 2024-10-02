import React, { useState } from 'react';
import './Upcoming.css';
import movieInfo from 'movie-info';

function Upcoming() {
  const [searchTerm, setSearchTerm] = useState(''); // State to store the input value
  const [movieData, setMovieData] = useState(null); // State to store the movie info

  const handleSearch = () => {
    // Call movieInfo with the search term
    movieInfo(searchTerm)
      .then(response => {
        setMovieData(response); // Store the entire response in movieData state
      })
      .catch(error => {
        console.error("Error fetching movie data:", error);
      });
  };

  return (
    <div className='container'>
      <div className="box box1">
        <img className='poster1' src="https://upload.wikimedia.org/wikipedia/en/1/19/Kishkindha_Kaandam.jpeg" alt="Movies" />
        <img className='poster1' src="https://upload.wikimedia.org/wikipedia/en/1/19/Kishkindha_Kaandam.jpeg" alt="Movies" />
        <img className='poster1' src="https://upload.wikimedia.org/wikipedia/en/1/19/Kishkindha_Kaandam.jpeg" alt="Movies" />
        <img className='poster1' src="https://upload.wikimedia.org/wikipedia/en/1/19/Kishkindha_Kaandam.jpeg" alt="Movies" />
        <img className='poster1' src="https://upload.wikimedia.org/wikipedia/en/1/19/Kishkindha_Kaandam.jpeg" alt="Movies" />
      </div>
      <div className="box box2">
        <div className="search">
          <div className="searchWrapper">
            <img onClick={handleSearch} className="searchIcon" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg" alt="" />
            <input type="text" className="searchbar" placeholder="Movie_name year" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            {console.log(movieData)}
          </div>
        </div>
        <div className="post">
          {movieData ? (
            <>
              <h3>{movieData.title}</h3>
              <p>{movieData.overview}</p>
              <img className='poster1' src={movieData.imageBase + movieData.poster_path} alt="poster" />
            </>
          ) : (
            <p> </p>
          )}
        </div >
        <div className='buttonalign'>
          <button className="button2" style={{fontSize:'10px', padding:}}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
