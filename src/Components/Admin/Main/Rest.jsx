import React,{useState} from 'react'
import './Rest.css'
import NowShowing from '../NowShowing/NowShowing'
import Upcoming from '../Upcoming/Upcoming'
import Footer from '../../Footer/Footer'

function Rest() {
  const [state,setState]=useState('')
  let component= <NowShowing/>
  if (state==='now'){
    component = <NowShowing/>
  }else if (state==='up'){
    component = <Upcoming/>
  }


  return (
    <div className='rest'>
      <div className="a_contents">
        <div className="buttons">
          <button onClick={()=>setState('now')} className="button1">Now showing</button>
          <button onClick={()=>setState('up')}className="button1">Upcoming</button>
          <br />
        </div>
        <div className="content2">
          {component}
        </div>
      </div>
     <Footer/>
    </div>
  )
}

export default Rest
