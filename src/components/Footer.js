import React from 'react';
import './Footer.css';

function Footer() {
    return (
    <div className='footer-container'>
        <div class='footer-links'>
            <a href='https://github.com/Josh-Thalappillil'>
                <img src='/images/github.png' alt='GitHub Logo' width='50' height='50' style={{ marginRight: '20px' }}/>
            </a>
            <a href='https://www.linkedin.com/in/joshua-thalappillil-631825190/'>
                <img src='/images/linkedin.svg' alt='LinkedIn' width='50' height='50' style={{ marginRight: '20px' }}/>
            </a>
        </div>
    </div>
    );
}

export default Footer;