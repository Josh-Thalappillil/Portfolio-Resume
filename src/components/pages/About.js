import '../../App.css';
import './about.css';
import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = "About | Josh's Portfolio"; 
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
          <p>As an Associate Software Engineer, I am driven by a passion for technology and its potential to innovate.<br/>
          My journey began with a deep exploration of programming languages and frameworks, fostering a robust foundation<br/>
          in computer science. I excel in both independent and collaborative environments, constantly pursuing new challenges<br/>
          to expand my expertise. Currently, I am advancing my skills as a <b>full-stack software developer</b> at Datacom, applying a<br/> proactive approach to deliver impactful results in the tech industry.</p>
          <a className='resume-link' href='./resume/Resume - Josh Thalappillil.pdf' target='_blank'>
            <i className='fa-solid fa-file fa-beat'></i> View Resume
          </a>
        </div>
        <div className='about-image'>
          <img src="/images/about-me.jpg" alt="aboutMeImg" />
        </div>
      </div>
      <div className='techSkills'>
        <h1>Technical Skills</h1>
        <div className='underline'></div>
        <ul>
          <li><strong>Languages:</strong> Python, TypeScript, JavaScript, HTML/CSS, Java, C#</li>
          <li><strong>Frameworks:</strong> Angular, PrimeNG, Django, React, Node.js</li>
          <li><strong>Developer Tools:</strong> Git, VS Code, Visual Studio, IntelliJ, PyCharm</li>
          <li><strong>Libraries:</strong> tsParticles, Bootstrap</li>
        </ul>
      </div>
      <div className='workExp'>
        <h1>Work Experience & Education</h1>
        <div className='underline'></div>
        <div className='workExpContent'>
          {/* Work Experience Section */}
          <div className='workExpSection'>
            <i className='fa-solid fa-briefcase'></i>
            <h2>Work Experience</h2>
            <p><strong>Datacom - Associate Software Developer</strong><br/>Date: 2023 - Present</p>
            <p><strong>Royal Melbourne Hospital - Health Information Manager</strong><br/>Date: 2021 - 2022</p>
            <ul>
              <li></li>
            </ul>
          </div>

          {/* Education & Training Section */}
          <div className='educationSection'>
            <i class="fa-solid fa-graduation-cap"></i>
            <h2>Education & Training</h2>
            <p><strong>The Odin Project Coding Bootcamp</strong><br/>Date: 2022</p>
            <p><strong>La Trobe University - Double Bachelor's Degree of Information Management & Health Sciences</strong><br/>Date: 2018 - 2021</p>
            <p><strong>Skillsoft Percipio - Training Platform</strong></p>
            <a class='creds' href='https://skillsoft.digitalbadges.skillsoft.com/profile/joshthalappillil/wallet'>View Completed Credentials</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
