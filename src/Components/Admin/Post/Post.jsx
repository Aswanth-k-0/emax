import React,{useState} from 'react';
import './Post.css';
import axios from 'axios';

function Post({ movieData }) {
  
const [showPopup,setShowPopup]=useState(false);
const [selectedMovie, setSelectedMovie] = useState(null); // Track selected movie

const handlePosterClick=(movie)=>{
  console.log('Poster clicked:', movie); 
  setSelectedMovie(movie);
  setShowPopup(true);
  console.log(showPopup);
};

 // Function to delete the selected movie
 const deleteMovie = async () => {
  try {
    // Send DELETE request to the server to remove the movie
    await axios.delete(`http://localhost:3001/delete-movie/${selectedMovie._id}`);
    setShowPopup(false); // Close popup after deletion
    // Optionally, trigger a fetch of the updated movie list here
  } catch (error) {
    console.error('Error deleting movie:', error);
  }
};

  return (
    <div className="box box1">

      <div>

        {/* Static movie posters */}
        {movieData.map((movie, index) => (
        <img
        key={index}
        className='poster1'
        src={movie.imageBase + movie.poster_path}
        alt={movie.title}
        onClick={() => handlePosterClick(movie)} // Attach click handler
      />      
      ))}
      </div>
      {/*popup */}
      {showPopup && (
  <div className="popup-overlay">
    <div className="popup">
      <h3>Are you sure?</h3>
      <div className="popup-buttons">
      <button className="save-button" onClick={deleteMovie}>Yes</button>
      <button className="close-button" onClick={() => setShowPopup(false)}>No</button>
      </div>
    </div>
  </div>
)}

      </div>
  )
}

export default Post
