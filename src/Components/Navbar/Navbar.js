import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate=useNavigate();
  const handleNavigate=()=>{
    navigate('/admin')
  }
  return (
    <div className='navbar'>
      <img className='logo' src="#" alt="Emax" />
      <img onClick={handleNavigate} className='avathar' src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg" alt="Admin" />
    </div>
  )
}

export default Navbar
