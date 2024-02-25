import React from 'react';
import Navbar from '../Components/Navbar';
import profilePicture from '../Images/profile-picture.jpg';
import ZombieKillerGame from '../Video/ZombieKillerGame.mp4';
function Home() {
  
  const GameVideo = [ZombieKillerGame, ZombieKillerGame, ZombieKillerGame];

  return (
    <div className='home'>
      <Navbar />
      <div className='profile'>
        <img src={profilePicture} alt='Profile' />
        <h2>
          Hi, My name is Balram Thakur And I am a Unity 2d and 3d Game Developer
        </h2>
      </div>

      <div className='VideoPlayer'>
        {
          GameVideo.map((videos) => <div>
            <video width="500" autoPlay="true" loop="true" controls >
              <source src={videos} type="video/mp4" />
            </video>
          </div>)
        }



      </div>

    </div>
  )
}

export default Home