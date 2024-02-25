import React from 'react';
import Navbar from '../Components/Navbar';
import profilePicture from '../Images/profile-picture.jpg';
function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <div className='profile'>
          <img src={profilePicture} alt='Profile'/>
        </div>
    </div>
  )
}

export default Home