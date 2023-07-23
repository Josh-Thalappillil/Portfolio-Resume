import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
    <div className='footer-container'>
        <div class='footer-links'>
            <h2>Contact Me</h2>
            <Link to='/'>GitHub</Link>
            <Link to='/'>Linkedin</Link>
        </div>
    </div>
    );
}

export default Footer;