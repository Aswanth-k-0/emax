import React, { useState } from 'react'
import movieInfo from 'movie-info';
import './Search.css'
import axios from 'axios';
function Search() {
    const [searchTerm, setSearchTerm] = useState(''); // State to store the input value
    const [movieData, setMovieData] = useState(null); // State to store the movie info
    const [showPopup, setShowPopup] = useState(false); // State to show/hide the popup
    const [upcoming, setUpcoming] = useState('Upcoming'); // State to store if the movie is Upcoming or Now Showing
    const [screen, setScreen] = useState(''); // State to store selected screen if Now Showing


      // Function to handle movie search
  const handleSearch = () => {
    movieInfo(searchTerm).then(response => {setMovieData(response);})
  .catch(error => {console.error("Error fetching movie data:", error);});
  };

  // Function to handle Add button click to show the popup
  const handleAddClick = () => {
    if (!movieData) {
      alert('Please search and select a movie first!');
      return;
    }
    setShowPopup(true); // Show the popup
  };

  // Function to save movie data into MongoDB
const saveToDatabase = async (movieToSave) => {
     try { 
    const response = await axios.post('http://localhost:3001/save-movie', { movieData: movieToSave });// Send a POST request to your backend to save the movie data
    console.log('Movie saved successfully:', response.data);
    alert('Movie saved successfully!');
  } catch (error) {
    console.error('Error saving movie to the database:', error);
    alert('Error saving movie to the database.');
  }
};
  // Function to save the movie data
  const handleSaveMovie = () => {
    const movieToSave = {...movieData,upcoming, // Save upcoming or now showing status
    screen: upcoming === 'Now Showing' ? screen : null, // Add screen if Now Showing
    };
    console.log('Movie data to save:', movieToSave);
    saveToDatabase(movieToSave);// Save to MongoDB
    setShowPopup(false); // Close the popup
  };

  const handleClosePopup = () => {setShowPopup(false);};// Close the popup without saving


  return (
    <div className="box box2">
  <div className="search">
    <div className="searchWrapper">
      {/* Search bar for movie input */}
      <img onClick={handleSearch} className="searchIcon" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg" alt="" />
      <input type="text" className="searchbar" placeholder="Movie Name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
  </div>

  <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', height: '100%' }}>
    <div className="post2" style={{ flex: 1 }}>
      {movieData ? (
        <>
          <h3>{movieData.title}</h3>
          <p>{movieData.overview}</p>
          <img className="poster1" src={movieData.imageBase + movieData.poster_path} alt="poster" />
        </>
      ) : (
        <p> </p>
      )}
    </div>

    {/* Button to trigger the popup */}
    <div className="buttonalign2">
      <button className="button21" onClick={handleAddClick}>
        Add
      </button>
    </div>
  </div>

  {/* Popup Modal */}
  {showPopup && (
    <div className="popup-overlay">
      <div className="popup">
        {/* Popup content */}
        <h2>Select Movie Status</h2>
        {/* Radio buttons */}
        <label>
          <input
            type="radio"
            value="Upcoming"
            checked={upcoming === 'Upcoming'}
            onChange={() => setUpcoming('Upcoming')}
          /> Upcoming
        </label>
        <label>
          <input
            type="radio"
            value="Now Showing"
            checked={upcoming === 'Now Showing'}
            onChange={() => setUpcoming('Now Showing')}
          /> Now Showing
        </label>

        {/* Screen selection */}
        {upcoming === 'Now Showing' && (
          <div className="screen-selection">
            <label>
              Select Screen:
              <select value={screen} onChange={(e) => setScreen(e.target.value)}>
                <option value="">Select Screen</option>
                <option value="Screen 1">Screen 1</option>
                <option value="Screen 2">Screen 2</option>
                <option value="Screen 3">Screen 3</option>
              </select>
            </label>
          </div>
        )}

        {/* Buttons */}
        <div className="popup-buttons">
          <button onClick={handleSaveMovie} className="save-button">Save</button>
          <button onClick={handleClosePopup} className="close-button">Close</button>
        </div>
      </div>
    </div>
  )}
</div>

  )
}

export default Search
