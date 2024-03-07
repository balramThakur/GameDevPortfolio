import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import profilePicture from '../Images/profile-picture.jpg';
import gmail from '../Images/gmail.png';
import phoneCall from '../Images/phone-call.png';
// import linkedin from '../Images/linkedin.png';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import ZombieKillerGame from '../Video/ZombieKillerGame.mp4';
import BattleGround from '../Video/Battleground.mp4';
import GalaxyShooter from '../Video/GalaxyShooter.mp4';
import { FaChevronDown } from "react-icons/fa";

function Home() {

  const [gmailText, setGmailText] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(false);
  const GameVideo = [ZombieKillerGame, BattleGround, GalaxyShooter];
  const GameTitle = ["Zombie Killer", "BattleGround Havoc", "Galaxi Shooter"];
  const GameDescription = ["Zombie Killer Car is an adrenaline-pumping zombie car killer game where players unleash havoc on waves of zombies infesting the village. The objective is simple: mow down as many zombies as possible to earn points, which can be used to upgrade your car for even more carnage. With each kill, players earn one point, which can be spent on upgrading the car's health or unlocking devastating weapons like a rocket launcher."];

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
                    <a onMouseEnter={() => { setGmailText(true) }} onMouseLeave={() => {setGmailText(false)}} href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=balramthakur159@gmail.com&tf=1
"><img src={gmail} alt='Gmail' /></a>{gmailText && "balramthakur159@gmail.com"}
                  </div>
                  <div className='phoneNumber'>

                    <a onMouseEnter={() => { setPhoneNumber(true) }} onMouseLeave={() => {setPhoneNumber(false)}} href="tel:932-664-7491"><img src={phoneCall} alt='Gmail' /> </a>{phoneNumber && "9326647491"}
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
                <video width="800" autoPlay="true" loop="true" muted>
                  <source src={GameVideo[0]} type="video/mp4" />
                </video>
                <div>
                  <h3>
                    {GameTitle[0]}
                  </h3>
                  <p>
                    {GameDescription[0]}
                  </p>
                </div>
              </div>
            </FullpageSection>
            <FullpageSection style={{ with: "100vh", padding: "14vh 0" }}>
              <div className='videoContainer'>
                <video width="800" autoPlay="true" loop="true" muted>
                  <source src={GameVideo[1]} type="video/mp4" />
                </video>
                <div>
                  <h3>
                    {GameTitle[1]}
                  </h3>
                  <p>
                    {GameDescription[0]}
                  </p>
                </div>
              </div>
            </FullpageSection>
            <FullpageSection style={{ with: "100vh", padding: "14vh 0" }}>
              <div className='videoContainer'>
                <video width="800" autoPlay="true" loop="true" muted>
                  <source src={GameVideo[2]} type="video/mp4" />
                </video>
                <div>
                  <h3>
                    {GameTitle[2]}
                  </h3>
                  <p>
                    {GameDescription[0]}
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