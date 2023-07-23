import React, { useEffect } from 'react';
import '../../App.css';
import './contact.css';

function Contact() {
    useEffect(() => {
        document.title = "Josh's Portfolio | Contact"; 
    }, []);

    return (
        <>
            <div className='hero-container'>  
                <h1 className='fsdev'>&lt;Contact me&gt;</h1>
                <p>Feel free to email me <strong style={{ color: 'yellowgreen' }}>@jthalappillil7@gmail.com</strong> <br/>Or connect with me on LinkedIn & GitHub</p>
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