import React from 'react'
import "./Banner.css";

function Banner() {
  return (
    <div style={{backgroundImage:`url("https://images.indianexpress.com/2024/09/Kishkindha-Kandam-movie-review-12092024.jpg?w=640")`}} className='banner'>
        <div className='content'>
           <h1 className='title'>Title</h1>
           <h1 className='description'>Description</h1>

        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner
