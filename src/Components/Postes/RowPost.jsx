import React from 'react';
import './RowPost.css';

function RowPost({ title, movieData }) { // Destructure both props
  return (
    <div className='row'>
      <h2 className='rowTitle'>{title}</h2>
      <div className="posters">
        {movieData && movieData.map((movie, index) => ( // Safeguard against null or undefined movieData ))}
          <img 
            key={index} 
            className='poster1' 
            src={movie.imageBase + movie.poster_path} // Assuming movie has imageBase and poster_path fields
            alt={movie.title} 
          />
        ))}
      </div>
    </div>
  );
}

export default RowPost;
