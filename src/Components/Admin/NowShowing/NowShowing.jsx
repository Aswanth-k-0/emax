import React from 'react'
import './NowShowing.css'
import Post from '../Post/Post'
import Search from '../Search/Search'


function NowShowing({ movieData }) {


  return (
    <div className='nowshowing'>
      <div className="buttonalign">
        <button className="button2">Screen 1</button>
        <button className="button2">Screen 2</button>
        <button className="button2">Screen 3</button>
      </div>
      <div className='container'>
      <Post movieData={ movieData }/>
      <Search/>
    </div>
    </div>
  )
}

export default NowShowing
