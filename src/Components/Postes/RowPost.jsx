import React from 'react'
import "./RowPost.css"

function RowPost(props) {
  return (
    <div className='row'>
      <h2 className='rowTitle'>{props.title}</h2>
      <div className="posters">
        <img className='poster' src="https://upload.wikimedia.org/wikipedia/en/1/19/Kishkindha_Kaandam.jpeg" alt="Movies" />
        <img className='poster' src="https://upload.wikimedia.org/wikipedia/en/1/19/Kishkindha_Kaandam.jpeg" alt="Movies" />
        <img className='poster' src="https://upload.wikimedia.org/wikipedia/en/1/19/Kishkindha_Kaandam.jpeg" alt="Movies" />
        <img className='poster' src="https://upload.wikimedia.org/wikipedia/en/1/19/Kishkindha_Kaandam.jpeg" alt="Movies" />
        <img className='poster' src="https://upload.wikimedia.org/wikipedia/en/1/19/Kishkindha_Kaandam.jpeg" alt="Movies" />
      </div>
    </div>
  )
}

export default RowPost
