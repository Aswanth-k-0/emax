import React from 'react'
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/Postes/RowPost';
import Footer from './Components/Footer/Footer';


function Main() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost title='Now showing'/>
      <RowPost title='Upcoming'/>
      <Footer/>
    </div>
  )
}

export default Main
