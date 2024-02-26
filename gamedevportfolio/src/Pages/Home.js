import React from 'react';
import Navbar from '../Components/Navbar';
import profilePicture from '../Images/profile-picture.jpg';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import ZombieKillerGame from '../Video/ZombieKillerGame.mp4';

function Home() {

  const GameVideo = [ZombieKillerGame, ZombieKillerGame, ZombieKillerGame];

  return (
    <>
      <Fullpage>
        <FullPageSections>
          <FullpageSection style={{ with: "100vh" }}>
            <div className='home'>
              <Navbar />
              <div className='profile'>
                <img src={profilePicture} alt='Profile' />
                <h2>
                  Hi, My name is Balram Thakur And I am a Unity 2d and 3d Game Developer
                </h2>
              </div>
            </div>
          </FullpageSection>
          <h2>
            MY PROJECTS
          </h2>
          <div className='videoPlayer'>
                {
                    GameVideo.map((videos) => <FullpageSection style={{ with: "100vh" }}>
                        <div className='videoContainer'>
                            <video width="800" autoPlay="true" loop="true" controls >
                                <source src={videos} type="video/mp4" />
                            </video>
                            <p>
                                "Undead Road Rampage: Drive, Destroy, Survive! Engage in heart-pounding action as you navigate through an endless road infested with zombies. Run over the undead, earn points, and upgrade your car's health or unlock a rocket launcher for ultimate destruction. Can you survive the apocalypse? Play now and find out!"
                            </p>
                        </div>
                    </FullpageSection>
                    )
                }
            </div>
        </FullPageSections>
        {/* <FullPageSections>
          <VideoShowcase />
        </FullPageSections> */}
      </Fullpage>

    </>
  )
}

export default Home