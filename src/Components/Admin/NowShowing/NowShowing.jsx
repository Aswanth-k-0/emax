import React from 'react'
import './NowShowing.css'
import Upcoming from '../Upcoming/Upcoming'

function NowShowing() {


  return (
    <div className='nowshowing'>
      <div className="buttonalign">
        <button className="button2">Screen 1</button>
        <button className="button2">Screen 2</button>
        <button className="button2">Screen 3</button>
      </div>
      <Upcoming/>
    </div>
  )
}

export default NowShowing
