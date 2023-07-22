import React from 'react';
import '../../App.css';
import './about.css';

function About() {
  return (
    <div className='about-container'>
      <div className='about-content'>
        <div className='about-header'>
          <h1>About Me</h1>
          <i className="fa-solid fa-gamepad fa-beat"></i>
        </div>
        <div className='underline'></div>
      </div>
      <div className='about-contents'>
        <div className='about-text'>
          <h1>Hello, my name is Josh.</h1>
          <p>I am a passionate software developer and recent graduate with a hunger for innovation.<br/>
            Skilled in diverse programming languages and committed to continuous learning.
            Collaborative<br/> team player ready to make a positive impact through technology. 
            Excited to contribute my<br/> skills to challenging projects and thrive in dynamic environments.</p>
        </div>
        <div className='about-image'>
          <img src="/images/about-me.jpg" alt="aboutMeImg" />
        </div>
      </div>
      <div className='techSkills'>
        <h1>Technical Skills</h1>
        <div className='underline'></div>
      </div>
    </div>
  );
}

export default About;
