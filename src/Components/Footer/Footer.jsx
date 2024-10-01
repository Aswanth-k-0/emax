import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className="contact">
            <p className='text'>Contact<br/>
            Emax Cinemas<br/>
            +91 8075762170<br/>
            emaxcinemasclt@gmail.com<br/></p>
        </div>
        <div className="socialmedia">
            <img className='social' src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="insta" />
            <img className='social' src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" alt="facebook" />
        </div>
    </div>
  )
}

export default Footer
