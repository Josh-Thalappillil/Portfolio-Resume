import React, { useEffect } from 'react';
import '../../App.css';
import './contact.css';

function Contact() {
    useEffect(() => {
        document.title = "Contact | Josh's Portfolio"; 
    }, []);

    return (
        <>
            <div className='hero-container'>  
                <div className='about-header'>
                    <h1>Contact me</h1>
                    <i className="fa-solid fa-envelope fa-beat"></i>
                </div>
                <div className='underline'></div>
                <p>Feel free to email me:<a href='mailto:tjosh@duck.com' style={{ color: 'yellowgreen', textDecoration: 'none', fontWeight:'bold' }}> tjosh@duck.com</a><br/>Or connect with me on LinkedIn & GitHub</p>
                <div class='logo-container'>
                    <a href='https://github.com/Josh-Thalappillil'>
                        <img src='/images/github.png' alt='GitHub Logo' width='50' height='50' style={{ marginRight: '20px'}}/>
                    </a>
                    <a href='https://www.linkedin.com/in/joshua-thalappillil-631825190/'>
                        <img src='/images/linkedin.svg' alt='LinkedIn' width='50' height='50'/>
                    </a>
                </div>
            </div> 
        </>
    );
}

export default Contact;