import React from 'react';
import './Upcoming.css';
import Post from '../Post/Post';
import Search from '../Search/Search';

function upcoming({ movieData }) {



  return (
    <div className='container'>
      <Post movieData={ movieData }/>
      <Search/>
    </div>
  );
}

export default upcoming;
