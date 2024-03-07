import React from 'react';
import Navbar from '../Components/Navbar';
import profilePicture from '../Images/profile-picture.jpg';
import gmail from '../Images/gmail.png';
import phoneCall from '../Images/phone-call.png';
import linkedin from '../Images/linkedin.png';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import ZombieKillerGame from '../Video/ZombieKillerGame.mp4';
import { FaChevronDown } from "react-icons/fa";

function Home() {

  const GameVideo = [ZombieKillerGame, ZombieKillerGame, ZombieKillerGame];
  const GameTitle = ["Zombie Killer", "Pubg", "Galaxi Shooter"];
  const GameDescription = [];

  return (
    <>
      <Fullpage>
        <FullPageSections>
          <FullpageSection style={{ with: "100vh" }}>
            <div className='home'>
              <Navbar />
              <div className='profile'>
                <img src={profilePicture} alt='Profile' className='profileImg' />
                <div>
                  <h2>
                    Hi, My name is Balram Thakur And I am a Unity 2d and 3d Game Developer
                  </h2>
                  <div className='gmailContainer'>
                    <img src={gmail} alt='Gmail' />
                    <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=balramthakur159@gmail.com&tf=1
">balramthakur159@gmail.com</a>
                  </div>
                  <div className='phoneNumber'>
                    <img src={phoneCall} alt='Gmail' />
                    <a href="tel:932-664-7491">9326647491</a>
                  </div>
                  <div className='linkedin'>
                    <img src={linkedin} alt='linkedin'/>
                  </div>
                </div>
              </div>
              <div className='myProjectsHeading'>
                <h2>
                  MY PROJECTS
                </h2>
                <FaChevronDown style={{ fontSize: "38" }} />
              </div>
            </div>
          </FullpageSection>
          <div className='videoPlayer'>
            <FullpageSection style={{ with: "100vh", padding: "14vh 0" }}>
              <div className='videoContainer'>
                <video width="800" autoPlay="true" loop="true" controls >
                  <source src={GameVideo[0]} type="video/mp4" />
                </video>
                <div>
                  <p>
                    {GameTitle[0]}
                  </p>
                </div>
              </div>
            </FullpageSection>
            <FullpageSection style={{ with: "100vh", padding: "14vh 0" }}>
              <div className='videoContainer'>
                <video width="800" autoPlay="true" loop="true" controls >
                  <source src={GameVideo[1]} type="video/mp4" />
                </video>
                <div>
                  <p>
                    {GameTitle[1]}
                  </p>
                </div>
              </div>
            </FullpageSection>
            <FullpageSection style={{ with: "100vh", padding: "14vh 0" }}>
              <div className='videoContainer'>
                <video width="800" autoPlay="true" loop="true" controls >
                  <source src={GameVideo[2]} type="video/mp4" />
                </video>
                <div>
                  <h3>
                    {GameTitle[2]}
                  </h3>
                  <p>

                  </p>
                </div>
              </div>
            </FullpageSection>
          </div>
        </FullPageSections>
      </Fullpage>

    </>
  )
}

export default Home