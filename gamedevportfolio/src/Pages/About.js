import React from 'react';
import { FaUnity } from "react-icons/fa";
import { SiBlender,SiFlutter } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import cshapreLogo from "../Images/clogo.png";

function About() {
    return (
        <>
            <div className='aboutSection'>
                <div className="imptyContainer">
                    <h2>About Me</h2>
                </div>
                <div className="aboutMePara">
                    <p>
                        Welcome to my corner of the digital universe! I'm Balram Thakur, a passionate Unity game developer on a journey to bring immersive experiences to life. Currently pursuing my B.Sc. in Information Technology at Bhavans College, I've delved into the world of C# programming and discovered my love for game development.

                        From the moment I laid hands on Unity, I knew I had found my creative outlet. The power to craft worlds, design characters, and engineer gameplay experiences is simply exhilarating. What began as a curiosity has evolved into a full-fledged passion, driving me to constantly learn and grow in this dynamic field.

                        Studying at Bhavans College has provided me with a solid foundation in programming principles, and my focus on C# has equipped me with the skills necessary to navigate Unity's versatile ecosystem. But more than just technical expertise, my time at college has instilled in me a spirit of curiosity and a commitment to excellence.

                        As a fresher in the Unity game development scene, I'm eager to collaborate, innovate, and push the boundaries of what's possible. Every project is an opportunity to refine my craft, experiment with new ideas, and ultimately, create experiences that resonate with players.
                    </p>
                    <div className="skills">
                        <h3>Skills: </h3>
                        <FaUnity />
                        <SiBlender />
                        <img src={cshapreLogo} className='cshapreLogo' alt="C#" />
                        <h3>Other Programming Skills: </h3>
                        <RiReactjsLine />
                        <SiFlutter/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
