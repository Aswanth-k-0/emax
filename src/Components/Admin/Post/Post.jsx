import React from 'react'
import './Post.css'

function Post({ movieData }) {
  console.log("data is this"+movieData);
  return (

      <div className="box box1">

        {/* Static movie posters */}
        {movieData.map((movie, index) => (
        <img key={index} className='poster1' src={movie.imageBase + movie.poster_path} alt={movie.title} />
      ))}<img className='poster1' src="https://upload.wikimedia.org/wikipedia/en/1/19/Kishkindha_Kaandam.jpeg" alt="Movies" />
      </div>
    
  )
}

export default Post
