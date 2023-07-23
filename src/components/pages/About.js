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
        <ul>
          <li><strong>Languages:</strong> C#, JavaScript, HTML/CSS, Java</li>
          <li><strong>Frameworks:</strong> React, Node.js</li>
          <li><strong>Developer Tools:</strong> Git, VS Code, Visual Studio, IntelliJ, PyCharm</li>
          <li><strong>Libraries:</strong> tsParticles, Bootstrap</li>
          <li><strong>Certifications:</strong> Microsoft Azure Fundamentals AZ-900 (in progress)</li>
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
            <p><strong>Datacom - Software Developer</strong><br/>Date: 2022 - Present</p>
            <p><strong>Royal Melbourne Hospital - Health Information Manager</strong><br/>Date: 2021 - 2022</p>
            <ul>
              <li></li>
            </ul>
          </div>

          {/* Education & Training Section */}
          <div className='educationSection'>
            <i class="fa-solid fa-graduation-cap"></i>
            <h2>Education & Training</h2>
            <p><strong>Odin Project Coding Bootcamp</strong><br/>Date: 2022</p>
            <p><strong>La Trobe University - Double Bachelor's Degree of Health Information Management & Health Sciences</strong><br/>Date: 2018 - 2021</p>
            <p><strong>Skillsoft Percipio - Training Platform</strong> <br/>Completed Credentials:</p>
            <ul className='percipiolist'>
              <li>Track 1: Agile Foundations</li>
              <li>Agile Foundations: Fundamentals</li>
              <li>Agile Principles and Methodologies</li>
              <li>Agile Foundations: Scrum Methodology</li>
              <li>Final Exam: Agile Foundations</li>
              <li>JavaScript: Getting Started with JavaScript Programming</li>
              <li>JavaScript: Introduction</li>
              <li>JavaScript: Types, Operators & Control Structures in JavaScript</li>
              <li>JavaScript: Functions & Arrays in JavaScript</li>
              <li>Programming Fundamentals: Object-oriented Programming</li>
              <li>Getting Started with Java: The fundamentals of Java Programming</li>
              <li>Modelling Entities in Java: Getting Started with Classes & Objects</li>
              <li>Mapping Relationships in Java: Modelling Is-a Relationships Using Inheritance</li>
              <li>Mapping Relationships in Java: Constructors & Polymorphism</li>
              <li>Programming in C#: Managing Program Flow</li>
              <li>Programming in C#: Creating Types</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
