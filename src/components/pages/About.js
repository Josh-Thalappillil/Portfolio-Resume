import '../../App.css';
import './about.css';
import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = "Josh's Portfolio | About"; 
  }, []);

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
          <p>I am a passionate software developer, with a hunger for innovation.<br/>
            I am skilled in a diverse range of programming languages and committed <br/> to continuous learning.
            A collaborative team player ready to make a  positive <br/> impact through technology. 
            Excited to contribute my skills to challenging<br/> projects and thrive in dynamic environments.</p>
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
