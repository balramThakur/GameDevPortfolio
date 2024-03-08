import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import profilePicture from '../Images/profile-picture.jpg';
import gmail from '../Images/gmail.png';
import phoneCall from '../Images/phone-call.png';
// import linkedin from '../Images/linkedin.png';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import ZombieKillerGame from '../Video/ZombieKillerGame.mp4';
import BattleGround from '../Video/Battlefront.mp4';
import GalaxyShooter from '../Video/GalaxyShooter.mp4';
import { FaChevronDown } from "react-icons/fa";

function Home() {

  const [gmailText, setGmailText] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(false);
  const GameVideo = [ZombieKillerGame, BattleGround, GalaxyShooter];
  const GameTitle = ["Zombie Killer", "BattleGround Havoc", "Galaxi Shooter"];
  const GameDescription = ["Zombie Killer Car is an adrenaline-pumping zombie car killer game where players unleash havoc on waves of zombies infesting the village. The objective is simple: mow down as many zombies as possible to earn points, which can be used to upgrade your car for even more carnage. With each kill, players earn one point, which can be spent on upgrading the car's health or unlocking devastating weapons like a rocket launcher.","Welcome to Battlefront Havoc, where every shot counts and every move can turn the tide of battle! Engage in intense multiplayer action against players from around the globe, or hone your skills offline against challenging AI opponents. With a wide array of weapons, maps, and game modes, the battlegrounds of Battlefront Havoc await your mastery. Are you ready to unleash havoc and emerge victorious?","Embark on an epic journey through the cosmos in Galaxy Shooter, a thrilling 2D arcade game that will test your piloting skills and reflexes to the limit! Blast through waves of enemy spacecraft, dodging incoming spacecraft and collecting power-ups to enhance your ship's firepower. With mesmerizing visuals and adrenaline-pumping gameplay, Galaxy Shooter offers endless hours of space-faring excitement. Prepare for warp speed and take on the challenge of conquering the galaxy!"];

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
                    <a onMouseEnter={() => { setGmailText(true) }} onMouseLeave={() => { setGmailText(false) }} href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=balramthakur159@gmail.com&tf=1
"><img src={gmail} alt='Gmail' /></a>{gmailText && "balramthakur159@gmail.com"}
                  </div>
                  <div className='phoneNumber'>

                    <a onMouseEnter={() => { setPhoneNumber(true) }} onMouseLeave={() => { setPhoneNumber(false) }} href="tel:932-664-7491"><img src={phoneCall} alt='Gmail' /> </a>{phoneNumber && "9326647491"}
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
                    {GameDescription[1]}
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
                    {GameDescription[2]}
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