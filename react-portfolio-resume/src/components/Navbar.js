import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button.js';

function Navbar() {
    const [click, setClick] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const navClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);
        return () => window.removeEventListener('resize', updateWindowWidth);
    }, []);

    // Function to handle click on the hamburger menu icon
    const handleMenuClick = () => {
        setClick(!click);
    };
        
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                Josh Thalappillil <span className='logo'><i className="fa-solid fa-code"/></span>
            </Link>
            {windowWidth <= 960 ? (
                <div className="menu-icon" onClick={handleMenuClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            ) : (
                <ul className="nav-menu">
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMenu}>
                    Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMenu}>
                    About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/projects' className='nav-links' onClick={closeMenu}>
                    Projects
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMenu}>
                    Contact
                    </Link>
                </li>
                </ul>
            )}
            </div>
        </nav>
        {click && windowWidth <= 960 && (
            <ul className="nav-menu dropdown">
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMenu}>
                Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/about' className='nav-links' onClick={closeMenu}>
                About
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/projects' className='nav-links' onClick={closeMenu}>
                Projects
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/contact' className='nav-links' onClick={closeMenu}>
                Contact
                </Link>
            </li>
            </ul>
        )}
        </>
    );
}

export default Navbar;
