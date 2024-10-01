import React from 'react'
import './NowShowing.css'
function NowShowing() {


  return (
    <div className='nowshowing'>
      <div className="buttonalign">
        <button className="button2">Screen 1</button>
        <button className="button2">Screen 2</button>
        <button className="button2">Screen 3</button>
      </div>
      <div className="posters" style={{paddingLeft:'20px',}}>
      <img style={{maxWidth:'200px'}} className='poster' src="https://upload.wikimedia.org/wikipedia/en/1/19/Kishkindha_Kaandam.jpeg" alt="Movies" />
        <img style={{maxWidth:'200px'}} className='poster' src="https://upload.wikimedia.org/wikipedia/en/1/19/Kishkindha_Kaandam.jpeg" alt="Movies" />
        <img style={{maxWidth:'200px'}} className='poster' src="https://upload.wikimedia.org/wikipedia/en/1/19/Kishkindha_Kaandam.jpeg" alt="Movies" />
        <img style={{maxWidth:'200px'}} className='poster' src="https://upload.wikimedia.org/wikipedia/en/1/19/Kishkindha_Kaandam.jpeg" alt="Movies" />
        <img style={{maxWidth:'200px'}} className='poster' src="https://upload.wikimedia.org/wikipedia/en/1/19/Kishkindha_Kaandam.jpeg" alt="Movies" />
      </div>
    </div>
  )
}

export default NowShowing
